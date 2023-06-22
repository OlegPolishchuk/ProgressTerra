import { api } from 'api/api';
import axios from 'axios';
import { LocalStorageService } from 'services/LocalStorageService';

const AccessKey = import.meta.env.VITE_ACCESS_KEY;
const BonusUrl = import.meta.env.VITE_BONUSES_PATH;

export const instance = axios.create({
  baseURL: BonusUrl,
  headers: {
    AccessKey: AccessKey,
    'Content-Type': 'application/json-patch+json',
  },
});

instance.interceptors.request.use(async (config) => {
  const newConfig = { ...config };

  const accessToken = LocalStorageService.getAccessToken();

  if (!accessToken) {
    const data = await api.getToken();
    const token = data.data.accessToken;

    LocalStorageService.setAccessToken(token);
  }

  return newConfig;
});
