import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PokemonProvider } from './contexts/PokemonContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <FavoritesProvider> {/* ✅ Wrap the whole app */}
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

