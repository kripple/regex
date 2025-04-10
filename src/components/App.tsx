import { Code } from '@/components/Code';

import '@/components/App.css';

export function App() {
  const title = `new RegExp(pattern: string, flags?: string);`;
  return (
    <>
      <header className="header">
        <Code>{title}</Code>
      </header>
      <main className="main"></main>
    </>
  );
}
