import { buildTokens } from '@/utils/highlighter';

import '@/components/Code.css';

export function Code({ children }: { children: string }) {
  const { fg, bg: backgroundColor, tokens } = buildTokens(children);

  console.log({ tokens });
  return (
    <pre style={{ color: fg, backgroundColor }}>
      <code className="code">
        {tokens.map((lineTokens, line) => (
          <div key={line}>
            {lineTokens.map(({ color, content }, key) => (
              <span key={key} style={{ color }}>
                {content}
              </span>
            ))}
          </div>
        ))}
      </code>
    </pre>
  );
}
