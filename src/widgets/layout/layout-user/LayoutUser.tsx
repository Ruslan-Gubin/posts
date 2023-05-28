import { iconConstants } from "../../../shared/constants";
import styles from "./LayoutUser.module.scss";



const LayoutUser = () => {
  return (
    <div className={styles.aside_user}>
      <img
        className={styles.aside_user__photo}
        src={iconConstants.myPhoto}
        alt="my photo"
        />
      <div className={styles.aside_user__description}>
      <p className={styles.aside_user__name}>Руслан</p>
      <span className={styles.aside_user__email}>
        gubin_ruslan@rambler.ru
      </span>
      </div>
    </div>
  );
};

export { LayoutUser };
