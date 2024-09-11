import s from './styles.module.scss'
import { head } from 'helpers'
import { useEffect } from 'react'
import images from 'images'
import { Catalogues, Categories, FAQs, Footer, Products } from 'components'
import { Card } from 'components'



export default function Main() {
  useEffect(() => {
    head({ title: 'Home' })
  }, [])

  const pics = [
    { src:images.Type, alt: 'Image 1 description' },
    { src:images.Type1, alt: 'Image 2 description' },
    { src: images.Type2, alt: 'Image 3 description' },
    { src:images.Type3, alt: 'Image 4 description' },
    { src:images.Type4, alt: 'Image 5 description' },
    { src:images.Type5, alt: 'Image 5 description' },
    { src:images.Type6, alt: 'Image 5 description' },
    { src:images.Type7, alt: 'Image 5 description' },
    { src:images.Type8, alt: 'Image 5 description' },
    { src:images.Type9, alt: 'Image 5 description' },
    { src:images.Type10, alt: 'Image 5 description' },
  ];


  return (
    <>
    <div className={s.main}>
      <div className={s.dashboard}>
        <div className={s.content + ' indent'}>
          <div className={s.main}>
          <Card
        title="Garima International"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonLabel="Buy Now"
        buttonLink="/"
      />
          </div>
        </div>
      </div>
    </div>
    <div className={s.topProducts}>
      <div className={s.title}>Top Products</div>
      <div className={s.products}>
        <div className={s.cardGrid}>
        
        <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro1}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />
       <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro2}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />
       <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro3}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />
        <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro4}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />
       <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro5}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />
       <Products
        title="Antiques"
        subtitle="Brass Surahi"
        imageSrc={images.pro6}
        priceCurrent="Rp 30,000"
        priceOld="Rp 60,000"
        discount="-50%"
      />

        
        </div>
      
      </div>
    </div>
    <div className={s.topCatalogues}>
    <div className={s.title}>Top Catalogues</div>
    <div className={s.cardGrid}>
    <Catalogues
    imageSrc={images.Cat}
    title="Home Decor"/>
    
    <Catalogues
    imageSrc={images.Cat2}
    title="Showpiece Pairs"/>

    <Catalogues
    imageSrc={images.Cat3}
    title="Antiques"/>

    <Catalogues
    imageSrc={images.Cat}
    title="Home Decor"/>
    
    <Catalogues
    imageSrc={images.Cat2}
    title="Showpiece Pairs"/>

    <Catalogues
    imageSrc={images.Cat3}
    title="Antiques"/>

    </div>
    
    </div>
   
    <div className={s.categories}>
    <div className={s.title}>Categories</div>
     <Categories images={pics}/>
    </div>
    
   
    <FAQs/>
    <Footer/>
    </>
  )
}
