import { Routes } from 'routes';
import { useCreateErrorLogPresenter } from 'models';

export function App() {
  useCreateErrorLogPresenter();

  return <Routes />;
}
