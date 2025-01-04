import React from 'react';
import cls from './Ticket.module.scss';

function Ticket() {
  return (
    <div className={cls.ticket}>
      <div className={cls.price_and_icon}>
        <span className={cls.price}>13 400 Р </span>
        <img src="../../img/s7logo.png" alt="" className="icon" />
      </div>
      <div className={cls.to}>
        <div className={cls.distanation_and_time}>
          <span className={cls.span_title}>MOW – HKT</span>
          <span className={cls.span_content}>10:45 – 08:00</span>
        </div>
        <div className={cls.time}>
          <span className={cls.span_title}>В пути</span>
          <span className={cls.span_content}>21ч 15м</span>
        </div>
        <div className={cls.transfer}>
          <span className={cls.span_title}>2 пересадки</span>
          <span className={cls.span_content}>HKG, JNB</span>
        </div>
      </div>
      <div className={cls.from}>
        <div className={cls.distanation_and_time}>
          <span className={cls.span_title}>MOW – HKT</span>
          <span className={cls.span_content}>11:20 – 00:50</span>
        </div>
        <div className={cls.time}>
          <span className={cls.span_title}>В пути</span>
          <span className={cls.span_content}>13ч 30м</span>
        </div>
        <div className={cls.transfer}>
          <span className={cls.span_title}>1 пересадка</span>
          <span className={cls.span_content}>HKG</span>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
