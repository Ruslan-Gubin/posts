import { useLayoutAction, useLayoutSelect } from "../../../features";
import { LayoutNav } from "../layout-nav/LayoutNav";
import { LayoutUser } from "../layout-user/LayoutUser";
import styles from "./LayoutAside.module.scss";

const LayoutAside = () => {
  const { asideStatus } = useLayoutSelect();
  const { toggleAside } = useLayoutAction();

  return (
    <div
      className={
        asideStatus
          ? `${styles.layout_aside} ${styles.open_root}`
          : styles.layout_aside
      }
    >
      <div
        className={
          asideStatus
            ? `${styles.layout_aside__content} ${styles.open_content}`
            : styles.layout_aside__content
        }
      >
        <LayoutUser />
        <LayoutNav />
      </div>
      <div
        onClick={() => toggleAside()}
        className={styles.layout_aside__hadow}
      ></div>
    </div>
  );
};

export { LayoutAside };
