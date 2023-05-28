import { FC, useState } from "react";
import {
  CommentCard,
  useCommentAction,
  useCommentSelector,
} from "../../../../entities";
import { ButtonRG } from "../../../../shared";
import styles from "./ShowComments.module.scss";

interface ShowCommentsProps {
  userId: number;
}

const ShowComments: FC<ShowCommentsProps> = ({ userId }) => {
  const [btnState, setBtnState] = useState<{ status: boolean; text: string }>({
    status: false,
    text: "Показать комментарии",
  });
  const { getComments } = useCommentAction();
  const { comment } = useCommentSelector();

  const handleClickButton = () => {
    if (btnState.status) {
      setBtnState(() => ({ status: false, text: "Показать комментарии" }));
      return;
    }

    setBtnState(() => ({ status: true, text: "Скрыть комментарии" }));

    if (userId in comment) return;
    getComments(userId);
  };

  return (
    <div id='show-comments' className={styles.show_comment}>
      <ButtonRG
        className={styles.show_comment__button}
        size="sm"
        handleClick={handleClickButton}
        children={btnState.text}
        color={btnState.status ? 'primary' : "success"}
      />
      {btnState.status && (
        <ul className={styles.comments_container}>
          {comment[userId] &&
            comment[userId].map((comment) => (
              <CommentCard
                key={comment.id}
                email={comment.email}
                text={comment.body}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export { ShowComments };
