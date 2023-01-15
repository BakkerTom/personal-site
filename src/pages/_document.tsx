import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/ClashGrotesk-Variable.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <meta
          name='theme-color'
          content='#f9fafb'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='#1f2937'
          media='(prefers-color-scheme: dark)'
        />
      </Head>
      <body className='bg-gray-50 font-primary text-lg font-medium text-gray-900 dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
