import type { Tokens } from '@/constants/tokens';

const expected = `new RegExp(pattern: RegExp | string, flags?: string);`;
const tokens: Tokens = [
  ['keyword', 'new '],
  ['type', 'RegExp'],
  ['punctuation', '('],
  ['variable', 'pattern'],
  ['punctuation', ': '],
  ['type', 'RegExp'],
  ['punctuation', ' | '],
  ['type', 'string'],
  ['punctuation', ', '],
  ['variable', 'flags'],
  ['punctuation', '?: '],
  ['type', 'string'],
  ['punctuation', ');'],
];

export const titleTokens = (() => {
  const actual = tokens.map(([_, value]) => value).join('');
  if (actual !== expected) {
    console.error(`Expected: '${expected}', Actual: '${actual}'`);
  }
  return tokens;
})();
