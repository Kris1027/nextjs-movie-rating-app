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
    <button
      className={clsx('p-2 font-semibold text-2xl bg-tertiary text-primary', {
        ' text-quinary': isSelected,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
