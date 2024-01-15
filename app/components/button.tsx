import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  isSelected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  isSelected,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx('p-2', { 'bg-blue-500': isSelected })} {...props}>
      {children}
    </button>
  );
}
