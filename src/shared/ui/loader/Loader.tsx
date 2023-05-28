
import styles from './Loader.module.scss';

const loaderIcons = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1683549176/Hits/icons8-plus-64_dwmkhj.png'

const Loader = () => {
  return (
    <div className={styles.root}>
      <picture>
      <img className={styles.loader} src={loaderIcons} alt="loader icon" />
      </picture>
    </div>
  );
};

export { Loader };