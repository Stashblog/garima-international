import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import s from './styles.module.scss' // Adjust the path as necessary
import images from 'images'
import { SendQueryForm } from 'components' // Adjust the import based on your file structure
import { catalogues, products } from 'data'
import { head } from 'helpers'

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

  useEffect(() => {
    head({ title: catalogueItem.title })
  }, [catalogueItem])

  return (
    <div className={s.catalogueDescription + ' indent'}>
      {catalogueItem ? (
        <>
          <h1>{catalogueItem.title}</h1>
          <p>{catalogueItem.description}</p>
          <div className={s.carousel}>
            {catalogueItem.images.map((image, index) => (
              <img key={index} src={images[image]} alt={`Slide ${index}`} className={s.carouselImage} />
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
            {products.map(
              product =>
                catalogueItem.products.some(x => x === product.id) && (
                  <div key={product.id} className={`${s.productCard} ${isSelecting ? s.staticCard : ''}`}>
                    <div className={s.cardInner}>
                      <div className={s.cardFront}>
                        <img src={images[product.imageUrl]} alt={product.name} className={s.productImage} />
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
                )
            )}
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
