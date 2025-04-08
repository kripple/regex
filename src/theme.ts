import { type ThemeInput } from 'shiki';

export const name = 'vscode-dark-modern' as const;

const colors = {
  background: '#1e1e1e',
  blue: '#569cd6',
  cursor: '#a7a7a7',
  darkBlue: '#000080',
  darkGray: '#2a2d2e',
  gray: '#808080',
  green: '#6a9955',
  indentGuide: '#3b3b3b',
  lightGray: '#d4d4d4',
  lineHighlightBackground: '#2a2d2e',
  orange: '#ce9178',
  pink: '#d7ba7d',
  pinkLight: '#97c37c',
  purple: '#c586c0',
  red: '#f44747',
  selectionBackground: '#264f78',
  yellow: '#dcdcaa',
};

const syntaxColors = {
  keyword: 'red',
  // keyword: colors.blue,


  comment: colors.green,
  string: colors.orange,
  operator: colors.lightGray,
  constant: colors.lightGray,
  variable: colors.blue,
  function: colors.yellow,
  tag: colors.pink,
  error: colors.red,
};

const editorColors = {
  background: colors.background,
  foreground: colors.lightGray,
  selectionBackground: colors.selectionBackground,
  lineHighlightBackground: colors.lineHighlightBackground,
  cursor: colors.cursor,
  indentGuide: colors.indentGuide,
  indentGuideActive: colors.green,
  gutterBackground: colors.background,
  gutterModified: colors.green,
  gutterAdded: colors.pinkLight,
  gutterDeleted: colors.red,
};

const createTokenColor = (
  scope: string | string[],
  color: string,
  fontStyle?: string,
) => ({
  scope,
  settings: {
    foreground: color,
    fontStyle,
  },
});

export const theme: ThemeInput = {
  name,
  displayName: 'Dark Modern',
  semanticHighlighting: true,
  semanticTokenColors: {
    customLiteral: colors.yellow,
    newOperator: colors.purple,
    numberLiteral: colors.lightGray,
    stringLiteral: colors.orange,
  },
  tokenColors: [
    createTokenColor('comment', syntaxColors.comment),
    createTokenColor('keyword', syntaxColors.keyword),
    createTokenColor('string', syntaxColors.string),
    createTokenColor('operator', syntaxColors.operator),
    createTokenColor('constant', syntaxColors.constant),
    createTokenColor('variable', syntaxColors.variable),
    createTokenColor('function', syntaxColors.function),
    createTokenColor('entity.name.tag', syntaxColors.tag),
    createTokenColor('invalid', syntaxColors.error),
    createTokenColor('markup.heading', syntaxColors.function, 'bold'),
    createTokenColor('markup.underline', syntaxColors.string, 'underline'),
    createTokenColor('markup.bold', syntaxColors.keyword, 'bold'),
  ],
  colors: {
    'editor.background': editorColors.background,
    'editor.foreground': editorColors.foreground,
    'editor.selectionBackground': editorColors.selectionBackground,
    'editor.lineHighlightBackground': editorColors.lineHighlightBackground,
    'editorCursor.foreground': editorColors.cursor,
    'editorWhitespace.foreground': editorColors.indentGuide,
    'editorIndentGuide.background': editorColors.indentGuide,
    'editorIndentGuide.activeBackground': editorColors.indentGuideActive,
    'editorRuler.foreground': editorColors.indentGuide,
    'editorGutter.background': editorColors.gutterBackground,
    'editorGutter.modifiedBackground': editorColors.gutterModified,
    'editorGutter.addedBackground': editorColors.gutterAdded,
    'editorGutter.deletedBackground': editorColors.gutterDeleted,
    'editorLink.activeForeground': colors.blue,
    'editorFindMatch.background': '#254A79',
    'editorFindMatchHighlight.background': colors.green,
    'editorFindRangeHighlight.background': colors.green,
    'editorLineNumber.foreground': '#5A5A5A',
    'editorLineNumber.activeForeground': editorColors.foreground,
    'editorBracketMatch.background': editorColors.indentGuideActive,
    'editorBracketMatch.border': editorColors.indentGuideActive,
    'editorError.foreground': editorColors.gutterDeleted,
    'editorWarning.foreground': colors.pink,
    'editorInfo.foreground': colors.blue,
    'editorHint.foreground': colors.blue,
    'editorGroupHeader.tabsBackground': '#252526',
    'editorGroupHeader.border': '#555555',
    'editorTab.activeBackground': '#333333',
    'editorTab.activeForeground': editorColors.foreground,
    'editorTab.inactiveBackground': editorColors.background,
    'editorTab.inactiveForeground': '#8A8A8A',
    'editorTab.unfocusedActiveBackground': '#2D2D2D',
    'editorTab.unfocusedActiveForeground': editorColors.foreground,
    'editorTab.unfocusedInactiveBackground': editorColors.background,
    'editorTab.unfocusedInactiveForeground': '#8A8A8A',
    'editorGutter.commentRangeForeground': syntaxColors.comment,
  },
};
