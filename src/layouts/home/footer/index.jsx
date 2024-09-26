import { Link } from 'react-router-dom'
import s from './styles.module.scss'

export default function Main() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.col}>
            <h3 className={s.companyName}>Global Craft Innovations</h3>
            <p>
              Global Craft Innovations, peetal nagri,
              <br />
              Moradabad, Uttar Pradesh, India
            </p>
          </div>

          <div className={s.col}>
            <h4>Links</h4>
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/contactUs'>Support</Link>
              </li>
              <li>
                <Link to='/aboutUs'>About</Link>
              </li>
              <li>
                <Link to='/contactUs'>Contact</Link>
              </li>
            </ul>
          </div>

          <div className={s.col}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href='/'>Terms & Conditions</a>
              </li>
              <li>
                <a href='/'>Privacy Policy</a>
              </li>
              <li className={s.email}>
                <a href='mailTo:info@globalcraftinnovations.com'>
                  <span className='material-icons'>email</span>
                  info@globalcraftinnovations.com
                </a>
              </li>

              <li className={s.socialIcons}>
                <a href='/'>
                  <i className='fa-brands fa-whatsapp'></i>
                </a>
                <a href='/'>
                  <i className='fa-brands fa-instagram'></i>
                </a>
                <a href='/'>
                  <i className='fa-brands fa-linkedin'></i>
                </a>
                <a href='/'>
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>2024. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
