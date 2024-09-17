import { useState } from 'react'
import s from './styles.module.scss'
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    contact: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormStatus('Submitting...')

    setTimeout(() => {
      setFormStatus('Your message has been sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <div className={s.contactUs + ' indent'}>
      <h1>Contact Us</h1>
      <blockquote className={s.quote}>
        We are here to help you turn your ideas into reality. Reach out to us and let us create something amazing
        together.
      </blockquote>
      <div className={s.contactContent}>
        <form className={s.contactForm} onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />

          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} required />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
          <label htmlFor='contact'>Contact</label>
          <input type='tel' id='contact' name='contact' value={formData.contact} onChange={handleChange} required />

          <button type='submit'>Send Message</button>
          {formStatus && <p className={s.formStatus}>{formStatus}</p>}
        </form>

        <div className={s.illustration}>{/* <img src={images.illus} alt='Contact Us Illustration' /> */}</div>
      </div>
    </div>
  )
}

export default ContactUs
