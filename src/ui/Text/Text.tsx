import { FC, HTMLProps, PropsWithChildren } from "react";
import { Color } from '../index';
import classNames from 'classnames';
import styles from './Text.module.css';

type TextType = PropsWithChildren<
  {
    size?: 12 | 20 | 30 | 32 ;
    color?: Color;
    uppercase?: boolean;
    multiline?: boolean;
  } & HTMLProps<HTMLDivElement>
>;

export const Text: FC<TextType> = ({size, color, uppercase, multiline, children, className, ...props}) => (
    <div
    className={classNames(
        styles.base,
        styles[`size-${size}`],
        styles[`color-${color}`],
        uppercase && styles.uppercase,
        multiline && styles.multiline,
        className,
      )}
      {...props}
    >
        {children}
    </div>
);
