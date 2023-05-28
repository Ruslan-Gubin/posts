import { PostPagination } from "../../features";
import { PostList } from "../../features";

import styles from './Home.module.scss';

const Home = () => {

  
  return (
    <section className={styles.home_wrapper}>
    <PostList />
    <PostPagination />
    </section>
  );
};

export default Home;