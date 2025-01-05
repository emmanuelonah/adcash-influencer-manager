import { AxiosError } from 'axios';

import { HttpService } from 'services';
import {
  InfluencerAPIResponse,
  InfluencerRequest,
  InfluencerError,
  SocialMediaType,
} from 'InfluencerTypes';

export class InfluencerModel {
  public static async getInfluencers(queryParams?: string) {
    const queryString = queryParams ? `?${queryParams}` : '';
    const response = await HttpService.get<InfluencerAPIResponse>(`/influencers${queryString}`);

    return response.data.data;
  }

  public static createInfluencer(influencer: InfluencerRequest) {
    return HttpService.post<InfluencerRequest, InfluencerAPIResponse>('/influencers', influencer);
  }

  public static updateInfluencer(influencerId: string, influencer: Partial<InfluencerRequest>) {
    return HttpService.patch<Partial<InfluencerRequest>, InfluencerAPIResponse>(
      `/influencers/${influencerId}`,
      influencer
    );
  }

  public static parseError(isError: boolean, axiosError: AxiosError<InfluencerError>) {
    const errorMessage = axiosError?.response?.data?.message;
    const error = isError ? (errorMessage ?? 'An error occurred. Try again later') : null;

    return error;
  }

  public static makeSocialMediaUrl(type: SocialMediaType, userName: string) {
    if (type === 'instagram') {
      return `https://www.instagram.com/${userName}`;
    }
    const containsAt = userName.startsWith('@');

    return `https://www.tiktok.com/${containsAt ? '' : '@'}${userName}`;
  }
}
