
import s from './styles.module.scss'

const AboutUs = () => {
  return (
    
    <div className={s.aboutUsContainer + " indent"}>
    
      <div className={s.banner}>
        <div className={s.bannerContent}>
         
          <h1>About Us</h1>
          <p>We are passionate about delivering the best services to our customers!</p>
        </div>
      </div>

    
      <section className={s.aboutContent}>
        <div className={s.contentWrapper}>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-notch solutions that meet the needs of
            our diverse clientele. With a focus on innovation and customer satisfaction,
            we strive to exceed expectations and deliver value in every project we undertake.
          </p>

          <h2>Our Team</h2>
          <p>
            Our dedicated team of experts is always ready to take on new challenges and push
            the boundaries of creativity and technology.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer-Centric Approach</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutUs