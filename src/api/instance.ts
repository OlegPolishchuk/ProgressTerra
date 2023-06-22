import axios from 'axios';

const AccessKey = import.meta.env.VITE_ACCESS_KEY;
const BonusUrl = import.meta.env.VITE_BONUSES_PATH;

export const instance = axios.create({
  baseURL: BonusUrl,
  headers: {
    AccessKey: AccessKey,
    'Content-Type': 'application/json-patch+json',
  },
});
