import TimeAgo from 'react-time-ago';

type Props = {
  country: string
  city: string
  createdAt: Date
}

export default function Travel({ country, city, createdAt }: Props) {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 text-lime-600 ring-8 ring-gray-50 dark:bg-lime-900 dark:ring-gray-800'>✈️</div>
      <div className='ml-10 flex-grow pt-2'>
        <h2>
          Traveled to{' '}
          <span className="text-gray-900">{city}, {country}</span>
          <span className='text-sm font-normal text-gray-400 ml-2'>
            <TimeAgo
              date={new Date(createdAt)}
              timeStyle='twitter-minute-now'
            />
          </span>
        </h2>
      </div>
    </li>
  );
}
