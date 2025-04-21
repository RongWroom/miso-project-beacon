
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// (Font import removed as font is now loaded via Google Fonts in index.html)

createRoot(document.getElementById("root")!).render(<App />);
