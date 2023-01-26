import Link from 'next/link';

export default function Book() {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 ring-8 ring-gray-50 dark:bg-purple-900 dark:ring-gray-800'>
        📖
      </div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Finished a book</h2>
          <span className='text-sm font-normal text-gray-400'>1d ago</span>
        </div>
        <Link href='https://oku.club/book/project-hail-mary-by-andy-weir-l5lKi'>
          <div className='group mt-4 flex items-center space-x-6 rounded-2xl bg-gray-100 p-6 dark:bg-gray-700/50'>
            <div className='relative w-20 transform-gpu overflow-hidden rounded rounded-l-sm shadow-lg transition-transform duration-200 ease-out group-hover:-rotate-6 group-hover:scale-110'>
              <img
                src='https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/06/9d4f0653f7d7418f877c6c795d795b28.jpg'
                alt='Everything everywhere all at once movie poster'
              />
              <div className='absolute top-0 bottom-0 left-[2px] w-[2px] bg-gradient-to-r from-black/30 to-white/30' />
            </div>
            <div className='group'>
              <h1 className='transition-colors duration-200 group-hover:text-purple-500 dark:group-hover:text-purple-600'>
                Project Hail Mary
              </h1>
              <h2 className='font-normal text-gray-400'>Andy Weir</h2>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
