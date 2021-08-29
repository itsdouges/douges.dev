/** @jsxImportSource @emotion/react */
import type { BlogMeta } from 'types/types';
import { Fragment } from 'react';
import Blog from 'components/blog';
import Section from 'design-system/section';
import SignUp from 'components/sign-up';
import Head from 'next/head';
import pkg from '../package.json';

interface LayoutBlogProps {
  blog: BlogMeta;
  children: React.ReactNode;
}

function LayoutBlog({ blog, children }: LayoutBlogProps) {
  return (
    <Fragment>
      <Head>
        <title>
          {blog.title} · {pkg.name}
        </title>
        <meta name="description" content={blog.blurb} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.blurb} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content={blog.blurb} />
      </Head>

      <Section isSeparated>
        <Blog {...blog}>{children}</Blog>
      </Section>

      <Section isSunken isSeparated>
        <SignUp />
      </Section>
    </Fragment>
  );
}

export default LayoutBlog;
