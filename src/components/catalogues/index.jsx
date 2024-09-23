import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './styles.module.scss'

const Catalogues = ({ imageSrc, title, id }) => {
  const navigate = useNavigate()

  const handleViewCatalogue = () => {
    navigate(`/catalogue/${id}`) // Redirect to the catalogue description page
  }

  return (
    <div className={s.imageCard}>
      <div className={s.imageWrapper}>
        <img src={imageSrc} alt={title} className={s.image} />
        <div className={s.overlay}>
          <button className={s.viewButton} onClick={handleViewCatalogue}>
            View Catalogue
          </button>
        </div>
      </div>
      <h3 className={s.title}>{title}</h3>
    </div>
  )
}

export default Catalogues
