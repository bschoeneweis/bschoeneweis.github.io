import { useState } from 'react';

import Checkbox from '../components/Checkbox'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Tag from '../components/Tag'

import { getAllTags, getPostDataByTag } from '../lib/tags'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const tagsWithPosts = {};
  const allTags = await getAllTags();

  for (const tagPath of allTags) {
    const tag = tagPath.replace('/tags/', '');
    tagsWithPosts[tag] = await getPostDataByTag(tag);
  }

  return {
    props: {
      tagsWithPosts
    }
  }
}

export default function TagPage({ tagsWithPosts }) {
  const [showPosts, setShowPosts] = useState(true);

  const tagAndPostList = Object.keys(tagsWithPosts).map((tag) => {
    return (
      <section key={tag} className={`${utilStyles.headingMd} ${utilStyles.marginLeft0_5rem} `}>
        <Tag tag={tag} isHeader useLink label={tagsWithPosts[tag].length} />
        {showPosts && <PostList posts={tagsWithPosts[tag]} withPadding /> }
      </section>
    );
  });

  const title = 'All Tags';
  return (
    <Layout title={title} description={title}>
      <header>
        <h1 className={utilStyles.headingXl}>All tags</h1>
        <div className={utilStyles.floatRight}>
          <Checkbox label={'Show posts'} value={showPosts} onChange={(x) => setShowPosts(!showPosts)} />
        </div>
      </header>

      {tagAndPostList}

    </Layout>
  );
}