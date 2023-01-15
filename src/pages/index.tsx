import Link from 'next/link';
import * as React from 'react';

import Avatar from '@/components/avatar';
import Button from '@/components/buttons/Button';
import Changelog from '@/components/changelog';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main
        className='mx-auto max-w-xl px-4 pb-24 text-gray-500 dark:text-gray-300'
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <section className='mt-16'>
          <div>
            <div className='mb-8'>
              <Avatar className='h-16 w-16 rounded-full' />
            </div>
            <p className='text-2xl font-medium leading-normal'>
              Hi! My name is{' '}
              <span className='text-gray-800 dark:text-gray-100'>
                Tom Bakker
              </span>
              . I'm a designer and developer currently working at{' '}
              <Link
                className='text-gray-800 transition-colors hover:text-primary-p3 dark:text-gray-100'
                href='https://apps.apple.com/nl/app/efteling/id727498391'
              >
                Efteling
              </Link>
              . I build apps using Swift and React Native.
            </p>
            <div className='mt-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Button href='mailto:tom.bakker92@gmail.com' color='purple'>
                👋 Say hello!
              </Button>
            </div>
          </div>
        </section>
        <section className='mt-20 text-lg'>
          <h1 className='text-lg font-medium'>Changelog</h1>
          <Changelog />
        </section>
      </main>
    </Layout>
  );
}
