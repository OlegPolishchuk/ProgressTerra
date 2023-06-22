import { api } from 'api/api';
import { Data } from 'api/types';
import { useEffect, useState } from 'react';

export const useFetchBonus = () => {
  const [data, setData] = useState({
    data: {} as Data,
    isLoading: true,
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getBonus();
        const data = res.data.data;

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
    })();
  }, []);

  return { ...data };
};
