import { Request, Response, NextFunction } from 'express';

import { ApiResponse } from '../../services';
import { InfluencerModel } from './index.model';
import { initDto } from '../../utils/init-dto.util';
import { InfluencerQueryParams } from './index.types';
import { PatchInfluencerDto } from './dto/patch-influencer.dto';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { HttpException } from '../../services/http-exception/index.service';

export class InfluencerServices {
    public static createInfluencer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await initDto(CreateInfluencerDto, req.body);
            const createdInfluencer = await InfluencerModel.create(req.body);
            return res.status(200).json(ApiResponse.success(createdInfluencer));
        } catch (error) {
            return next(new HttpException(error.statusCode, error.message));
        }
    };

    public static getInfluencers = async (
        req: Request<{}, {}, {}, InfluencerQueryParams>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { firstName, lastName, managerId } = req.query;
            const shouldGetByNameOrManager = firstName || lastName || managerId;
            const influencers = shouldGetByNameOrManager
                ? await InfluencerModel.getByNameOrManager({ firstName, lastName, managerId })
                : await InfluencerModel.all();
            return res.status(200).json(ApiResponse.success(influencers));
        } catch (error) {
            return next(new HttpException(error.statusCode, error.message));
        }
    };

    public static patchInfluencer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await initDto(PatchInfluencerDto, req.body.manager);
            const updatedInfluencer = await InfluencerModel.update(req.params.id, req.body);
            return res.status(200).json(ApiResponse.success(updatedInfluencer));
        } catch (error) {
            return next(new HttpException(error.statusCode, error.message));
        }
    };
}
