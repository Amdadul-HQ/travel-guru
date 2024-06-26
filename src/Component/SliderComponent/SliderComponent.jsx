import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../assets/Sajek.png'
import pic2 from '../../assets/Sreemongol.png'
import pic3 from '../../assets/sundorbon.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

export default function SliderComponent() {
    const images = [pic1,pic2,pic3]
  const [swiperRef, setSwiperRef] = useState(null);
//   const appendNumber = useRef(3);
//   const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 3 }).map((_, index) => `Slide ${index + 1}`)
  );

//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };


  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide  key={slideContent} virtualIndex={index}>
            <img  className='h-[410px]' src={images[index]} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
