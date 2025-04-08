import { Code } from '@/components/Code';

import '@/components/App.css';

export function App() {
  // const test = new RegExp(pattern: RegExp | string, flags?: string);

  const title = `new RegExp(pattern: RegExp | string, flags?: string)`;
  return (
    <>
      <header className="header">
        <Code>{title}</Code>
      </header>
      <main className="main"></main>
    </>
  );
}
