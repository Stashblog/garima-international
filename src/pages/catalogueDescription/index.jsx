import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import s from './styles.module.scss' // Adjust the path as necessary
import images from 'images'
import { SendQueryForm } from 'components' // Adjust the import based on your file structure

// Dummy data for catalogues
const catalogues = [
  // ... (your existing catalogue data)
  {
    id: 1,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  },
  {
    id: 2,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  },
  {
    id: 3,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  },
  {
    id: 4,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  },
  {
    id: 5,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  },
  {
    id: 6,
    title: 'Home Decor',
    description: 'Beautiful collection of home decor items to spruce up your living space.',
    products: [
      { id: 5, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type4 },
      { id: 6, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type5 },
      { id: 7, title: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type6 },
      { id: 8, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type7 },
      { id: 9, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type8 },
      { id: 10, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type9 },
      { id: 11, name: 'Showpiece', description: 'Showpiece item for table and glass cases', imageUrl: images.Type10 }
    ],
    images: [images.Cat, images.Cat2, images.Cat3, images.Type]
  }
]

const CatalogueDescription = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const catalogueItem = catalogues.find(item => item.id === parseInt(id))

  const [selectedProducts, setSelectedProducts] = useState(new Set())
  const [isSelecting, setIsSelecting] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)

  const handleCheckboxChange = productId => {
    const updatedSelection = new Set(selectedProducts)
    if (updatedSelection.has(productId)) {
      updatedSelection.delete(productId)
    } else {
      updatedSelection.add(productId)
    }
    setSelectedProducts(updatedSelection)
  }

  const handleViewProduct = productId => {
    navigate(`/product/${productId}`)
  }

  const handleSelectToggle = () => {
    setIsSelecting(prev => !prev)
    setSelectedProducts(new Set())
  }

  return (
    <div className={s.catalogueDescription + ' indent'}>
      {catalogueItem ? (
        <>
          <h1>{catalogueItem.title}</h1>
          <p>{catalogueItem.description}</p>
          <div className={s.carousel}>
            {catalogueItem.images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} className={s.carouselImage} />
            ))}
          </div>

          <h2>Available Products</h2>
          <button className={s.selectButton} onClick={handleSelectToggle}>
            {isSelecting ? 'Cancel' : 'Select'}
          </button>
          {isSelecting && (
            <button className={s.queryButton} onClick={() => setModalVisible(true)}>
              Send Query
            </button>
          )}
          <div className={s.productList}>
            {catalogueItem.products.map(product => (
              <div key={product.id} className={`${s.productCard} ${isSelecting ? s.staticCard : ''}`}>
                <div className={s.cardInner}>
                  <div className={s.cardFront}>
                    <img src={product.imageUrl} alt={product.name} className={s.productImage} />
                    {isSelecting && (
                      <input
                        type='checkbox'
                        checked={selectedProducts.has(product.id)}
                        onChange={() => handleCheckboxChange(product.id)}
                        className={s.checkbox}
                      />
                    )}
                  </div>
                  <div className={s.cardBack}>
                    <h3>{product.name}</h3>
                    <button className={s.viewProductButton} onClick={() => handleViewProduct(product.id)}>
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SendQueryForm isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
        </>
      ) : (
        <p>Catalogue not found.</p>
      )}
    </div>
  )
}

export default CatalogueDescription
