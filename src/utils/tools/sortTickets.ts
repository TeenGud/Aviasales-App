import { listOfTickets } from '../../types/types';

type operation = 'cheap' | 'fast' | 'optimal';

export const sortTickets = (allTickets: listOfTickets, operation: operation) => {
  const arrayForSort = [...allTickets];
  if (operation === 'cheap') {
    const sorted = arrayForSort.sort((prev, cur) => prev.price - cur.price);
    return sorted;
  } else if (operation === 'fast') {
    const sorted = arrayForSort.sort((prev, cur) => prev.segments[0].duration - cur.segments[0].duration);
    return sorted;
  } else if (operation === 'optimal') {
    const sorted = arrayForSort.sort(
      (prev, cur) => prev.price + prev.segments[0].duration - (cur.price + cur.segments[0].duration)
    );
    return sorted;
  }
};
