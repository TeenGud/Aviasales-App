import React, { FC } from 'react';
import { filter } from './filter.ts';
import { filters, listOfTickets } from '../../types/types.ts';
import Ticket from '../../components/Ticket/index.js';

export const renderTicketsWithFilters = (
  tickets: listOfTickets | [],
  ticketsAmount: number,
  setTicketsRendered: (arg: unknown) => void,
  Ticket: FC<Ticket>,
  filters: filters,
  setIsDisabled: (flag: boolean) => void
) => {
  const filteredTickets = filter(tickets as listOfTickets, filters);
  if (filteredTickets.length) {
    for (let i = ticketsAmount - 5; i < ticketsAmount; i++) {
      const curTicket = filteredTickets[i];
      const firstSegment = curTicket?.segments[0];
      const secondSegment = curTicket?.segments[1];
      setTicketsRendered((ticketsRendered: React.ReactNode[]) => [
        ...ticketsRendered,
        <Ticket
          key={curTicket?.price + curTicket?.carrier + firstSegment?.date}
          price={curTicket?.price}
          carrier={curTicket?.carrier}
          firstSegment={firstSegment}
          secondSegment={secondSegment}
          setIsDisabled={setIsDisabled}
        />,
      ]);
    }
    return filteredTickets;
  }
};
