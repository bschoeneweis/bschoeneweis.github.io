import Tag from './Tag';

import styles from '../styles/tag.module.css';

const TagList = ({ tags, isPost }) => {
  const tagComponents = tags.map((tag, index) => {
    return (
      <Tag
        key={`${tag}=${Math.random().toString().split('.')[1]}`}
        tag={tag}
        index={index}
        useLink
      />
    )
  });

  return (
    <div className={isPost ? `${styles.TagList} ${styles.TagListPost}` : styles.TagList}>
      {tagComponents}
    </div>
  );
};

export default TagList;
