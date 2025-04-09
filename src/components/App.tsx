import { Code } from '@/components/Code';
import { titleTokens } from '@/constants/titleTokens';

import '@/components/App.css';

export function App() {
  return (
    <>
      <header className="header">
        <Code tokens={titleTokens} />
      </header>
      <main className="main"></main>
    </>
  );
}
