import styles from './CommentTitle.module.scss';

interface PorsTitleProps {
  title: string
}

const CommentTitle = ({ title }: PorsTitleProps) => {

  return (
    <h2 className={styles.post_title}>{title}</h2>
  );
};

export { CommentTitle };