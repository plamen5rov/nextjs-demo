import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="news/news-one">News 1</Link>
        </li>
        <li>
          <Link href="news/news-two">News 2</Link>
        </li>
        <li>
          <Link href="news/news-three">News 3</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
