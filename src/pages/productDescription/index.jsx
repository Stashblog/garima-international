import { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './styles.module.scss'
import images from 'images'
import { ImageGrid } from 'components'
import { SendQueryForm } from 'components'

// Assuming the component is receiving `product` prop
const ProductDescription = ({ product }) => {
  const { id } = useParams() // Get the product id from the route
  const [isModalVisible, setModalVisible] = useState(false)
  // Mock data (Replace this with actual data fetching logic if needed)
  const mockProducts = [
    {
      id: 1,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription:
        'This beautiful showpiece adds elegance to any table or display case.This beautiful showpiece adds elegance to any table or display case.This beautiful showpiece adds elegance to any table or display case.This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 2,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type1,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 3,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type2,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 4,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type3,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 5,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type4,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 6,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type5,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 7,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type6,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 8,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type7,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 9,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type8,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 10,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type9,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    },
    {
      id: 11,
      title: 'Showpiece',
      tags: ['New Arrival', 'Trending'],
      description: 'Showpiece item for table and glass cases.',
      quantity: 20,
      category: 'Home Decor',
      listedOn: '2024-09-20',
      detailedDescription: 'This beautiful showpiece adds elegance to any table or display case.',
      additionalInfo: 'This product comes with a 1-year warranty.',
      imageUrl: images.Type10,
      additionalImages: [images.Typeimg1, images.Typeimg2, images.Typeimg3]
    }

    // Add other products in the same format
    // ...
  ]

  // Find the current product by ID
  const currentProduct = product || mockProducts.find(p => p.id === parseInt(id)) || mockProducts[0] // Use passed product prop or fallback to mockProducts

  return (
    <div className={s.productPage}>
      <div className={s.productDetails}>
        {/* Left column: Product Image */}
        <div className={s.imageSection}>
          <ImageGrid
            images={[
              { url: currentProduct.imageUrl, alt: currentProduct.title },
              ...currentProduct.additionalImages.map(img => ({ url: img, alt: 'Additional Image' }))
            ]}
          />
        </div>

        {/* Right column: Product Information */}
        <div className={s.metaSection}>
          <h1>{currentProduct.title}</h1>
          <div className={s.tags}>
            {currentProduct.tags.map((tag, index) => (
              <span key={index} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={s.description}>{currentProduct.description}</p>

          <div className={s.productMeta}>
            <p>
              <strong>Category:</strong> {currentProduct.category}
            </p>
            <p>
              <strong>Quantity:</strong> {currentProduct.quantity}
            </p>
            <p>
              <strong>Product listed on:</strong> {currentProduct.listedOn}
            </p>
          </div>
          <button className={s.queryButton} onClick={() => setModalVisible(true)}>
            Send Query
          </button>
        </div>
      </div>
      <SendQueryForm isVisible={isModalVisible} onClose={() => setModalVisible(false)} />

      {/* Bottom Section */}
      <div className={s.additionalSections}>
        <div className={s.section}>
          <h2>Detailed Description</h2>
          <p>{currentProduct.detailedDescription}</p>
        </div>

        <div className={s.section}>
          <h2>Product Specifications</h2>
          <p>{currentProduct.additionalInfo}</p>
        </div>

        <div className={s.section}>
          <h2>Related Products</h2>
          <div className={s.imageGallery}>
            {currentProduct.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
