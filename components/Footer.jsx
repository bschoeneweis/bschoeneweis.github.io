import styles from '../styles/footer.module.css';

const YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.FooterName}>
          © <time>{YEAR}</time> Bradley Schoeneweis
        </div>
        <div className={styles.FooterLinks}>
          <a href="https://www.linkedin.com/in/bradley-schoeneweis/" target="_blank" rel="noreferrer">
            <img width="16" src="/icons/linkedin.svg" alt="linkedin logo" className={styles.SocialLinkLogo}></img>
          </a>
          <a href="https://github.com/bschoeneweis" target="_blank" rel="noreferrer">
            <img width="16" src="/icons/github.svg" alt="github logo" className={styles.SocialLinkLogo}></img>
          </a>
          <a href="https://medium.com/@bradley-schoeneweis" target="_blank" rel="noreferrer">
            <img width="16" src="/icons/medium.svg" alt="medium logo" className={styles.SocialLinkLogo}></img>
          </a>
          <a href="https://dev.to/bschoeneweis" target="_blank" rel="noreferrer">
            <img width="16" src="/icons/dev.svg" alt="dev logo" className={styles.SocialLinkLogo}></img>
          </a>
          <a href="/feed.xml">
            <img width="16" src="/icons/rss.svg" alt="rss logo" className={styles.SocialLinkLogo}></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
