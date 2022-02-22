import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import Layout from '../../components/Layout'
import TagList from '../../components/TagList'
import CodeBlock from '../../components/markdown-renderers/CodeBlock'
import Paragraph from '../../components/markdown-renderers/Paragraph'
import Author from '../../components/Author'

import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.title} description={postData.description}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <TagList tags={postData.tags} isPost />
        <Author date={postData.date} />

        <ReactMarkdown
          components={{
            code: CodeBlock,
            p: Paragraph,
          }}
          linkTarget="_blank"
          rehypePlugins={[rehypeRaw]}
        >
          {postData.markdown}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}
