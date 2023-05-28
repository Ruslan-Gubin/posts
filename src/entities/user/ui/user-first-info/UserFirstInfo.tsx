import { UserFirstInfo } from "../../model";
import styles from "./UserFirstInfo.module.scss";

interface UserFirstInfoProps {
  user: UserFirstInfo | undefined;
}

const UserFirstInfo = ({ user }: UserFirstInfoProps) => {
  if (!user) {
    return null;
  }

  return (
    <ul className={styles.info}>
      {Object.entries(user).map((info, ind) => (
        <li
          key={ind}
          className={
            info[0] === "id"
              ? `${styles.info_field} ${styles.info_field__none}`
              : styles.info_field
          }
        >
          {info[0]}: {info[1]}
        </li>
      ))}
    </ul>
  );
};

export { UserFirstInfo };
