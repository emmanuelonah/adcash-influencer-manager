import mongoose, { Model } from 'mongoose';

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

/**
 * This pre-save hook checks if the social media handles are unique within the same document or collection.
 * This is to prevent duplicate social media handles within the same influencer or across different influencers.
 * This helps prevent impersonation and ensures that each influencer has a unique social media handle.
 */
influencerSchema.pre<InfluencerResponse>('save', async function (next) {
    const { socialMediaHandles } = this;
    const InfluencerModel = this.constructor as Model<InfluencerResponse>;

    // Check for internal duplicates within the same document
    const uniqueHandles = new Set(socialMediaHandles.map((handle) => `${handle.type}:${handle.userName}`));
    if (uniqueHandles.size !== socialMediaHandles.length) {
        return next(new HttpException(409, 'Social media handles must be unique within the same influencer.'));
    }

    // Check for external duplicates across documents
    const existingDuplicates = await InfluencerModel.findOne({
        _id: { $ne: this._id },
        socialMediaHandles: { $elemMatch: { userName: { $in: socialMediaHandles.map((h) => h.userName) } } },
    });
    if (existingDuplicates) {
        return next(new HttpException(409, 'Some social media usernames already exist.'));
    }

    next();
});

export const Influencer = mongoose.model('Influencer', influencerSchema);
