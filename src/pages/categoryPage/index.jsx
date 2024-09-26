import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import images from 'images'
import { catalogues, products } from 'data'
import { head } from 'helpers'

const filter = [
  { value: 'all', name: 'All' },
  { value: 'product', name: 'Products' },
  { value: 'catalogue', name: 'Catalogues' }
]

const sortFilter = [
  { value: 'newToOld', name: 'New to Old' },
  { value: 'oldToNew', name: 'Old to New' },
  { value: 'aToZ', name: 'A to Z' },
  { value: 'zToA', name: 'Z to A' }
]

export default function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [sortOrder, setSortOrder] = useState('newToOld')
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    head({ title: category })
  }, [category])

  const getProductsAndCatalogues = () => {
    const res = []

    products.forEach(product => {
      if (product.category === category && (filterType === 'all' || filterType === 'product')) {
        res.push({ ...product, isCatalogue: false })
      }
    })

    catalogues.forEach(catalogue => {
      let catalogueProducts = catalogue.products.map(productId => products.find(p => p.id === productId))
      let hasCategoryProducts = catalogueProducts.some(p => p && p.category === category)
      if (hasCategoryProducts) {
        res.push({ ...catalogue, isCatalogue: true })
      }
    })

    return res
  }

  const sortedItems = getProductsAndCatalogues().sort((a, b) => {
    if (sortOrder === 'newToOld') return new Date(b.listedOn || 0) - new Date(a.listedOn || 0)
    else if (sortOrder === 'oldToNew') return new Date(a.listedOn || 0) - new Date(b.listedOn || 0)
    else if (sortOrder === 'aToZ') return a.title.localeCompare(b.title)
    else if (sortOrder === 'zToA') return b.title.localeCompare(a.title)
    return 0
  })

  const handleSortChange = e => {
    setSortOrder(e.target.value)
  }

  const handleFilterChange = e => {
    setFilterType(e.target.value)
  }

  const handleViewItem = (id, isCatalogue) => {
    if (isCatalogue) navigate(`/catalogue/${id}`)
    else navigate(`/product/${id}`)
  }

  return (
    <div className={s.categoryPage + ' indent'}>
      <h2 className={s.categoryTitle}>{category}</h2>
      <div className={s.filterSortContainer}>
        <select className={s.filterSelect} onChange={handleFilterChange} value={filterType}>
          {filter.map((x, i) => (
            <option value={x.value} key={i}>
              {x.name}
            </option>
          ))}
        </select>
        <select className={s.sortSelect} onChange={handleSortChange} value={sortOrder}>
          {sortFilter.map((x, i) => (
            <option value={x.value} key={i}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div className={s.productsList}>
        {sortedItems.length ? (
          sortedItems.map(item => (
            <div key={item.id} className={s.productItem}>
              <img
                src={images[item.isCatalogue ? item.imageSrc : item.imageUrl]}
                alt={item.title}
                className={s.productImage}
              />
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
