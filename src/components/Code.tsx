import { type Tokens, tokenColors } from '@/constants/tokens';

import '@/components/Code.css';

export function Code({ tokens }: { tokens: Tokens }) {
  return (
    <div className="code">
      <pre>
        <code className="language-typescript">
          {tokens.map(([key, value], index) => (
            <span key={index} style={{ color: tokenColors[key] }}>
              {value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
