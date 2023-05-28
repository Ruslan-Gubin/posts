import styles from './CommentText.module.scss';

interface PostTextProps {
  text: string
}

const CommentText = ({ text }: PostTextProps) => {

  return (
    <h2 className={styles.post_text}>{text}</h2>
  );
};

export { CommentText };