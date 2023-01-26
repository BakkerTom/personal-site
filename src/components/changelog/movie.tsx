import Link from 'next/link';
import TimeAgo from 'react-time-ago';

type Props = {
  title: string;
  link: string;
  filmYear: string;
  poster: string;
  createdAt: Date;
};

export default function Movie({
  title,
  link,
  filmYear,
  poster,
  createdAt,
}: Props) {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 ring-8 ring-gray-50 dark:bg-orange-800 dark:ring-gray-800'>
        🍿
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Watched a movie</h2>
          <span className='text-sm font-normal text-gray-400'>
            <TimeAgo
              date={new Date(createdAt)}
              timeStyle='twitter-minute-now'
            />
          </span>
        </div>
        <Link href={link}>
          <div className='group mt-4 flex items-center space-x-6 rounded-2xl bg-gray-100 p-6 dark:bg-gray-700/50'>
            <img
              className='w-20 transform-gpu rounded-xl shadow-lg transition-transform duration-200 ease-out group-hover:-rotate-6 group-hover:scale-110'
              src={poster}
              alt='Everything everywhere all at once movie poster'
            />
            <div className='group'>
              <h1 className='transition-colors duration-200 group-hover:text-orange-500'>
                {title}
              </h1>
              <h2 className='font-normal text-gray-400'>{filmYear}</h2>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
