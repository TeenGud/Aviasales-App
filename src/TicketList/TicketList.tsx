import React from 'react';
import Ticket from '../Ticket';
import cls from './TicketList.module.scss';

function TicketList() {
  return (
    <div className={cls.ticket_list}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

export default TicketList;
