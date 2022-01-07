import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import PostList from '../components/PostList'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul className={styles.BioList}>
          <li className={styles.BioListItem}>📍 &nbsp; Fort Worth, TX</li>
          <li className={styles.BioListItem}>
            💻 &nbsp; Product Engineer @ <a href="https://radar.com" target="_blank">Radar</a>
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1rem}`}>
        <PostList posts={allPostsData} />
      </section>
    </Layout>
  )
}