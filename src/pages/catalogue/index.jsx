import { useNavigate } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { catalogues } from 'data'

const Catalogue = () => {
  const navigate = useNavigate()

  const handleViewCatalogue = id => {
    navigate(`/catalogue/${id}`) // Navigate to Catalogue Description with the catalogue ID
  }

  return (
    <div className={s.cataloguePage + ' indent'}>
      <div className={s.content}>
        <h1>Catalogues</h1>
        <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
        <button className={s.exploreButton}>Explore More</button>
      </div>

      <div className={s.carousel}>
        {catalogues.map(item => (
          <div key={item.id} className={s.carouselItem}>
            <img src={images[item.imageSrc]} alt={item.title} />
            <div className={s.carouselText}>
              {/* <span>{`0${item.id} — ${item.roomType}`}</span> */}
              <h2>{item.title}</h2>
            </div>
            <div className={s.overlay}>
              <button className={s.queryButton} onClick={() => handleViewCatalogue(item.id)}>
                View Catalogue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue
