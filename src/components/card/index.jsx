import s from './styles.module.scss'

const Card = ({ title, text,  buttonLabel, buttonLink }) => {
  return (
    <div className={s['custom-card']} style={{ width: '18rem' }}>
      <div className={s['custom-card-body']}>
        <h5 className={s['custom-card-title']}>{title}</h5>
        <p className={s['custom-card-text']}>{text}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

export default Card;
