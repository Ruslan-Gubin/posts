import { Avatar, useNavigationReact } from '../../../../shared';
import styles from './PostAvatar.module.scss';

const PostAvatar = ({ userId }: {userId: number}) => {
  const { router,  pathName } = useNavigationReact()

  const handleRoutUser = () => {
    if (pathName.includes('details')) return;

    router('details', userId)
  }

  return (
    <div onClick={handleRoutUser} className={styles.avatar}>
    <Avatar />
    </div>
  );
};

export  {PostAvatar};