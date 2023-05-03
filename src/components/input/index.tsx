import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

// interface IInput extends HTMLInputElement {}

const Input: React.FC<any> = ({ name, type }) => {
  return (
    <div className='float-label-field'>
      <label htmlFor="txtName">{name}</label>
      <input
        id={name}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
