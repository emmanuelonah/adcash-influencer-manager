import { useEffect, useCallback } from 'react';

import { ObservabilityModel } from './index.model';

export function useCreateErrorLogPresenter() {
  const unhandledrejection = useCallback(async (event: PromiseRejectionEvent) => {
    event.preventDefault();

    await ObservabilityModel.createError(
      ObservabilityModel.ERROR_TYPES.ASYNC_ERROR,
      JSON.stringify(event)
    );
  }, []);

  const error = useCallback(async (event: ErrorEvent) => {
    event.preventDefault();

    await ObservabilityModel.createError(
      ObservabilityModel.ERROR_TYPES.SYNC_ERROR,
      JSON.stringify({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        timeStamp: event.timeStamp,
        details: JSON.stringify(event.error),
      })
    );
  }, []);

  useEffect(() => {
    window.addEventListener('unhandledrejection', unhandledrejection);
    window.addEventListener('error', error);

    return () => {
      window.removeEventListener('unhandledrejection', unhandledrejection);
      window.removeEventListener('error', error);
    };
  }, [unhandledrejection, error]);
}
