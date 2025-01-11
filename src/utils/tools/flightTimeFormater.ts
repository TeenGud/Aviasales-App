export const flightTimeFormater = (time: string) => {
  const houres = Number(time.split(':')[0]) < 10 ? '0' + time.split(':')[0] : time.split(':')[0];
  const minutes = Number(time.split(':')[1]) < 10 ? '0' + time.split(':')[1] : time.split(':')[1];
  return houres + ':' + minutes;
};
