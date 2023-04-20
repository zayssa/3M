import React from 'react';
import s from './Spinner.module.css';
import cn from 'classnames';

const Spinner = () => {
  return (
    <div className={cn('spinner', s.wrapper)}>
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
