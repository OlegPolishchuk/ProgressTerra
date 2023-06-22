export const formatBonusWordEnding = (bonuses: number) => {
  const lastDigit = Number(bonuses.toString().split('').reverse()[0]);

  if (lastDigit === 1) {
    return 'бонус';
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return 'бонуса';
  }

  if (lastDigit >= 5 || lastDigit === 0) {
    return 'бонусов';
  }
};
