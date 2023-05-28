import { LayoutBurger } from "../../../features";
import LayoutSearch from "../../../features/layout/ui/layout-search/LayoutSearch";
import { useNavigationReact, NAV } from "../../../shared";
import styles from "./LayoutHeader.module.scss";


const LayoutHeader = () => {
  const { pathName } = useNavigationReact();

  return (
    <div className={styles.layout_header}>
      <LayoutBurger />
      { pathName === NAV.MAIN && 
      <LayoutSearch />
      }
    </div>
  );
};

export { LayoutHeader };
