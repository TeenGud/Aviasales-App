import React from 'react';
import cls from './Filters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import {
  toggleAll,
  toggleNoTransfer,
  toggleOneTransfer,
  toggleThreeTransfers,
  toggleTwoTransfers,
} from '../../state/filters/filtersSlice.ts';

interface Filters {
  setTicketsRendered: (tickets: []) => void;
  setTicketsAmount: (amount: number) => void;
}

const Filters: React.FC<Filters> = ({ setTicketsRendered, setTicketsAmount }) => {
  const filters = useSelector((state: RootState) => state.filters.value);
  const dispatch = useDispatch<AppDispatch>();
  const handleToggleAll = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(toggleAll());
  };
  const handleToggleNoTransfer = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(toggleNoTransfer());
  };
  const handleToggleOneTransfer = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(toggleOneTransfer());
  };
  const handleToggleTwoTransfers = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(toggleTwoTransfers());
  };
  const handleToggleThreeTransfers = () => {
    setTicketsRendered([]);
    setTicketsAmount(5);
    dispatch(toggleThreeTransfers());
  };
  return (
    <div className={cls.filters}>
      <h3 className={cls.filters_title}>Количество пересадок</h3>
      <ul className={cls.filters_list}>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} onClick={handleToggleAll} checked={filters.all} readOnly />
            <span className={cls.checkbox}></span>
            Все
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input
              type="checkbox"
              className={cls.input}
              onClick={handleToggleNoTransfer}
              checked={filters.noTransfer}
              readOnly
            />
            <span className={cls.checkbox}></span>
            Без пересадок
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input
              type="checkbox"
              className={cls.input}
              onClick={handleToggleOneTransfer}
              checked={filters.oneTransfer}
              readOnly
            />
            <span className={cls.checkbox}></span>1 пересадка
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input
              type="checkbox"
              className={cls.input}
              onClick={handleToggleTwoTransfers}
              checked={filters.twoTransfers}
              readOnly
            />
            <span className={cls.checkbox}></span>2 пересадки
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input
              type="checkbox"
              className={cls.input}
              onClick={handleToggleThreeTransfers}
              checked={filters.threeTransfers}
              readOnly
            />
            <span className={cls.checkbox}></span>3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
