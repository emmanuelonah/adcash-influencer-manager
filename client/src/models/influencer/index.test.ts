import { AxiosError } from 'axios';

import { HttpService } from 'services';

import { InfluencerRequest, InfluencerError } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';

jest.mock('services', () => ({
  HttpService: {
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
  },
}));

describe('InfluencerModel', () => {
  describe('getInfluencers', () => {
    it('fetches influencers with query params', async () => {
      const mockResponse = { data: { data: [] } };
      (HttpService.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await InfluencerModel.getInfluencers('name=test');
      expect(HttpService.get).toHaveBeenCalledWith('/influencers?name=test');
      expect(result).toEqual([]);
    });

    it('fetches influencers without query params', async () => {
      const mockResponse = { data: { data: [] } };
      (HttpService.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await InfluencerModel.getInfluencers();
      expect(HttpService.get).toHaveBeenCalledWith('/influencers');
      expect(result).toEqual([]);
    });
  });

  describe('createInfluencer', () => {
    it('creates a new influencer', async () => {
      const mockResponse = { success: true, data: {} };
      const influencer: InfluencerRequest = {
        firstName: 'John',
        lastName: 'Doe',
        manager: { id: '', imgUrl: '', firstName: '', lastName: '', email: '' },
        socialMediaHandles: [],
      };
      (HttpService.post as jest.Mock).mockResolvedValue(mockResponse);

      const result = await InfluencerModel.createInfluencer(influencer);
      expect(HttpService.post).toHaveBeenCalledWith('/influencers', influencer);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('updateInfluencer', () => {
    it('updates an existing influencer', async () => {
      const mockResponse = { data: {} };
      const influencer: Partial<InfluencerRequest> = { firstName: 'John' };
      (HttpService.patch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await InfluencerModel.updateInfluencer('1', influencer);
      expect(HttpService.patch).toHaveBeenCalledWith('/influencers/1', influencer);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('parseError', () => {
    it('returns error message if isError is true', () => {
      const axiosError = {
        response: { data: { message: 'Error occurred' } },
      } as AxiosError<InfluencerError>;
      const result = InfluencerModel.parseError(true, axiosError);
      expect(result).toBe('Error occurred');
    });

    it('returns default error message if isError is true and no message is provided', () => {
      const axiosError = { response: { data: {} } } as AxiosError<InfluencerError>;
      const result = InfluencerModel.parseError(true, axiosError);
      expect(result).toBe('An error occurred. Try again later');
    });

    it('returns null if isError is false', () => {
      const axiosError = {
        response: { data: { message: 'Error occurred' } },
      } as AxiosError<InfluencerError>;
      const result = InfluencerModel.parseError(false, axiosError);
      expect(result).toBeNull();
    });
  });

  describe('makeSocialMediaUrl', () => {
    it('returns Instagram URL', () => {
      const result = InfluencerModel.makeSocialMediaUrl('instagram', 'user');
      expect(result).toBe('https://www.instagram.com/user');
    });

    it('returns TikTok URL with @', () => {
      const result = InfluencerModel.makeSocialMediaUrl('tiktok', 'user');
      expect(result).toBe('https://www.tiktok.com/@user');
    });

    it('returns TikTok URL without @', () => {
      const result = InfluencerModel.makeSocialMediaUrl('tiktok', '@user');
      expect(result).toBe('https://www.tiktok.com/@user');
    });
  });
});
