import React from "react";
import {  ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import classNames from 'classnames';
import styles from './Button.module.css';

export type ButtonType = PropsWithChildren<{
  custom?: boolean; 
}& DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const Button: FC<ButtonType> = ({custom, children, className, ...props}) => (
    <button 
    type="button"
    className={classNames(styles.root, custom && styles.custom, className)}
    {...props}
    >
    {children}
  </button>
);

