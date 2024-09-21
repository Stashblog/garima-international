import { useParams } from 'react-router-dom'
import s from './styles.module.scss'
import Carousel from 'components/corousel'
import images from 'images'

const CatalogueDescription = () => {
  const { catalogueId } = useParams()

  const catalogItems = [
    {
      id: 1,
      title: 'Home Decor',
      description: 'Beautiful collection of home decor items to spruce up your living space.',
      roomType: 'Living Room',
      products: [
        {
          id: 1,
          title: 'Showpiece',
          description: 'showpiece item for table and glass cases ',
          imageUrl: images.Type
        },
        {
          id: 2,
          title: 'Showpiece',
          description: 'showpiece item for table and glass cases ',
          imageUrl: images.Type1
        },
        {
          id: 3,
          title: 'Showpiece',
          description: 'showpiece item for table and glass cases ',
          imageUrl: images.Type2
        },
        {
          id: 4,
          title: 'Showpiece',
          description: 'showpiece item for table and glass cases ',
          imageUrl: images.Type3
        }
      ],
      images: [images.Cat, images.Cat2, images.Cat3]
    }
    // other catalogue items...
  ]

  const catalogue = catalogItems.find(item => item.id === parseInt(catalogueId))

  if (!catalogue) {
    return <p>Catalogue not found.</p>
  }

  return (
    <div className={s.catalogueDescriptionPage}>
      <h1 className={s.title}>{catalogue.title}</h1>
      <p className={s.description}>{catalogue.description}</p>

      <Carousel className={s.carousel}>
        {catalogue.images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img src={imageUrl} alt={`Catalogue ${index + 1}`} className={s.carouselImage} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={s.productsContainer}>
        {catalogue.products.map(product => (
          <div key={product.id} className={s.productCard}>
            <img src={product.imageUrl} alt={product.name} className={s.productImage} />
            <div className={s.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogueDescription
