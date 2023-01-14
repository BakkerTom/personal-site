import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

type Props = {
  color: string;
} & LinkProps;

export default function Button({
  color,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Link
      {...props}
      className={`
        group relative
        flex items-center justify-center 
        py-4 px-6
        text-lg font-medium tracking-wide sm:text-base
        text-${color}-500 dark:text-${color}-300
        hover:text-${color}-600 dark:hover:text-${color}-200
        transition duration-300
      `}
    >
      <div
        className={`
        absolute inset-0 -z-10
        rounded-xl 
        bg-${color}-100 dark:bg-${color}-900
        transform transition-transform 
        duration-300 group-hover:scale-105
      `}
      ></div>

      <div className='flex items-center space-x-3'>{children}</div>
    </Link>
  );
}
