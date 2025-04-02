import Dexie, { type EntityTable } from 'dexie';

import { __DEV__ } from 'utils';
import { ErrorType } from 'ObservabilityTypes';

type ErrorLog = {
  id: number;
  type: ErrorType;
  error: unknown;
};

type DB = Dexie & {
  errors: EntityTable<ErrorLog, 'id'>;
};

const dbName = __DEV__ ? 'ErrorLogsDatabaseDev' : 'ErrorLogsDatabaseProd';
const errorLogsDb = new Dexie(dbName) as DB;

errorLogsDb.version(1).stores({ errors: '++id, type, error' });

export type { ErrorLog };
export { errorLogsDb };
