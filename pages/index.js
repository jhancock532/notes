import Link from 'next/link';
import Layout from '/components/Layout';
import Hero from '/components/Hero';

export default function Index() {
  return (
    <Layout>
      <Hero title="Hello!">
        <p>Welcome to the blog! I'm James, a web developer and net artist.</p>
        <p>
          If you're interested in web development, check out the blog posts at{' '}
          <Link href="/coding">/coding</Link>.
        </p>
        <p>
          More general musings can be found in{' '}
          <Link href="/thoughts">/thoughts</Link>.
        </p>
        <p>Thank you for visiting, I hope you have a nice day.</p>
      </Hero>
    </Layout>
  );
}
