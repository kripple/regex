import { createRoot } from 'react-dom/client';

import { App } from '@/components/App';

import '@/colors.css';
import '@/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
