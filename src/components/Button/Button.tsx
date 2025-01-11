import React from 'react';
import cls from './Button.module.scss';
import clsx from 'clsx';

interface Button {
  setTicketsAmount: (prev: (prev: number) => number) => void;
  isDisabled: boolean;
}

const Button: React.FC<Button> = ({ setTicketsAmount, isDisabled }) => {
  const handleClick = () => {
    setTicketsAmount((prev: number) => prev + 5);
  };
  return (
    <button className={clsx(cls.button, { disabled: isDisabled })} onClick={handleClick} disabled={isDisabled}>
      Показать еще 5 билетов!
    </button>
  );
};

export default Button;
