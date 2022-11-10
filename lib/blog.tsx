import { getTime } from 'lib/time';
import { promises as fs } from 'fs';

export async function getAllBlogPosts() {
  const allBlogs = await fs.readdir(process.cwd() + '/pages/blog');
  const mdxBlogs = allBlogs
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
      ...require(`/pages/blog/${filename}`).meta,
    }))
    .filter((blog) => !blog.draft);

  mdxBlogs.sort((a, b) => getTime(b.publishDate) - getTime(a.publishDate));

  const latest = mdxBlogs[0];
  const moreBlogs = mdxBlogs.slice(1);

  return Promise.resolve({ props: { latest, moreBlogs } });
}
