import parse from 'html-react-parser';

import { highlight } from '@/highlighter';

import '@/components/Code.css';

export function Code({ children: code }: { children: string }) {
  // const test = new RegExp(pattern: RegExp | string, flags?: string)
  const html = parse(highlight(code));

  return <div className="code">{html}</div>;

  // return (
  //   <pre>
  //     <code className="language-typescript">{html}</code>
  //   </pre>
  // );
}
