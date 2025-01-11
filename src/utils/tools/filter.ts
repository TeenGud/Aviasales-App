import { listOfTickets } from '../../types/types';

export const filter = (allSortedCarts: listOfTickets, filters) => {
  const { all, noTransfer, oneTransfer, twoTransfers, threeTransfers } = filters;
  const filteredCarts = [];
  if (!all && !noTransfer && !oneTransfer && !twoTransfers && !threeTransfers) {
    return allSortedCarts;
  }
  if (all) {
    return allSortedCarts;
  }
  for (const ticket of allSortedCarts) {
    const toCount = ticket.segments[0].stops.length;
    const fromCount = ticket.segments[1].stops.length;
    if (toCount !== fromCount) {
      continue;
    } else if (toCount === 0 && noTransfer) {
      filteredCarts.push(ticket as never);
    } else if (toCount === 1 && oneTransfer) {
      filteredCarts.push(ticket as never);
    } else if (toCount === 2 && twoTransfers) {
      filteredCarts.push(ticket as never);
    } else if (toCount === 3 && threeTransfers) {
      filteredCarts.push(ticket as never);
    }
  }
  return filteredCarts;
};
