import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from 'app';
import { __DEV__ } from 'utils';
import { reportWebVitals } from 'configs';
import { ErrorBoundary, InternetNotifier } from 'components';
import { SkipToMainContent, GlobalStyles, theme } from 'design-system';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <InternetNotifier />
          <SkipToMainContent href="#main">Skip to main content</SkipToMainContent>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals((metric) => {
  if (__DEV__) {
    console.group('WEB_VITALS 🧪');
    console.log(metric);
    console.groupEnd();
  }
});
