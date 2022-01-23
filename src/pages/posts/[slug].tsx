import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "src/utils/mdxUtils";

import { ReactNode } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "src/components/nav/nav";

interface ComponentProps {
  children: ReactNode;
  [key: string]: any;
}

interface AnchorProps extends ComponentProps {
  href: string;
}

const components = {
  h1: (props: ComponentProps) => (
    <h2 {...props} className="mt-8 mb-4 text-3xl font-medium" />
  ),
  h2: (props: ComponentProps) => (
    <h3 {...props} className="mt-7 mb-3 text-2xl font-medium" />
  ),
  h3: (props: ComponentProps) => (
    <h4 {...props} className="mt-6 mb-2 text-xl font-medium" />
  ),
  h4: (props: ComponentProps) => (
    <h5 {...props} className="mt-5 mb-1 text-lg font-medium" />
  ),
  h5: (props: ComponentProps) => <h6 className="mt-4 font-medium" {...props} />,
  a: (props: AnchorProps) => (
    <Link href={props.href}>
      <a className="underline">{props.children}</a>
    </Link>
  ),
};

interface PostPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: {
    [key: string]: any;
  };
}

const PostPage = ({ source, frontMatter }: PostPageProps) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Zotistics</title>

        {frontMatter.author && (
          <meta name="author" content={frontMatter.author} />
        )}
        <meta name="description" content={frontMatter.description} />

        <meta
          property="og:title"
          content={frontMatter.title + " | Zotistics"}
        />
        <meta property="og:description" content={frontMatter.description} />
      </Head>
      <Nav />
      <main className="mt-10 mb-12 dark:text-white content">
        <h1 className="mb-8 text-4xl font-medium">{frontMatter.title}</h1>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
