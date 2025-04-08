import '@/app/components/App.css';

export function App() {
  const title = `new RegExp(pattern: RegExp | string, flags?: string)`;
  return (
    <>
      <header>
        <pre>
          <code className="language-typescript">{title}</code>
        </pre>
      </header>
      <main className="main"></main>
    </>
  );
}
