import Link from 'next/link';

export default function Bookmark() {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-gray-50 dark:bg-blue-800 dark:ring-gray-800'>
        🔗
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Saved a bookmark</h2>
          <span className='text-sm font-normal text-gray-400'>1d ago</span>
        </div>
        <Link href='https://capwatkins.com/blog/the-quiet-times'>
          <div className='group mt-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-700/50'>
            <h1 className='transition-colors duration-200 group-hover:text-blue-500'>
              The Quiet Times
            </h1>
            <div className='flex items-center space-x-2 text-sm font-normal tracking-wider text-gray-400'>
              <img
                src='https://capwatkins.com/favicon.png'
                alt='Favicon for capwatkins.com'
                className='h-4 w-4'
              />
              <span>capwatkins.com</span>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
