import Image from 'next/image'
import Date from './Date'

import styles from '../styles/author.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Author({date}) {
  return (
    <div className={styles.Author}>
      <Image
        priority
        src="/images/profile.jpg"
        height={40}
        width={40}
        alt="Bradley Schoeneweis"
        className={utilStyles.borderCircle}
      />
      <div className={`${utilStyles.lightText} ${styles.AuthorDate}`}>
      Bradley Schoeneweis 
        <span className={utilStyles.dotSeparator}>•</span>
        <Date dateString={date} />
      </div>
    </div>
  )
};
