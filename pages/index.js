import Link from 'next/link';
import Layout from '/components/Layout';
import Hero from '/components/Hero';

export default function Index() {
  return (
    <Layout>
      <Hero title="Homepage">
        <p>
          Hello, welcome to the blog! I'm James, a web developer and net artist.
          This site is a space to write and share some ideas.
        </p>
        <p>
          If you're interested in web dev explorations, try{' '}
          <Link href="/coding">/coding</Link>. For musings on the impending AI
          apocalypse, and how that will change your relationship with instant
          ramen noodles, try <Link href="/thoughts">/thoughts</Link>. As a last
          resort, you could also go to <Link href="/reviews">/reviews</Link>,
          however I've not added anything there yet.
        </p>
        <p>Thank you for visiting.</p>
      </Hero>
    </Layout>
  );
}
