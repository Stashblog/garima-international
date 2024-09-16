import s from './styles.module.scss'
import images from 'images'
const ContactUs = () => {
  return (
    <div className={s.newHomeWeb + ' indent'}>
      <div className={s.responsiveContainerBlock}>
        <img className={s.imgBG} src={images.banner2} alt='Background' />
        <div className={s.textContainer}>
          <div className={s.topHead}>
            <p className={s.heading}>
              Get in <span className={s.orangeText}>touch</span>
            </p>
            <div className={s.orangeLine}></div>
          </div>
          <p className={s.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className={s.formContainer}>
          <form className={s.formBox}>
            <div className={s.formWrapper}>
              <div className={s.left4}>
                <div className={s.inputGroup}>
                  <input className={s.input} name='FirstName' placeholder='First Name' />
                  <input className={s.input} name='LastName' placeholder='Last Name' />
                  <input className={s.input} name='Email' placeholder='Email Address' />
                  <input className={s.input} name='PhoneNumber' placeholder='Phone Number' />
                </div>
                <textarea className={s.textInput} placeholder='Message'></textarea>
              </div>
              <a className={s.send} href='#'>
                Send
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
