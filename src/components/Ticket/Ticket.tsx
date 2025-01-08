import React from 'react';
import { add } from 'date-fns';
import cls from './Ticket.module.scss';
import { flightTimeFormater, timeFormater } from '../../utils/tools';

interface Ticket {
  price: number;
  carrier: string;
  firstSegment: { date: string; destination: string; duration: number; origin: string; stops: string[] };
  secondSegment: { date: string; destination: string; duration: number; origin: string; stops: string[] };
  setIsDisabled: (flag: boolean) => void;
}

const Ticket: React.FC<Ticket> = ({ price, carrier, firstSegment, secondSegment, setIsDisabled }) => {
  if (firstSegment && secondSegment) {
    const {
      date: dateFirst,
      destination: destinationFirst,
      duration: durationFirst,
      origin: originFirst,
      stops: stopsFirst,
    } = firstSegment;
    const {
      date: dateSecond,
      destination: destinationSecond,
      duration: durationSecond,
      origin: originSecond,
      stops: stopsSecond,
    } = secondSegment;

    const departureTimeFirst = flightTimeFormater(
      `${new Date(dateFirst).getHours()}:${new Date(dateFirst).getMinutes()}`
    );
    const landingTimeFirst = flightTimeFormater(
      add(new Date(dateFirst), { minutes: durationFirst }).getHours() +
        ':' +
        add(new Date(dateFirst), { minutes: durationFirst }).getMinutes()
    );

    const departureTimeSecond = flightTimeFormater(
      `${new Date(dateSecond).getHours()}:${new Date(dateSecond).getMinutes()}`
    );
    const landingTimeSecond = flightTimeFormater(
      add(new Date(dateSecond), { minutes: durationSecond }).getHours() +
        ':' +
        add(new Date(dateSecond), { minutes: durationSecond }).getMinutes()
    );
    setIsDisabled(false);
    return (
      <div className={cls.ticket}>
        <div className={cls.price_and_icon}>
          <span className={cls.price}>{price} Р</span>
          <img
            src={`https://images.daisycon.io/airline/?width=110&height=36&iata=${carrier}`}
            alt=""
            className="icon"
          />
        </div>
        <div className={cls.to}>
          <div className={cls.distanation_and_time}>
            <span className={cls.span_title}>{`${originFirst} – ${destinationFirst}`}</span>
            <span className={cls.span_content}>
              {departureTimeFirst} - {landingTimeFirst}
            </span>
          </div>
          <div className={cls.time}>
            <span className={cls.span_title}>В пути</span>
            <span className={cls.span_content}>{timeFormater(durationFirst)}</span>
          </div>
          <div className={cls.transfer}>
            <span className={cls.span_title}>
              {stopsFirst.length === 0
                ? '0 пересадок'
                : stopsFirst.length === 1
                  ? '1 пересадка'
                  : `${stopsFirst.length} пересадки`}
            </span>
            <span className={cls.span_content}>{stopsFirst.length ? stopsFirst.join(', ') : '-'}</span>
          </div>
        </div>
        <div className={cls.from}>
          <div className={cls.distanation_and_time}>
            <span className={cls.span_title}>{`${originSecond} – ${destinationSecond}`}</span>
            <span className={cls.span_content}>
              {departureTimeSecond} - {landingTimeSecond}
            </span>
          </div>
          <div className={cls.time}>
            <span className={cls.span_title}>В пути</span>
            <span className={cls.span_content}>{timeFormater(durationSecond)}</span>
          </div>
          <div className={cls.transfer}>
            <span className={cls.span_title}>{`${stopsSecond.length} пересадки`}</span>
            <span className={cls.span_content}>{stopsSecond.length ? stopsSecond.join(', ') : '-'}</span>
          </div>
        </div>
      </div>
    );
  } else {
    setIsDisabled(true);
    return <></>;
  }
};

export default Ticket;
