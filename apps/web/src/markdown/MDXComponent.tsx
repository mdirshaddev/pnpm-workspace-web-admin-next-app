'use client';

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

/**
 * It takes a string of MDX code, and returns a React component that renders that MDX code
 * @param  - code - the code to be rendered
 */
export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
