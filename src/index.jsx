import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
