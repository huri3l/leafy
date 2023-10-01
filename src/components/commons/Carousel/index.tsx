import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Dots } from './Dots';
import { Arrows } from './Arrows';

type TCarouselProps = PropsWithChildren &
  EmblaOptionsType & {
    arrows?: boolean;
    dots?: boolean;
  };

export const Carousel = ({
  children,
  arrows = false,
  dots = false,
  ...options
}: TCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);
    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  const canScrollNext = !!emblaApi?.canScrollNext();

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      {dots && (
        <Dots itemsLength={length} selectedIndex={selectedIndex} scrollTo={emblaApi?.scrollTo} />
      )}
      {arrows && (
        <Arrows
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      )}
    </>
  );
};
export default Carousel;
