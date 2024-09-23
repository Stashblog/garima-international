import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import s from './styles.module.scss'
import images from 'images'
const productsData = [
  {
    id: 1,
    title: 'Showpiece 1',
    category: 'Home Decor',
    type: 'product',
    imageUrl: images.Type,
    description: 'Beautiful showpiece for table display.',
    dateAdded: '2023-09-01'
  },
  {
    id: 2,
    title: 'Showpiece 2',
    category: 'Home Decor',
    type: 'product',
    imageUrl: images.Type1,
    description: 'Elegant showpiece for decor.',
    dateAdded: '2023-08-15'
  },
  {
    id: 3,
    title: 'Furniture Item',
    category: 'Furniture',
    type: 'product',
    imageUrl: images.Type2,
    description: 'Stylish furniture piece for any room.',
    dateAdded: '2023-09-05'
  },
  {
    id: 4,
    title: 'Kitchen Item',
    category: 'Kitchen',
    type: 'catalogue',
    imageUrl: images.Type3,
    description: 'Useful kitchen accessory.',
    dateAdded: '2023-08-25'
  },
  {
    id: 5,
    title: 'Lighting Fixture',
    category: 'Lighting',
    type: 'product',
    imageUrl: images.Type4,
    description: 'Charming lighting solution.',
    dateAdded: '2023-07-10'
  }
]
const cataloguesData = [
  {
    id: 1,
    title: 'Home Decor Collection',
    products: [1, 2],
    imageUrl: images.Type
  },
  {
    id: 2,
    title: 'Furniture Essentials',
    products: [3],
    imageUrl: images.Type1
  }
]
export default function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [sortOrder, setSortOrder] = useState('newToOld')
  const [filterType, setFilterType] = useState('all')
  const getProductsAndCatalogues = () => {
    const res = []
    productsData.forEach(product => {
      if (product.category === category && (filterType === 'all' || product.type === filterType)) {
        res.push({ ...product, isCatalogue: false })
      }
    })
    cataloguesData.forEach(catalogue => {
      let catalogueProducts = catalogue.products.map(productId => productsData.find(p => p.id === productId))
      let hasCategoryProducts = catalogueProducts.some(p => p && p.category === category)
      if (hasCategoryProducts) {
        res.push({ ...catalogue, isCatalogue: true })
      }
    })
    return res
  }
  const sortedItems = getProductsAndCatalogues().sort((a, b) => {
    if (sortOrder === 'newToOld') {
      return new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0)
    } else if (sortOrder === 'oldToNew') {
      return new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0)
    } else if (sortOrder === 'aToZ') {
      return a.title.localeCompare(b.title)
    } else if (sortOrder === 'zToA') {
      return b.title.localeCompare(a.title)
    }
    return 0
  })
  const handleSortChange = e => {
    setSortOrder(e.target.value)
  }
  const handleFilterChange = e => {
    setFilterType(e.target.value)
  }
  const handleViewItem = (id, isCatalogue) => {
    if (isCatalogue) {
      navigate(`/catalogue/${id}`)
    } else {
      navigate(`/product/${id}`)
    }
  }
  return (
    <div className={s.categoryPage + ' indent'}>
      <h2 className={s.categoryTitle}>{category}</h2>
      <div className={s.filterSortContainer}>
        <select className={s.filterSelect} onChange={handleFilterChange} value={filterType}>
          <option value='all'>All</option>
          <option value='product'>Products</option>
          <option value='catalogue'>Catalogues</option>
        </select>
        <select className={s.sortSelect} onChange={handleSortChange} value={sortOrder}>
          <option value='newToOld'>New to Old</option>
          <option value='oldToNew'>Old to New</option>
          <option value='aToZ'>A to Z</option>
          <option value='zToA'>Z to A</option>
        </select>
      </div>
      <div className={s.productsList}>
        {sortedItems.length > 0 ? (
          sortedItems.map(item => (
            <div key={item.id} className={s.productItem}>
              <img src={item.imageUrl} alt={item.title} className={s.productImage} />
              <div className={s.overlay}>
                <h3 className={s.productTitle}>{item.title}</h3>
                <button className={s.viewButton} onClick={() => handleViewItem(item.id, item.isCatalogue)}>
                  View Item
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items available in this category.</p>
        )}
      </div>
    </div>
  )
}
