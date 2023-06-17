import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Botao = ({ children, type, onClick }: BotaoProps) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
};

export default Botao;
