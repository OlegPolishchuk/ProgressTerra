import { api } from 'api/api';
import { Data } from 'api/types';
import { useEffect, useState } from 'react';
import { LocalStorageService } from 'services/LocalStorageService';

export const useFetchBonus = () => {
  const [data, setData] = useState({
    data: {} as Data,
    isLoading: true,
    isSuccess: false,
    isError: false,
  });

  const fetchBonuses = async (): Promise<void> => {
    try {
      const accessToken = LocalStorageService.getAccessToken();

      if (!accessToken) {
        await refreshToken();
      }

      const res = await api.getBonus(accessToken);

      if (res.data.resultOperation.status === 1) {
        await refreshToken();

        return await fetchBonuses();
      }

      const data = await res.data.data;

      setData((prevState) => ({
        ...prevState,
        isSuccess: true,
        isLoading: false,
        data,
      }));
    } catch (e) {
      setData((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
        isSuccess: false,
      }));
    }
  };

  useEffect(() => {
    (async () => {
      await fetchBonuses();
    })();
  }, []);

  return { ...data };
};

async function refreshToken() {
  const data = await api.getToken();
  const token = data.data.accessToken;

  LocalStorageService.setAccessToken(token);
}
