import * as React from "react";
import Head from "next/head";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostData } from "~/lib/posts";
import { Layout } from "~/components/common";
import Date from "~/components/date";
import type { Frontmatter } from "~/types";
import Link from "next/link";

import Author from "~/components/common/author";

type Props = {
  code: string;
  frontmatter: Frontmatter;
};

export default function BlogPost({ code, frontmatter }: Props) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article itemScope itemType="http://schema.org/Article">
        <header className="mx-auto mb-8 max-w-5xl sm:px-4">
          <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 py-16 px-4 sm:rounded-md md:px-8 md:py-24 lg:py-32 lg:px-16">
            <h1
              itemProp="headline"
              className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tighter"
            >
              {frontmatter.title}
            </h1>
          </div>
        </header>

        <section
          itemProp="articleBody"
          className="prose mx-auto my-4 px-4 dark:prose-invert md:prose-lg lg:prose-xl prose-a:text-sky-600 dark:prose-a:text-sky-300 lg:my-16"
        >
          <p className="text-gray-200 md:text-lg lg:text-xl">
            <i className="fa-light fa-calendar-days mr-2"></i><Date dateString={frontmatter.date} /><i className="fa-light fa-user ml-7  mr-2"></i> {frontmatter.author !== 'abyditya' ? frontmatter.author : <Author frontmatter={{
              title: "",
              date: "",
              description: "",
              author: ""
            }} /> }
          </p>
          <hr className="border border-b-gray-400" />
          <Component />
          <div className="text-center">
            <p className="no-underline text-neutral-500 italic" style={{fontFamily: 'sans'}}>- The End -</p>
          </div>
          <hr className="border border-b-gray-400" />
          <Link href="/thread" className="no-underline bg-indigo-600 px-3 py-2 rounded"><span className="text-gray-300">Go Back</span></Link>
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      ...postData,
    },
  };
};
