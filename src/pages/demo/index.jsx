import s from './styles.module.scss'
import { head } from 'helpers'
import { useEffect } from 'react'
import Homepage from './homepage'
import TopProducts from './topProducts'
import TopCatalogues from './topCatalogues'
import Category from './category'
import { FAQs } from 'components'
import NewArrivals from './newArrivals'

export default function Main() {
  useEffect(() => {
    head({ title: 'Home' })
  }, [])

  return (
    <>
      <div className={s.main}>
        <div className={s.dashboard}>
          <div className={s.content + ' indent'}>
            <Homepage />
          </div>
        </div>
      </div>
      <TopProducts />
      <TopCatalogues />
      <NewArrivals />
      <Category />
      <FAQs />
    </>
  )
}
