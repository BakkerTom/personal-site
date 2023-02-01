import Bookmark from './bookmark';
import Movie from './movie';
import Travel from './travel';

type Activity = {
  id: number;
  contentType: 'Movie' | 'Bookmark';
  content: any;
  createdAt: string;
};

type Props = {
  data: Activity[];
};

export default function Changelog({ data }: Props) {
  return (
    <ol className='relative ml-5 mt-6 space-y-8 border-l-2 dark:border-gray-700'>
      {data?.map((activity) => {
        if (activity.contentType === 'Movie') {
          return (
            <Movie
              key={activity.id}
              {...activity.content}
              createdAt={new Date(activity.createdAt)}
            />
          );
        }

        if (activity.contentType === 'Bookmark') {
          return (
            <Bookmark
              key={activity.id}
              {...activity.content}
              createdAt={new Date(activity.createdAt)}
            />
          );
        }

        if (activity.contentType === 'Travel') {
          return (
            <Travel
              key={activity.id}
              {...activity.content}
              createdAt={new Date(activity.createdAt)}
            />
          );
        }
        
        return null;
      })}
    </ol>
  );
}
