export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = addZeroToSingleDigit(date.getMonth() + 1);
  const day = addZeroToSingleDigit(date.getDate());

  return `${day}.${month}`;
};

function addZeroToSingleDigit(digit: number) {
  if (digit.toString().split('').length !== 1) {
    return digit;
  }

  return `0${digit}`;
}
