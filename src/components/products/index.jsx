import s from './styles.module.scss' // Import SCSS module

const Products = ({ title, description, imageSrc }) => {
  return (
    <div className={s.productCard}>
      <img src={imageSrc} alt={title} />
      <div className={s.productInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={s.overlay}>
        <button className={s.queryButton}>View Product</button>
      </div>
    </div>
  )
}

export default Products
