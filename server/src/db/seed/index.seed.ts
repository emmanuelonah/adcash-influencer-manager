import mockedInfluencers from './influencers.mock.json';

import { envVars } from '../../utils';
import { InfluencerModel } from '../../routes/influencer/index.model';
import { InfluencerRequest } from '../../routes/influencer/index.types';

export class Seeder {
    public static async run() {
        await Seeder.seedInfluencers();
    }

    private static async seedInfluencers() {
        if (envVars.NODE_ENV != 'development') return;

        const influencers = await InfluencerModel.all();

        if (!influencers.length) {
            for (const influencer of mockedInfluencers) {
                await InfluencerModel.create(influencer as InfluencerRequest);
            }
        }
    }
}
