import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <p className='max-w-xl text-2xl font-semibold text-gray-500'>Hi! I'm <span className='text-gray-800'>Tom Bakker</span>. I'm a designer and developer currently working at Efteling. I build apps using Swift and React Native.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
