import { createHighlighter } from 'shiki';

import { name, theme } from '@/theme';

const config = {
  theme: name,
  language: 'typescript',
} as const;

// `createHighlighter` is async, it initializes the internal and
// loads the themes and languages specified.
const highlighter = await createHighlighter({
  themes: [theme],
  langs: [config.language],
});

// then later you can use `highlighter.codeToHtml` synchronously
// with the loaded themes and languages.
export const highlight = (code: string) =>
  highlighter.codeToHtml(code, {
    lang: config.language,
    theme: config.theme,
  });
