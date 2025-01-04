import 'reflect-metadata';

import express from 'express';
import request from 'supertest';

import { ApiResponse } from '../../services';
import { InfluencerModel } from './index.model';
import { influencerRouter } from './index.route';
import { initDto } from '../../utils/init-dto.util';

const app = express();

app.use(express.json());
app.use('/influencers', influencerRouter);

jest.mock('./index.model');
jest.mock('../../utils/init-dto.util');

const influencer = {
    firstName: 'John',
    lastName: 'Doe',
    socialMediaHandles: [
        {
            type: 'instagram',
            userName: 'john_doe',
        },
    ],
    manager: {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
    },
};

describe('Influencer Routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create an influencer', async () => {
        (initDto as jest.Mock).mockResolvedValueOnce(undefined);
        (InfluencerModel.create as jest.Mock).mockResolvedValueOnce(influencer);

        const response = await request(app)
            .post('/influencers')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                socialMediaHandles: [{ type: 'instagram', userName: 'john_doe' }],
                manager: { id: '1', firstName: 'Jane', lastName: 'Doe' },
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(ApiResponse.success(influencer));
    });

    it('should get all influencers', async () => {
        (InfluencerModel.all as jest.Mock).mockResolvedValueOnce([influencer]);

        const response = await request(app).get('/influencers');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(ApiResponse.success([influencer]));
    });

    it('should update an influencer', async () => {
        (initDto as jest.Mock).mockResolvedValueOnce(undefined);
        (InfluencerModel.update as jest.Mock).mockResolvedValueOnce(influencer);

        const response = await request(app)
            .patch('/influencers/1')
            .send({
                manager: {
                    id: '1',
                    firstName: 'Emmanuel',
                    lastName: 'Onah',
                },
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(ApiResponse.success(influencer));
    });
});
