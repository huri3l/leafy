'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Dots } from './Dots';
import { Arrows } from './Arrows';
import { cn } from '@/sdk/lib/style';

type TCarouselProps = PropsWithChildren &
  EmblaOptionsType & {
    arrows?: boolean;
    dots?: {
      visible: boolean;
      style?: {
        container?: string;
        dot?: string;
      };
    };
    className?: string;
  };

export const Carousel = ({
  children,
  arrows = false,
  dots = {
    visible: false,
    style: {
      container: '',
      dot: '',
    },
  },
  className,
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
    <div className={className}>
      <div ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      {dots.visible && (
        <Dots
          style={dots.style}
          itemsLength={length}
          selectedIndex={selectedIndex}
          scrollTo={emblaApi?.scrollTo}
        />
      )}
      {arrows && (
        <Arrows
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      )}
    </div>
  );
};
