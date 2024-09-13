import { Card } from 'components'
import s from './styles.module.scss'


const Homepage = () => {
  return (
    <>
    <div className={s.main}>
    <div className={s.dashboard}>
      <div className={s.content + ' indent'}>
        <div className="front">
          <Card
            title='Garima International'
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonLabel='Buy Now'
            buttonLink='/'
          />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Homepage