const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const generate = async () => {
  const feed = new RSS({
    title: 'Bradley Schoeneweis',
    site_url: 'https://bradleyschoeneweis.com',
    feed_url: 'https://bradleyschoeneweis.com/feed.xml',
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'posts'));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) {
        return;
      }

      const content = await fs.readFile(
        path.join(__dirname, '..', 'posts', name),
      );
      const frontmatter = matter(content);
      const { data } = frontmatter;
      const { title, date, description, tags, hidden } = data || {};

      if (!hidden) {
        feed.item({
          title,
          url: '/posts/' + name.replace(/\.mdx?/, ''),
          date,
          description,
          tags,
          author: 'Bradley Schoeneweis',
        });
      }
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
