import { ApiResponse } from './index.service';

describe('response', () => {
    it('should return success response', () => {
        expect(ApiResponse.success({ name: 'Foo Bar Baz' })).toMatchObject({
            success: true,
            data: { name: 'Foo Bar Baz' },
        });
    });

    it('should return error response', () => {
        expect(ApiResponse.error(400, 'Invalid email')).toMatchObject({
            success: false,
            statusCode: 400,
            message: 'Invalid email',
        });
    });
});
