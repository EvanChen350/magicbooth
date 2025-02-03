import { GalleryGrid } from '@/components/cui';
import { ChevronsDown } from 'lucide-react';

const Gallery = () => {
  return (
    <section id='gallery'>
      <div className='mx-auto max-w-8xl px-5 md:px-10 py-20 relative'>
        <GalleryGrid className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4' />
        <ChevronsDown
          className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
          size={36}
        />
      </div>
    </section>
  );
};

export default Gallery;
