import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer';

import styles from '../styles/layout.module.css'

export const siteTitle = 'Bradley Schoeneweis';
const name = 'Bradley Schoeneweis';
const metaImage = (`https://og-image.vercel.app/${encodeURI(
  siteTitle
)}.png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350`);

export default function Layout({ children, home, tagPage }) {
  let tagLink;
  
  if (tagPage) {
    tagLink = (
      <Link href="/tags">
        <a>View All Tags</a>
      </Link>
    );
  }

  return (
    <>
      <div className={home ? styles.HomeContainer : styles.ArticleContainer}>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"
          />
          <meta
            name="description"
            content="Bradley Schoeneweis"
          />
          <meta
            property="og:image"
            content={metaImage}
          />
          <meta name="robots" content="follow, index" />
          <meta name="og:title" content={siteTitle} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:description" content={name} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bschoeneweis" />
          <meta name="twitter:title" content={name} />
          <meta name="twitter:description" content={name} />
          <meta name="twitter:image" content={metaImage} />       
        </Head>
        <header>
          {home && <h1 className={styles.HomeName}>{name}</h1>}
          {!home && (
            <div className={styles.LayoutLinks}>
              <Link href="/">
                <a>← Back home</a>
              </Link>
              {tagLink}
            </div>
          )}
        </header>
        <main>{children}</main>
      </div>
      <Footer home={home} />
    </>
  )
}