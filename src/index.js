import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Global styles={GlobalStyles} />
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
