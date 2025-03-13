import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BackendProvider } from './components/lib/BackendProvider';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <BackendWrapper />
    </React.StrictMode>,
  );
}

function BackendWrapper() {
  return (
    <BackendProvider>
      <App />
    </BackendProvider>
  );
}
