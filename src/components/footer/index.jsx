
import s from './styles.module.scss'; // Import SCSS module
import { FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'; // Icons

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.row}>
          {/* Left Column - Company Info */}
          <div className={s.col}>
            <h3 className={s.companyName}>Garima International.</h3>
            <p>Garima international, peetal nagri,<br />
              Moradabad, Uttar Pradesh, India</p>
          </div>

          {/* Middle Column - Links */}
          <div className={s.col}>
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          {/* Right Column - Company & Social Links */}
          <div className={s.col}>
            <h4>Company</h4>
            <ul>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policies</a></li>
              <li className={s.email}><FaEnvelope /> admin@garimainternational.com</li>
              
              <li className={s.socialIcons}>
                <a href="/"><FaLinkedin /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaFacebookF /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
