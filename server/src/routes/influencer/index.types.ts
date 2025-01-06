import { Document } from 'mongoose';

export type InfluencerQueryParams = Partial<{
    firstName: string;
    lastName: string;
    managerId: string;
}>;

export type SocialMediaHandle = {
    type: 'instagram' | 'tiktok';
    userName: string;
};

export type Manager = {
    id: string;
    imgUrl: string | null;
    firstName: string;
    lastName: string;
    email: string | null;
};

type Influencer = {
    firstName: string;
    lastName: string;
    socialMediaHandles: SocialMediaHandle[];
    /**
     * Because manager is not a requirement, i will create a list of dummy managers on the client side
     * and the user will select one of them. In a real world scenario, the manager would be a separate
     * document/table and the influencer would have a reference to the manager using reference id/fk.
     */
    manager: Manager;
};

export type InfluencerRequest = Influencer;

export type InfluencerResponse = Influencer & Document;
