import { Routes } from 'routes';
import { useCreateErrorLogPresenter } from 'models';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('This is a test error');
    }, 5000);
  }, []);

  useCreateErrorLogPresenter();

  return <Routes />;
}
