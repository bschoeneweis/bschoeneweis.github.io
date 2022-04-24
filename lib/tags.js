import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllTags = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const tags = new Set();

  fileNames.map(fileName => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    if (matterResult?.data?.tags) {
      matterResult.data.tags.forEach(
        (tag) => tags.add(`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`)
      );
    }
  });

  return Array.from(tags);
};

export const getPostDataByTag = async (tag) => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = [];

  fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
  
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    if (matterResult?.data?.tags && matterResult.data.tags.includes(tag)) {
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id and contentHtml
      posts.push({
        id,
        contentHtml,
        markdown: matterResult.content,
        ...matterResult.data,
      });
    }
  });

  return posts;
};
