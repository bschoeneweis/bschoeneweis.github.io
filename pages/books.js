
import Layout from '../components/Layout';

import { currentlyReading, haveRead, upcomingBooks } from '../data/books';

import utilStyles from '../styles/utils.module.css';

const getBookList = (booksList) => {
  return booksList.map((book, index) => {
    return (
      <li key={index}>
        <a href={book.href} target="_blank" rel="noreferrer">{book.title}</a> <span className={utilStyles.lightText}>by {book.author}</span>
      </li>
    );
  });
};

const BooksPage = () => {
  const readList = getBookList(haveRead.reverse());
  const currentReadList = getBookList(currentlyReading);
  const nextList = getBookList(upcomingBooks);

  const title = 'Books';
  return (
    <Layout title={title} description={title}>
      <header>
        <h1 className={utilStyles.headingXl}>📚 Books</h1>
      </header>

      <section className={`${utilStyles.marginLeft0_5rem} `}>
        <h2 className={utilStyles.headingL}>Finished</h2>
        <ul>
          { readList }
        </ul>
      </section>

      <section className={`${utilStyles.padding1rem} ${utilStyles.marginLeft0_5rem} `}>
        <h2 className={utilStyles.headingL}>Now</h2>
        <ul>
          { currentReadList }
        </ul>
      </section>

      <section className={`${utilStyles.padding1rem} ${utilStyles.marginLeft0_5rem} `}>
        <h2 className={utilStyles.headingL}>Next</h2>
        <ul>
          { nextList }
        </ul>
      </section>
    </Layout>
  );
};

export default BooksPage;
