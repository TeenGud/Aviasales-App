import { listOfTickets } from '../../types/types';

type operation = 'cheap' | 'fast' | 'optimal';

export const sortTickets = (allTickets: listOfTickets, operation: operation) => {
  if (operation === 'cheap') {
    const arrayForSort = [...allTickets];
    const sorted = arrayForSort.sort((prev, cur) => prev.price - cur.price);
    return sorted;
  } else if (operation === 'fast') {
    const arrayForSort = [...allTickets];
    const sorted = arrayForSort.sort((prev, cur) => prev.segments[0].duration - cur.segments[0].duration);
    return sorted;
  } else if (operation === 'optimal') {
    const arrayForSort = [...allTickets];
    const sorted = arrayForSort.sort(
      (prev, cur) => prev.price/prev.segments[0].duration + prev.segments[0].duration - (cur.price/cur.segments[0].duration + cur.segments[0].duration)
    );
    return sorted;
  }
};
