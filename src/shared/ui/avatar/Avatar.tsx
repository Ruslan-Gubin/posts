import styles from "./Avatar.module.scss";

const Avatar = ({ userPhoto }: { userPhoto?: string }) => {

  return (
    <>
    {userPhoto ? 
    <picture>
    <img className={styles.user_photo} src={userPhoto} alt="user photo" />
    </picture>
    :
    <div className={styles.avatar}></div>
    }
    </>
  )
};

export { Avatar };
