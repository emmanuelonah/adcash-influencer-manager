import { asyncHandler } from '../../middlewares';
import { InfluencerServices } from './index.services';

export class InfluencerController {
    public static httpCreateInfluencer = asyncHandler(InfluencerServices.createInfluencer);

    public static httpGetInfluencers = asyncHandler(InfluencerServices.getInfluencers);

    public static httpPatchInfluencer = asyncHandler(InfluencerServices.patchInfluencer);
}
