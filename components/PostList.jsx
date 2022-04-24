import Link from 'next/link';
import Date from '../components/Date';
import TagList from './TagList';

import utilStyles from '../styles/utils.module.css';

const PostList = ({ posts, withPadding }) => {
  return (
    <ul className={withPadding ? `${utilStyles.list} ${utilStyles.marginLeft1rem}` : utilStyles.list}>
      {posts.map(({ id, date, title, tags }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <div className={`${utilStyles.marginBottom0_5rem} ${utilStyles.marginTop0_5rem}`}>
            <TagList tags={tags} />
          </div>
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
