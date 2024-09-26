import s from './styles.module.scss'
import { Categories } from 'components'

export default function Main() {
  return (
    <div className={s.categories + ' indent'}>
      <div className={s.title}>Categories</div>
      <Categories />
    </div>
  )
}
