import s from './styles.module.scss'

const AboutUs = () => {
  return (
    <div className={s.responsiveContainerBlock + ' indent'}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={`${s.responsiveCell} ${s.imgOne}`}>
            <img
              alt='golden-lines'
              className={s.imageBlock}
              src='https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png'
            />
          </div>
          <div className={`${s.responsiveCell} ${s.contentOne}`}>
            <p className={s.sectionHead}>About Us</p>
            <p className={s.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p className={s.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
