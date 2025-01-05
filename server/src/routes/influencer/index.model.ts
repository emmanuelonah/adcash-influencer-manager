import { Influencer } from './index.schema';
import { InfluencerRequest, InfluencerQueryParams } from './index.types';

export class InfluencerModel {
    public static create(influencer: InfluencerRequest) {
        return Influencer.create(influencer);
    }

    public static all() {
        return Influencer.find().lean().exec();
    }

    public static getByNameOrManager({ firstName, lastName, managerId }: InfluencerQueryParams) {
        const query = {
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(managerId && { 'manager.id': managerId }),
        };

        return Influencer.find(query).lean().exec();
    }

    public static update(id: string, influencer: Partial<InfluencerRequest>) {
        return Influencer.findByIdAndUpdate(id, influencer, { new: true, runValidators: true }).lean().exec();
    }
}
