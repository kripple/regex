import '@/components/Code.css';

export function Code({ children }: { children: string }) {
  return (
    <div className="code">
      <pre>
        <code className="language-typescript">{children}</code>
      </pre>
    </div>
  );
}
