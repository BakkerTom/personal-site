import Book from './book';
import Bookmark from './bookmark';
import Movie from './movie';

export default function Changelog() {
  return (
    <ol className='relative ml-5 mt-6 space-y-8 border-l-2 dark:border-gray-700'>
      <Movie />
      <Bookmark />
      <Book />
    </ol>
  );
}
