import React, { Dispatch, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import cls from './Widgets.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store.ts';
import { clickCheap, clickFast, clickOptimal } from '../../state/widgets/widgetsSlice.ts';
import { changeAllTickets } from '../../state/tickets/ticketsSlice.ts';
import { sortTickets } from '../../utils/tools/sortTickets.ts';
import { listOfTickets } from '../../types/types.ts';

interface Widgets {
  setTicketsAmount: (amount: number) => void;
  setTicketsRendered: Dispatch<SetStateAction<never[]>>;
}

const Widgets: React.FC<Widgets> = ({ setTicketsRendered, setTicketsAmount }) => {
  const widgets = useSelector((state: RootState) => state.widgets.value);
  const allTickets = useSelector((state: RootState) => state.tickets.allTickets);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    handleClickCheap();
  }, []);
  const handleClickCheap = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(changeAllTickets(sortTickets(allTickets as listOfTickets, 'cheap') as []));
    dispatch(clickCheap());
  };
  const handleClickFast = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(changeAllTickets(sortTickets(allTickets as listOfTickets, 'fast') as []));
    dispatch(clickFast());
  };
  const handleClickOptimal = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(changeAllTickets(sortTickets(allTickets as listOfTickets, 'optimal') as []));
    dispatch(clickOptimal());
  };
  return (
    <ul className={cls.widgets}>
      <li className={cls.widget}>
        <button
          className={classNames(cls.widget_button, cls.widget_button_first, { active: widgets.сheap })}
          onClick={handleClickCheap}
        >
          Самый дешевый
        </button>
      </li>
      <li className={cls.widget}>
        <button
          className={classNames(cls.widget_button, cls.widget_button_second, { active: widgets.fast })}
          onClick={handleClickFast}
        >
          Самый быстрый
        </button>
      </li>
      <li className={cls.widget}>
        <button
          className={classNames(cls.widget_button, cls.widget_button_third, { active: widgets.optimal })}
          onClick={handleClickOptimal}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default Widgets;
