import Link from 'next/link';
import * as React from 'react';

import Avatar from '@/components/avatar';
import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main style={{ WebkitTapHighlightColor: 'transparent' }}>
        <section>
          <div className='flex flex-col items-center justify-center py-16 px-4 sm:min-h-screen sm:py-0'>
            <div>
              <div className='mb-8'>
                <Avatar className='h-16 w-16 rounded-full' />
              </div>
              <p className='max-w-xl text-2xl font-medium leading-normal text-gray-500 dark:text-gray-300'>
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
          </div>
        </section>
      </main>
    </Layout>
  );
}
