import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer';

import { getMetaImage } from '../lib/meta';

import styles from '../styles/layout.module.css'

export const siteTitle = 'Bradley Schoeneweis';
const name = 'Bradley Schoeneweis';

export default function Layout({ children, home, tagPage, title }) {
  let tagLink;
  
  if (tagPage) {
    tagLink = (
      <Link href="/tags">
        <a>View All Tags</a>
      </Link>
    );
  }

  const metaImage = getMetaImage(title || siteTitle);

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
          <meta name="og:title" content={title || siteTitle} />
          <meta property="og:site_name" content={title || siteTitle} />
          <meta property="og:description" content={name} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bschoeneweis" />
          <meta name="twitter:title" content={name} />
          <meta name="twitter:description" content={name} />
          <meta name="twitter:image" content={metaImage} />   
          <title>{title || siteTitle}</title>    
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