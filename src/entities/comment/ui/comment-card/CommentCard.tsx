import { CommentText } from '../comment-text/CommentText';
import { CommentTitle } from '../comment-title/CommentTitle'
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  text: string
  email: string;
}

const CommentCard = ({text, email}: CommentCardProps) => {
  return (
    <div className={styles.commetn_card}>
      <CommentTitle  title={email} />
      <CommentText text={text} />
    </div>
  );
};

export { CommentCard };