import React from 'react';
import cls from './Logo.module.scss';

function Logo() {
  return <img className={cls.logo} src="../../img/logo.png" alt="AviaSales" width={80} height={80} />;
}

export default Logo;
