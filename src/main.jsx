import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App.jsx'
import ViewProvider from './Hooks/view-hooks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewProvider>
      <App /> 
    </ViewProvider>
  </StrictMode>,
)
