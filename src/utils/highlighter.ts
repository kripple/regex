import js from '@shikijs/langs/javascript';
import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const shiki = createHighlighterCoreSync({
  themes: [darkPlus],
  langs: [js, ts],
  engine: createJavaScriptRegexEngine(),
});

export function buildTokens(code: string) {
  const result = shiki.codeToTokens(code, {
    lang: 'typescript',
    theme: 'dark-plus',
  });
  return result;
}
