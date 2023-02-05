import { useRouter } from 'next/router';

function NewsPage() {
  const router = useRouter();
  const text = router.query.newsId;

  return (
    <>
      <h1>News Page #{text}</h1>
    </>
  );
}

export default NewsPage;
