import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'
import styles from '../styles/tag.module.css'

export default function Tag({ tag, useLink, isHeader, index, label }) {
  let spanClasses = isHeader ? `${styles.Badge} ${styles.BadgeLarge}` : `${styles.Badge}`;
  if (useLink) {
    spanClasses += ` ${utilStyles.cursorPointer}`;
  }
  const divFallbackClass = index !== 0 ? styles.TagListItem : null;
  let renderedTag = (
    <div className={isHeader ? `${utilStyles.marginTop2_25} ${utilStyles.marginBottom1_25}` : divFallbackClass}>
      <span className={spanClasses}>{tag}</span>
    </div>
  );

  if (useLink) {
    renderedTag = (
      <div className={utilStyles.displayFlex}>
        <Link href={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
          <a>{renderedTag}</a>
        </Link>
        {label && <span className={styles.TagLabel}>• <small className={utilStyles.lightText}>{label}</small></span>}
      </div>
    )
  }
  
  return renderedTag;
};
