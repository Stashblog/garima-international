// ContactUs.jsx
import  { useState } from 'react';
import s from './styles.module.scss'; // Import the SCSS module
import images from 'images'
const ContactUs = () => {
 
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [formStatus, setFormStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');
    
        // Simulate form submission
        setTimeout(() => {
          setFormStatus('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }, 2000);
      };
    
      return (
        <div className={s.contactUs}>
          <h1>Contact Us</h1>
          <blockquote className={s.quote}>
        We are here to help you turn your ideas into reality. Reach out to us and let us create something amazing together.
      </blockquote>
          <div className={s.contactContent}>
            
            <form className={s.contactForm} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
    
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
    
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
    
              <button type="submit">Send Message</button>
              {formStatus && <p className={s.formStatus}>{formStatus}</p>}
            </form>
    
            <div className={s.illustration}>
              <img src={images.illus} alt="Contact Us Illustration" />
            </div>
          </div>
        </div>
      );
};

export default ContactUs;
