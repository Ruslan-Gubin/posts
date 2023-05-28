import styles from './PostTitle.module.scss';

interface PorsTitleProps {
  title: string
}

const PostTitle = ({ title }: PorsTitleProps) => {

  return (
    <h2 className={styles.post_title}>{title}</h2>
  );
};

export { PostTitle };