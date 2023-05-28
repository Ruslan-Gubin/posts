import { useEffect } from "react";
import { useUserAction, useUserSelect } from "../../entities";
import { ButtonRG, Loader, useNavigationReact } from "../../shared";
import { UserCard, UserPosts } from "../../widgets";
import styles from "./Details.module.scss";

const Profile = () => {
  const { goBack } = useNavigationReact();
  const { params } = useNavigationReact();
  const { getUser, getUserPosts } = useUserAction();
  const { user, loading, error, posts } = useUserSelect();

  useEffect(() => {
    getUser({ id: Number(params) });
    getUserPosts({ id: Number(params) });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <>
      <div className={styles.root}>
        <ButtonRG
          className={styles.button}
          color="success"
          handleClick={goBack}
          children="Назад"
          size="sm"
        />
        <UserCard user={user} />
        <UserPosts posts={posts} />
      </div>
    </>
  );
};

export default Profile;
