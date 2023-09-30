import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { DotButton, useDotButton } from './CarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButtons';
import './embla.css';
import './sandbox.css';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <strong>carrosel {index}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
          />
        ))}
      </div>
    </div>
  );
};
