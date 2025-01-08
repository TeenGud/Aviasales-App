import { searchTickets } from '../fetch/index';
import { searchId } from './handleGetSearchId.ts';

export const handleSearchTickets = async () => {
  const res = await searchTickets(searchId);
  console.log(searchId);
  return res.tickets;
};
