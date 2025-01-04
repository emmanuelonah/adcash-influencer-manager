import { Router } from 'express';

import { InfluencerController } from './index.controller';

const influencerRouter = Router();

influencerRouter.post('/', InfluencerController.httpCreateInfluencer);
influencerRouter.get('/', InfluencerController.httpGetInfluencers);
influencerRouter.patch('/:id', InfluencerController.httpPatchInfluencer);

export { influencerRouter };
