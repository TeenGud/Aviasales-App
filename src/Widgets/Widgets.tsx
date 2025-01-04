import React from 'react';
import cls from './Widgets.module.scss';

function Widgets() {
  return (
    <ul className={cls.widgets}>
      <li className={cls.widget}>
        <button className={[cls.widget_button, cls.widget_button_first].join(' ')}>Самый дешевый</button>
      </li>
      <li className={cls.widget}>
        <button className={[cls.widget_button, cls.widget_button_second].join(' ')}>Самый быстрый</button>
      </li>
      <li className={cls.widget}>
        <button className={[cls.widget_button, cls.widget_button_third].join(' ')}>Оптимальный</button>
      </li>
    </ul>
  );
}

export default Widgets;
