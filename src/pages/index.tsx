import Link from 'next/link';
import * as React from 'react';

import Avatar from '@/components/avatar';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section>
          <div className='flex min-h-screen flex-col items-center justify-center px-4'>
            <div>
              <div className='mb-8'>
                <Avatar className='h-16 w-16 rounded-full' />
              </div>
              <p className='max-w-xl text-2xl font-semibold leading-normal text-gray-500 dark:text-gray-300'>
                Hi! My name is{' '}
                <span className='text-gray-800 dark:text-gray-100'>
                  Tom Bakker
                </span>
                . I'm a designer and developer currently working at{' '}
                <Link
                  className='text-gray-600 transition-colors hover:text-primary-p3 dark:text-gray-100'
                  href='https://apps.apple.com/nl/app/efteling/id727498391'
                >
                  Efteling
                </Link>
                . I build apps using Swift and React Native.
              </p>
              <div className='mt-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <Link
                  href='https://twitter.com/BakkerTom'
                  className='flex justify-center space-x-3 rounded-xl bg-blue-100 py-4 px-6 font-semibold text-blue-500 dark:bg-blue-900 dark:text-blue-300 sm:justify-start'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-twitter'
                  >
                    <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                  </svg>
                  <span>Twitter</span>
                </Link>
                <Link
                  href='mailto:tom.bakker92@gmail.com'
                  className='flex justify-center space-x-3 rounded-xl bg-purple-100 py-4 px-6 font-semibold text-purple-500 dark:bg-purple-900 dark:text-purple-300 sm:justify-start'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6'
                  >
                    <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                    <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                  </svg>
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
