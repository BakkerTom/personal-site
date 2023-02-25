import Image from 'next/image';
import TimeAgo from 'react-time-ago';

type Props = {
  imageUrl: string;
  createdAt: Date;
}

export default function Photo({ imageUrl, createdAt }: Props) {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 ring-8 ring-gray-50 dark:bg-pink-700 dark:ring-gray-800'>
        📸
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Snapped a photo</h2>
          <span className='text-sm font-normal text-gray-400'>
            <TimeAgo date={createdAt} timeStyle='twitter-minute-now' />
          </span>
        </div>
        <Image
          src={imageUrl}
          width={482}
          height={0}
          className='mt-4 rounded-2xl shadow-inner'
          alt='Image'
        />
      </div>
    </li>
  );
}
