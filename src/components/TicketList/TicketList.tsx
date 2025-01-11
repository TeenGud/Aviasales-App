import React, { useEffect } from 'react';
import Ticket from '../Ticket';
import cls from './TicketList.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { renderTicketsWithFilters } from '../../utils/tools';

interface TicketList {
  ticketsAmount: number;
  ticketsRendered: React.ReactNode[];
  setTicketsRendered: React.Dispatch<React.SetStateAction<never[]>>;
  setIsDisabled: (flag: boolean) => void;
}

const TicketList: React.FC<TicketList> = ({ ticketsAmount, ticketsRendered, setTicketsRendered, setIsDisabled }) => {
  const allTickets = useSelector((state: RootState) => state.tickets.allTickets);
  const filters = useSelector((state: RootState) => state.filters.value);
  const widgets = useSelector((state: RootState) => state.widgets.value);
  useEffect(() => {
    renderTicketsWithFilters(
      allTickets,
      ticketsAmount,
      setTicketsRendered as (arg: unknown) => void,
      Ticket,
      filters,
      setIsDisabled
    );
  }, [filters, ticketsAmount, widgets]);
  if (ticketsRendered?.length) {
    return <div className={cls.ticket_list}>{ticketsRendered}</div>;
  } else {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
  }
};

export default TicketList;
