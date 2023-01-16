import Image from 'next/image';
import DemoImage from './demo-image.jpg'

export default function Photo() {
  return (
    <li>
      <div className='absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 ring-8 ring-gray-50 dark:bg-pink-700 dark:ring-gray-800'>📸</div>
      <div className='ml-10 flex-grow pt-2'>
        <div className='flex items-center space-x-2 text-base'>
          <h2>Snapped a photo</h2>
          <span className='text-sm font-normal text-gray-400'>1d ago</span>
        </div>
      <Image src={DemoImage} width={482} className='rounded-2xl mt-4 shadow-inner' alt='Image'/>
      </div>
    </li>
  );
}
