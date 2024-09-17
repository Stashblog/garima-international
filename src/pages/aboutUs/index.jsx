import images from 'images'
import s from './styles.module.scss'

const AboutUs = () => {
  return (
    <div className={s.aboutUsContainer + ' indent'}>
      <div className={s.imageContainer}>
        <img src={images.banner1} alt='Company' className={s.aboutImage} />
      </div>

      <div className={s.content}>
        <h2>About Us</h2>
        <p>
          We are a forward-thinking company dedicated to providing top-notch services and products. Our mission is to
          drive innovation, value, and customer satisfaction across the globe.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
