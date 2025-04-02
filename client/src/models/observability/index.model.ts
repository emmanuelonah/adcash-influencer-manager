import { __DEV__, __PROD__ } from 'utils';
import { ErrorType } from 'ObservabilityTypes';

import { errorLogsDb } from './db';

export class ObservabilityModel {
  public static readonly ERROR_TYPES = {
    ASYNC_ERROR: 'ASYNC_ERROR',
    SYNC_ERROR: 'SYNC_ERROR',
  } as const;

  private static isEnvironmentValid(): boolean {
    return __DEV__ || __PROD__;
  }

  public static async getErrors() {
    if (!ObservabilityModel.isEnvironmentValid()) return;

    return await errorLogsDb.errors.toArray();
  }

  public static async getError(id: number) {
    if (!ObservabilityModel.isEnvironmentValid()) return;

    return await errorLogsDb.errors.get(id);
  }

  public static async createError(type: ErrorType, error: unknown) {
    if (!ObservabilityModel.isEnvironmentValid()) return;

    await errorLogsDb.errors.add({ type, error });
  }
}
