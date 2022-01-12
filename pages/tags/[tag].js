import Layout from '../../components/Layout'
import PostList from '../../components/PostList'
import Tag from '../../components/Tag'

import { getAllTags, getPostDataByTag } from '../../lib/tags'

import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const taggedPosts = await getPostDataByTag(tag);
  return {
    props: {
      tag,
      taggedPosts,
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllTags();
  return {
    paths,
    fallback: false,
  }
}

export default function TagPage({ tag, taggedPosts }) {
  return (
    <Layout tagPage title={`Posts tagged "${tag}"`}> 
      <header>
        <Tag tag={tag} isHeader/>
      </header>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1rem} ${utilStyles.marginLeft0_5rem} `}>
        <PostList posts={taggedPosts} />
      </section>

    </Layout>
  );
}