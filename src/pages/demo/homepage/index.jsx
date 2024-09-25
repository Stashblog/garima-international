import { Card } from 'components'
import s from './styles.module.scss'
import images from 'images'

export default function Main() {
  //   useEffect(() => {
  //   if (images.length) {
  //     const swiper = new window.Swiper(`.swiper`, {
  //       slidesPerView: 1,
  //       spaceBetween: 50,
  //       loop: true,
  //       autoplay: {
  //         delay: 5000, // Adjust as needed
  //         disableOnInteraction: false
  //       },
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //         dynamicBullets: true
  //       },
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev'
  //       }
  //     })

  //     return () => {
  //       swiper.destroy(true, true)
  //     }
  //   }
  // }, [images])

  return (
    <>
      <div className={s.main}>
        <div className={s.dashboard}>
          <div className={s.content + ' indent'}>
            <img src={images.Home} />
            {/* 
         <div className={'swiper topBanners ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {images.map((img, i) => (
                <div className={s.slide + ' swiper-slide'} key={i}>
                  <ImageTag src={img} alt='' />
                </div>
              ))}
            </div>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-pagination'></div>
          </div> */}
            <div className='front'>
              {/* <Card
                title='Garima International'
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonLabel='Buy Now'
                buttonLink='/'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
