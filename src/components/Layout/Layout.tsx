import React, { useState } from 'react';
import Logo from '../Logo';
import Filters from '../Filters';
import Widgets from '../Widgets';
import TicketList from '../TicketList';
import Button from '../Button';
import cls from './Layout.module.scss';

function Layout() {
  const [ticketsAmount, setTicketsAmount] = useState(5);
  const [ticketsRendered, setTicketsRendered] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className={cls.layout}>
      <Logo />
      <div className={cls.content}>
        <Filters setTicketsRendered={setTicketsRendered} setTicketsAmount={setTicketsAmount} />
        <div className={cls.main_content}>
          <Widgets setTicketsRendered={setTicketsRendered} setTicketsAmount={setTicketsAmount} />
          <TicketList
            ticketsAmount={ticketsAmount}
            ticketsRendered={ticketsRendered}
            setTicketsRendered={setTicketsRendered}
            setIsDisabled={setIsDisabled}
          />
          <Button setTicketsAmount={setTicketsAmount} isDisabled={isDisabled} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
