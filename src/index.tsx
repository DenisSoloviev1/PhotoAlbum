import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';

const rootElement:HTMLElement | null =  document.getElementById('root');
if (rootElement){
  ReactDOM.createRoot(rootElement).render(<App/>);
}
else{
  console.error("Root element not found");
}

