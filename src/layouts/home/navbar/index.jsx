import { Link } from 'react-router-dom'
import images from 'images'
import s from './styles.module.scss'
import { useEffect, useState } from 'react'

export default function Main({ fullscreen, setFullscreen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  // const [search, setSearch] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id='nav' className={isScrolled ? s.outerNav + ' ' + s.outerNavScrolled : s.outerNav}>
      <nav className={isScrolled ? s.nav + ' ' + s.scrolled : s.nav}>
        <div className={s.left}>
          <Link to='/home'>
            <div className={s.img}>
              <img src={images.Profile} alt='' />
            </div>
            <span>Garima International</span>
          </Link>
        </div>

        <div className={s.right}>
          <NavLinks onClickHandler={() => setFullscreen(false)} />
        </div>

        <div className={s.hamburger + ' material-icons'} onClick={() => setFullscreen(true)}>
          menu
        </div>
      </nav>

      {!!fullscreen && (
        <div className={s.fullscreenMenu}>
          <div className={s.close + ' material-icons'} onClick={() => setFullscreen(false)}>
            close
          </div>
          <NavLinks onClickHandler={() => setFullscreen(false)} />
        </div>
      )}
    </div>
  )
}

const NavLinks = props => (
  <div className={s.navLinks}>
    {navLinks.map(({ name, path }, i) => (
      <Link
        key={i}
        to={path}
        className={window.location.hash.substring(1).startsWith(path) ? s.active : ''}
        target={path === '/signIn' ? '_blank' : ''}
        onClick ={props.onClickHandler}
      >
        <div>{name}</div>
      </Link>
    ))}
  </div>
)

const navLinks = [
  {
    name: 'Home',
    path: '/demo'
  },
  {
    name: 'Products',
    path: '/product'
  },
  {
    name: 'Catalogues',
    path: '/catalogue'
  },
  {
    name: 'About Us',
    path: '/aboutUs'
  },
  {
    name: 'Contact Us',
    path: '/contactUs'
  }
]
