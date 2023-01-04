import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {
  ContentType,
  Frontmatter,
  PickFrontmatter
} from 'src/types/frontmatter';

const ROOT = process.cwd();

export const getFiles = (type: ContentType) => {
  return readdirSync(join(ROOT, 'articles', type));
};

/**
 * It takes in a string of MDX content and returns a string of compiled MDX content
 * @param {string} content - string - The content of the MDX file
 * @returns The return value is a string of the compiled mdx.
 */
const getCompiledMDX = async (content: string) => {
  // For Some reason there are scenarios where we might get Directory error
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  // MOdifying the Content of Markdown and Making a room of implementation of Table of Content
  try {
    return await bundleMDX({
      source: content,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypePrism,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['hash-anchor']
              }
            }
          ]
        ];
        return options;
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error('Issue in MDXBuilder');
  }
};

/**
 * It takes a content type and a slug, reads the file from the file system, compiles the MDX, and
 * returns the compiled code and frontmatter
 * @param {ContentType}  - ContentType - an enum of the different types of content we have
 * @param {string} slug - string
 */
const getFilesBySlug = async (type: ContentType, slug: string) => {
  const source = readFileSync(
    join(ROOT, 'articles', type, `${slug}.mdx`),
    'utf-8'
  );

  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
};

/**
 * It reads all the files in a directory, extracts the frontmatter from each file, and returns an array
 * of objects containing the frontmatter and some other data
 * @param {T} type - T - the type of content we're getting
 * @returns An array of objects with the following shape:
 */
async function getAllFilesFrontMatter<T extends ContentType>(type: T) {
  // Read whole directory content
  const files = readdirSync(join(ROOT, 'articles', type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(ROOT, 'articles', type, postSlug),
      'utf-8'
    );
    const { data } = matter(source);
    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source)
      },
      ...allPosts
    ];
    return res;
  }, []);
}

export { getCompiledMDX, getFilesBySlug, getAllFilesFrontMatter };
