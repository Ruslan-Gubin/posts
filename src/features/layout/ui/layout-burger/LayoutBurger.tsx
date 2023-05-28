import { useCallback } from "react";
import { useLayoutAction } from "../../model";
import styles from "./LayoutBurger.module.scss";

const LayoutBurger = () => {
  const { toggleAside } = useLayoutAction()

  const handleToggleAside = useCallback(() => {
    toggleAside()
  },[])

  return (
    <div onClick={handleToggleAside} className={styles.layout_burger}>
      <div className={styles.layout_burger__content}></div>
    </div>
  );
};

export { LayoutBurger };
