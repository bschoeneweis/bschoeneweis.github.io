import { useState } from 'react';

import Checkbox from '../components/Checkbox'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Tag from '../components/Tag'

import { getAllTags, getPostDataByTag } from '../lib/tags'

import utilStyles from '../styles/utils.module.css'

export const getStaticProps = async () => {
  const tagsWithPosts = {};
  const allTags = getAllTags();

  for (const tagPath of allTags) {
    const tag = tagPath.replace('/tags/', '');
    const posts = await getPostDataByTag(tag);
    tagsWithPosts[tag] = posts.filter((post) => !post.hidden);
  }

  return {
    props: {
      tagsWithPosts,
    },
  };
};

const TagPage = ({ tagsWithPosts }) => {
  const [showPosts, setShowPosts] = useState(false);

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
};

export default TagPage;
