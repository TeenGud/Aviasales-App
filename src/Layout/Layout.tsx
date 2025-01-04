import React from 'react';
import Logo from '../Logo';
import Filters from '../Filters';
import Widgets from '../Widgets';
import TicketList from '../TicketList';
import Button from '../Button';
import cls from './Layout.module.scss';

function Layout() {
  return (
    <div className={cls.layout}>
      <Logo />
      <div className={cls.content}>
        <Filters />
        <div className={cls.main_content}>
          <Widgets />
          <TicketList />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Layout;
