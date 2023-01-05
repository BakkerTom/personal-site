import Image from 'next/image';

import avatar from './avatar.jpg';

export default function Avatar(props: any) {
  return <Image src={avatar} alt='Picture of me' {...props} />;
}
