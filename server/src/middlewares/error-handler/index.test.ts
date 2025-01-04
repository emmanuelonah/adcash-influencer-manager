import { Request, Response, NextFunction } from 'express';

import { errorHandler } from './index.middleware';
import { HttpException } from '../../services/http-exception/index.service';

describe('errorHandler middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        req = {};
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        res = {
            status: statusMock,
        };
        next = jest.fn();
    });

    it('should handle ValidationError', () => {
        const err = new HttpException(400, 'Validation error');
        err.name = 'ValidationError';
        err.errors = { field: { message: 'Field is required' } };

        errorHandler(err, req as Request, res as Response, next);

        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            statusCode: 400,
            message: 'Field is required',
        });
    });

    it('should handle CastError', () => {
        const err = new HttpException(400, 'Cast error');
        err.name = 'CastError';

        errorHandler(err, req as Request, res as Response, next);

        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            statusCode: 400,
            message: 'Invalid Parameter',
        });
    });

    it('should handle duplicate key error (code 11000)', () => {
        const err = new HttpException(400, 'Duplicate key error');
        err.code = 11000;
        err.keyValue = { email: 'test@example.com' };

        errorHandler(err, req as Request, res as Response, next);

        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            statusCode: 400,
            message: 'email already exists',
        });
    });

    it('should handle generic server error', () => {
        const err = new HttpException(500, 'Server error');

        errorHandler(err, req as Request, res as Response, next);

        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            statusCode: 500,
            message: 'Server error',
        });
    });
});
