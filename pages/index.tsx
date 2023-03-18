import Head from "next/head";
import Link from "next/link";
import { Layout } from "~/components";
import Aloha from "~/components/UI/aloha";
import { Posts } from "~/components/UI";
import { getBlogPostData } from "~/lib/posts";
import type { PostData } from "~/types";

type Props = {
  allPostsData: PostData[];
};

export default function IndexPage({ allPostsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>supg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <Aloha />
      </section>
      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100  md:text-3xl lg:text-4xl">
          Latest threads
        </h2>
        <Posts allPostsData={allPostsData} />
        <p className="my-8 md:text-lg lg:text-xl">
          ✨ See{" "}
          <Link
            className="text-pink-600 dark:text-pink-600 no-underline"
            href="/thread"
          >
            all threads
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = (await getBlogPostData()).slice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
}
