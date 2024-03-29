import Link from 'next/link';
import TimeAgo from 'react-time-ago';

type Props = {
  title: string;
  link: string;
  domain: string;
  createdAt: Date;
};

export default function Bookmark({ title, link, domain, createdAt }: Props) {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-gray-50 dark:bg-blue-800 dark:ring-gray-800'>
        🔗
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Saved a bookmark</h2>
          <span className='text-sm font-normal text-gray-400'>
            <TimeAgo date={createdAt} timeStyle='twitter-minute-now' />
          </span>
        </div>
        <Link href={link}>
          <div className='group mt-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-700/50'>
            <h1 className='transition-colors duration-200 group-hover:text-blue-500'>
              {title}
            </h1>
            <div className='flex items-center space-x-2 text-sm font-normal tracking-wider text-gray-400'>
              <img
                src={`https://www.google.com/s2/favicons?domain=${link}`}
                alt='Favicon for capwatkins.com'
                className='h-4 w-4'
              />
              <span>{domain}</span>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
