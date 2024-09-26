import s from './styles.module.scss'
import { useEffect } from 'react'
import images from 'images'
// Array of banners for demonstration
const banners = [images.h1, images.h2, images.h3]

export default function Main() {
  useEffect(() => {
    // Check if banners is an array and has elements before initializing Swiper
    if (Array.isArray(banners) && banners.length) {
      const swiper = new window.Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        autoplay: {
          delay: 5000, // Adjust autoplay delay as needed
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })

      return () => {
        swiper.destroy(true, true) // Cleanup on unmount
      }
    }
  }, [])

  return (
    <>
      <div className={s.main}>
        <div className={s.dashboard}>
          <div className={s.content}>
            <div className={'swiper topBanners ' + s.swiperContainer}>
              <div className='swiper-wrapper'>
                {/* Ensure banners is an array and map over it */}
                {Array.isArray(banners) && banners.length ? (
                  banners.map((banner, i) => (
                    <div className={s.slide + ' swiper-slide'} key={i}>
                      <img src={banner} alt={`banner-${i}`} />
                    </div>
                  ))
                ) : (
                  <p>No banners available</p>
                )}
              </div>
              <div className='swiper-button-next'></div>
              <div className='swiper-button-prev'></div>
              <div className='swiper-pagination'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
