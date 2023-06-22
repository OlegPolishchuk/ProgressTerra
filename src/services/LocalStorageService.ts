export const LocalStorageService = {
  getAccessToken() {
    const token = localStorage.getItem('accessToken') || 'null';

    return JSON.parse(token);
  },

  setAccessToken(token: string) {
    try {
      localStorage.setItem('accessToken', JSON.stringify(token));
    } catch {
      throw new Error('Local Storage set accessToken Error');
    }
  },
};
