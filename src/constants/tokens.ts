export const tokenColors = {
  keyword: '#569cd6',
  type: '#4ec9b0',
  punctuation: '#cccccc',
  variable: '#9cdcfe',
  comment: '#6A9955',
  background: '#1f1f1f',
  constant: '#ce9178',
  regexp: '#d16969',

  // info: '#6796e6',
  // warn: '#cd9731',
  // error: '#f44747',
  // debug: '#b267e6',

  // 'constant.regexp': '#646695',
  // 'punctuation.definition.group.regexp': '#CE9178',
  // 'string.regexp': '#D16969',
  // 'keyword.operator.quantifier.regexp': '#D7BA7D',
  // 'keyword.control.anchor.regexp': '#DCDCAA',

  // 'support.type.property-name': '#9CDCFE',
  // 'support.constant.property-value': '#CE9178',

  // header: '#000080',
  // 'widget.border': '#313131',
  // 'constant.numeric': '#B5CEA8',
  // 'punctuation.definition.tag': '#808080',
  // 'keyword.operator': '#D4D4D4',
  // 'entity.name.function': '#DCDCAA',
  // 'entity.name.type': '#4EC9B0',
  // 'keyword.control': '#C586C0',
  // 'constant.character.escape': '#D7BA7D',
  // 'entity.name.label': '#C8C8C8',
  // 'ref.matchtext': '#FFFFFF',
} as const;
type Scope = keyof typeof tokenColors;
export type Tokens = [token: Scope, value: string][];
