import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'

const Catalogue = () => {
  const navigate = useNavigate()

  const catalogItems = [
    {
      id: 1,
      title: 'Home Decor',
      roomType: 'Living Room',
      imageUrl: images.Cat
    },
    {
      id: 2,
      title: 'Antiques',
      roomType: 'Pooja Room',
      imageUrl: images.Cat2
    },
    {
      id: 3,
      title: 'New Arrivals',
      roomType: 'Study Room',
      imageUrl: images.Cat3
    },
    {
      id: 4,
      title: 'Home Decor',
      roomType: 'Living Room',
      imageUrl: images.Cat
    },
    {
      id: 5,
      title: 'Antiques',
      roomType: 'Pooja Room',
      imageUrl: images.Cat2
    },
    {
      id: 6,
      title: 'New Arrivals',
      roomType: 'Study Room',
      imageUrl: images.Cat3
    }
  ]

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
        {catalogItems.map(item => (
          <div key={item.id} className={s.carouselItem}>
            <img src={item.imageUrl} alt={item.title} />
            <div className={s.carouselText}>
              <span>{`0${item.id} — ${item.roomType}`}</span>
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
