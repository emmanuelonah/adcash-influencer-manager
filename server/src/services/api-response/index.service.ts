import { HttpException } from '../http-exception/index.service';

export type SuccessType<DataType> = {
    success: boolean;
    data: DataType;
};

export type ErrorType = HttpException;

export class ApiResponse {
    public static error(statusCode: number, message: string) {
        return new HttpException(statusCode, message);
    }

    public static success<D = Record<string, unknown>>(data: D) {
        return { success: true, data };
    }
}
