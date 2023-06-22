export const LocalStorageService = {
  getAccessToken() {
    return localStorage.getItem('accessToken') as string;
  },

  setAccessToken(token: string) {
    try {
      localStorage.setItem('accessToken', JSON.stringify(token));
    } catch {
      throw new Error('Local Storage set accessToken Error');
    }
  },
};
