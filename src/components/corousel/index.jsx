
import  { useState } from 'react';
import s from './styles.module.scss'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={s.carousel}>
      <button className={s['carousel-button'] + ' ' + s.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={s['carousel-slides']}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className={s['carousel-button'] + ' ' + s.next} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
