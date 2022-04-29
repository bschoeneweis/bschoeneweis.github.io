import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import Tag from '../../components/Tag';

import { getAllTags, getPostDataByTag } from '../../lib/tags';

import utilStyles from '../../styles/utils.module.css';

export const getStaticProps = async ({ params }) => {
  const { tag } = params;
  const taggedPosts = await getPostDataByTag(tag);
  return {
    props: {
      tag,
      taggedPosts,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllTags();
  return {
    paths,
    fallback: false,
  };
};

const TagPage = ({ tag, taggedPosts }) => {
  const title = `Posts tagged "${tag}"`;
  return (
    <Layout tagPage title={title} description={title}> 
      <header>
        <Tag tag={tag} isHeader/>
      </header>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1rem} ${utilStyles.marginLeft0_5rem} `}>
        <PostList posts={taggedPosts} />
      </section>
    </Layout>
  );
};

export default TagPage;
