import React, { useState } from 'react';
import {
  Badge,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/ecommerce.png',
    altText: 'Integrador de lojas virtuais, e recursos Ux para E-commerce.',
    caption: 'Integrador de lojas virtuais, e recursos Ux para E-commerce.',
    badge:'Profissional',
  },
  {
    src: '/websites.png',
    altText: 'Sites de auto desempenho, aplicações que se adaptam ao cliente.',
    caption: 'Sites de auto desempenho, aplicações que se adaptam ao cliente.',
    badge:'Web Sites',

  },
  {
    src: '/uxdesign.png',
    altText: 'Posso ajuda-lo a criar a melhor interface para seu usuário.',
    caption: 'Posso ajuda-lo a criar a melhor interface para seu usuário.',
    badge:'Ux Design',

  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-fluid" src={item.src} alt={item.altText} />
        <Badge href="#" color="primary" className="rounded-pill">{item.badge}</Badge> 
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slide;