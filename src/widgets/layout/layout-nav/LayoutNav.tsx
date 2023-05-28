import { useLayoutAction } from "../../../features";
import { useNavigationReact } from "../../../shared";
import styles from "./LayoutNav.module.scss";

const LayoutNav = () => {
  const { router, pathName } = useNavigationReact();
  const { toggleAside } = useLayoutAction();

  const classesBtn = (patch: string) => {
    return patch === pathName
      ? `${styles.layoyt_nav__btn} ${styles.layoyt_nav__active}`
      : `${styles.layoyt_nav__btn}`;
  };

  const handleClicKLink = (patch: string) => {
    if (pathName === patch) return;
    router(patch)
    toggleAside()
  }

  return (
    <nav className={styles.layoyt_nav}>
      <button className={classesBtn("/")} onClick={() => handleClicKLink("/")}>
        Список постов
      </button>
      <button className={classesBtn("/about")} onClick={() => handleClicKLink("/about")}>
        О бо мне
      </button>
    </nav>
  );
};

export { LayoutNav };
