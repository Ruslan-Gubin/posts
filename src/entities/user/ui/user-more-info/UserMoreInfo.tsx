import { FC, useState } from "react";
import { IAddress, UserCompany } from "../../model";
import styles from "./UserMoreInfo.module.scss";

interface UserMoreInfoProps {
  category: "address" | "company";
  userInfo: UserCompany | IAddress | undefined;
}

const UserMoreInfo: FC<UserMoreInfoProps> = ({ category, userInfo }) => {
  const [activeInfo, setActiveInfo] = useState<boolean>(false);

  if (!userInfo) {
    return null;
  }

  const handleOpenInfo = () => {
    setActiveInfo((prev) => !prev);
  };

  return (
    <div onClick={handleOpenInfo} className={styles.root}>
      <div
        className={activeInfo ? `${styles.bird} ${styles.open}` : styles.bird}
      ></div>
      <h2 className={styles.title}> {category}</h2>
      {activeInfo && (
        <ul className={styles.info_container}>
          {Object.entries(userInfo).map((info) => (
            <li className={styles.info_field} key={info[0]}>
              {info[0]}: {info[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { UserMoreInfo };
