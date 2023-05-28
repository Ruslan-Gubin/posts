import { useCallback } from "react";

import {
  UserAvatar,
  UserFirstInfo,
  UserMoreInfo,
} from "../../../entities/user";
import { UserModel } from "../../../entities/user/model";
import styles from "./UserCard.module.scss";

const UserCard = ({ user, userPhoto }: { user: UserModel, userPhoto?: string }) => {

  if (!user) {
    return null;
  }

  const userDestructurization = useCallback(() => {
    const { company, address, ...rest } = user;

    if (!address || !company) return;

    const { geo, ...restAddress } = address;

    return {
      company,
      address: restAddress,
      firstInfo: rest,
    };
  }, [user]);

  return (
    <div className={styles.user_card}>
      <div className={styles.user_card__header}>
        <div className={styles.user_card__avatar}>
          <UserAvatar userPhoto={userPhoto} />
        </div>
        <UserFirstInfo user={userDestructurization()?.firstInfo} />
      </div>
      <div>
        <UserMoreInfo
          category="address"
          userInfo={userDestructurization()?.address}
        />
        <UserMoreInfo
          category="company"
          userInfo={userDestructurization()?.company}
        />
      </div>
    </div>
  );
};

export { UserCard };
