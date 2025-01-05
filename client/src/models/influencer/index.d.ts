declare module 'InfluencerTypes' {
  export type InfluencerQueryParams = Partial<{
    firstName: string;
    lastName: string;
    managerId: string;
  }>;

  export type SocialMediaType = 'instagram' | 'tiktok';

  type Tiktok = { type: 'tiktok'; userName: string };
  type Instagram = { type: 'instagram'; userName: string };
  export type SocialMediaHandle = Tiktok | Instagram;

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
    manager: Manager;
  };

  export interface InfluencerResponse extends Influencer {
    _id: string;
    createdAt: string;
    updatedAt: string;
  }

  export type InfluencerAPIResponse = {
    success: boolean;
    data: InfluencerResponse[];
  };

  export type InfluencerRequest = Influencer;

  export interface InfluencerError {
    success: boolean;
    statusCode: number;
    message: string;
  }
}
