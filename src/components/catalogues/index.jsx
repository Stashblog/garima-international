import s from './styles.module.scss'

const Catalogues = ({ imageSrc , title }) => {
  return (
    <div className={s.imageCard}>
    <div className={s.imageWrapper}>
      <img src={imageSrc} alt={title} className={s.image} />
    </div>
    <h3 className={s.title}>{title}</h3>
  </div>
  );
}

export default Catalogues;
