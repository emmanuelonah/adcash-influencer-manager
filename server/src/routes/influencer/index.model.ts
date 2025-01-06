import { Influencer } from './index.schema';
import { InfluencerRequest, InfluencerQueryParams } from './index.types';

export class InfluencerModel {
    public static create(influencer: InfluencerRequest) {
        return Influencer.create(influencer);
    }

    public static all() {
        return Influencer.find().lean().exec();
    }

    private static insensitiseQuery(key: string, value: string | undefined) {
        if (value) {
            return { [key]: { $regex: value, $options: 'i' } };
        }

        return {};
    }

    public static getByNameOrManager({ firstName, lastName, managerId }: InfluencerQueryParams) {
        const query: Record<string, object | string> = {
            ...this.insensitiseQuery('firstName', firstName),
            ...this.insensitiseQuery('lastName', lastName),
            ...(managerId && { 'manager.id': managerId }),
        };

        return Influencer.find(query).lean().exec();
    }

    public static update(id: string, influencer: Partial<InfluencerRequest>) {
        return Influencer.findByIdAndUpdate(id, influencer, { new: true, runValidators: true }).lean().exec();
    }
}
