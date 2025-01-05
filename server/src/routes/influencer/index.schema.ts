import mongoose, { Model } from 'mongoose';

import { _idToId } from '../../plugins';
import { InfluencerResponse } from './index.types';
import { HttpException } from '../../services/http-exception/index.service';

const influencerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            maxlength: [50, 'First name cannot exceed 50 characters'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            maxlength: [50, 'Last name cannot exceed 50 characters'],
        },
        socialMediaHandles: {
            type: [
                {
                    type: {
                        type: String,
                        enum: {
                            values: ['instagram', 'tiktok'],
                            message: 'Social media handle must be either instagram or tiktok',
                        },
                        required: [true, 'Social media handle type is required'],
                    },
                    userName: {
                        type: String,
                        required: [true, 'Social media handle username is required'],
                    },
                },
            ],
            required: [true, 'Social media handles are required'],
        },
        manager: {
            id: {
                type: String,
                required: [true, 'Manager ID is required'],
            },
            imgUrl: {
                type: String,
                default: null,
            },
            firstName: {
                type: String,
                required: [true, 'Manager first name is required'],
                maxlength: [50, 'Manager first name cannot exceed 50 characters'],
            },
            lastName: {
                type: String,
                required: [true, 'Manager last name is required'],
                maxlength: [50, 'Manager last name cannot exceed 50 characters'],
            },
            email: {
                type: String,
                default: null,
            },
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

influencerSchema.plugin(_idToId);

influencerSchema.pre<InfluencerResponse>('save', async function (next) {
    const handles = this.socialMediaHandles;
    const InfluencerModel = this.constructor as Model<InfluencerResponse>;
    const duplicateUsernames = await InfluencerModel.find({
        _id: { $ne: this._id },
        'socialMediaHandles.userName': { $in: handles.map((h) => h.userName) },
    });

    if (duplicateUsernames.length > 0) {
        return next(new HttpException(409, 'Some social media usernames already exist.'));
    }

    return next();
});

export const Influencer = mongoose.model('Influencer', influencerSchema);
