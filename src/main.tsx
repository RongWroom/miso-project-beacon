
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the variable font weight CSS explicitly to fix resolution error
import '@fontsource-variable/plus-jakarta-sans'

createRoot(document.getElementById("root")!).render(<App />);
