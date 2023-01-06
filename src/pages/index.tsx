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
        <section className='bg-gray-50 dark:bg-gray-800'>
          <div className='flex min-h-screen flex-col items-center justify-center px-4'>
            <div>
              <div className='mb-8'>
                <Avatar className='h-16 w-16 rounded-full' />
              </div>
              <p className='max-w-xl text-2xl font-semibold leading-normal text-gray-500 dark:text-gray-400'>
                Hi! My name is{' '}
                <span className='text-gray-800 dark:text-gray-300'>
                  Tom Bakker
                </span>
                . I'm a designer and developer currently working at{' '}
                <Link
                  className='text-gray-600 transition-colors hover:text-primary-p3 dark:text-gray-300'
                  href='https://apps.apple.com/nl/app/efteling/id727498391'
                >
                  Efteling
                </Link>
                . I build apps using Swift and React Native.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
