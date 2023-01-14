import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

type Props = {
  color: 'blue' | 'purple';
} & LinkProps;

export default function Button({
  color,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const linkColors = {
    blue: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200',
    purple:
      'text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200',
  };

  const bgColors = {
    blue: 'bg-blue-100 dark:bg-blue-900',
    purple: 'bg-purple-100 dark:bg-purple-900',
  };

  return (
    <Link
      {...props}
      className={`
        group relative
        flex items-center justify-center 
        py-4 px-6
        text-lg font-medium tracking-wide sm:text-base
        ${linkColors[color]}
        transition duration-300
      `}
    >
      <div
        className={`
        absolute inset-0 -z-10
        rounded-xl 
        ${bgColors[color]}
        transform transition-transform 
        duration-300 group-hover:scale-105
      `}
      ></div>

      <div className='flex items-center space-x-3'>{children}</div>
    </Link>
  );
}
