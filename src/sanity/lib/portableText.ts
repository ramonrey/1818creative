import { toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from '@portabletext/types';

import { urlFor } from './image';

function escapeAttr(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const components = {
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string } }) => {
      if (!value?.asset) return '';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const url = urlFor(value as any)
        .width(1400)
        .fit('max')
        .auto('format')
        .url();
      return `<img src="${escapeAttr(url)}" alt="${escapeAttr(value.alt)}" loading="lazy" />`;
    },
  },
  marks: {
    link: ({ children, value }: { children: string; value?: { href?: string } }) => {
      const href = String(value?.href ?? '');
      const external = /^https?:\/\//i.test(href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeAttr(href)}"${attrs}>${children}</a>`;
    },
  },
};

/** Render a post body (Portable Text) to an HTML string for `set:html`. */
export function renderBody(blocks: PortableTextBlock[] | undefined | null): string {
  if (!blocks || blocks.length === 0) return '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return toHTML(blocks, { components: components as any });
}
