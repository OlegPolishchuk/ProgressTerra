import { instance } from 'api/instance';
import { GetAccessTokenResponse, GetBonusResponse } from 'api/types';
import axios from 'axios';
import { LocalStorageService } from 'services/LocalStorageService';

const AccessKey = import.meta.env.VITE_ACCESS_KEY;

const TokenUrl = import.meta.env.VITE_ACCESS_TOKEN_PATH;
const ClientId = import.meta.env.VITE_CLIENT_ID;
const DeviceId = import.meta.env.VITE_DEVICE_ID;

export const api = {
  getToken() {
    return axios.post<GetAccessTokenResponse>(
      `${TokenUrl}api/v3/clients/accesstoken`,
      {
        idClient: ClientId,
        accessToken: '',
        paramName: 'device',
        paramValue: DeviceId,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      },
      {
        headers: {
          AccessKey: AccessKey,
        },
      },
    );
  },

  getBonus() {
    const token = LocalStorageService.getAccessToken();

    return instance.get<GetBonusResponse>(`api/v3/ibonus/generalInfo/${token}`);
  },
};
