import { useLiveQuery } from 'dexie-react-hooks';

import { ObservabilityModel } from './index.model';

export function useGetErrorLogsPresenter() {
  const errorLogs = useLiveQuery(() => ObservabilityModel.getErrors(), []);

  return errorLogs;
}
