import React from 'react';
import cls from './Filters.module.scss';

function Filters() {
  return (
    <div className={cls.filters}>
      <h3 className={cls.filters_title}>Количество пересадок</h3>
      <ul className={cls.filters_list}>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} />
            <span className={cls.checkbox}></span>
            Все
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} />
            <span className={cls.checkbox}></span>
            Без пересадок
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} />
            <span className={cls.checkbox}></span>1 пересадка
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} />
            <span className={cls.checkbox}></span>2 пересадки
          </label>
        </li>
        <li className={cls.filters_item}>
          <label className={cls.label}>
            <input type="checkbox" className={cls.input} />
            <span className={cls.checkbox}></span>3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
