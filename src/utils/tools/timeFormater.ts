export const timeFormater = (minutes: number) => {
  const houres = Math.floor(minutes / 60);
  const leftMinutes = minutes % 60;
  return `${houres < 10 ? '0' + houres : houres}ч ${leftMinutes < 10 ? '0' + leftMinutes : leftMinutes}м`;
};
