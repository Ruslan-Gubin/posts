import styles from './PostText.module.scss';

interface PostTextProps {
  text: string
}

const PostText = ({ text }: PostTextProps) => {

  return (
    <h2 className={styles.post_text}>{text}</h2>
  );
};

export { PostText };