import { ButtonRG, iconConstants, myInfo, useNavigationReact } from "../../shared";
import { UserCard } from "../../widgets";
import styles from './About.module.scss';

const About = () => {
  const { goBack } = useNavigationReact()

  return (
  
    <div className={styles.root}>
    <ButtonRG
    className={styles.button}
    color="success"
    handleClick={goBack} 
    children="Назад"
    size="sm"
    />
    <UserCard user={myInfo} userPhoto={iconConstants.myPhoto} />
  </div>
  );
};

export default About;