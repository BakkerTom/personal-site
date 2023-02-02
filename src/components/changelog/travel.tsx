import TimeAgo from 'react-time-ago';

type Props = {
  country: string
  city: string
  createdAt: Date
}

export default function Travel({ country, city, createdAt }: Props) {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 ring-8 ring-gray-50 dark:bg-lime-900 dark:ring-gray-800'>
        ✈️
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Traveled to <span className="font-semibold">{city}, {country}</span></h2>
          <span className='text-sm font-normal text-gray-400'>
            <TimeAgo
              date={new Date(createdAt)}
              timeStyle='twitter-minute-now'
            />
          </span>
        </div>
      </div>
    </li>
  );
}
