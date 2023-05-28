import { memo } from "react";
import { PostAvatar, PostText, PostTitle } from "../../../entities";
import { ShowComments } from "../../../features";
import styles from "./PostCard.module.scss";

interface PostCardPropst {
  title: string;
  text: string;
  userId: number;
}

const PostCard = memo(({ title, text, userId }: PostCardPropst) => {

  return (
    <div className={styles.post_card}>
      <PostTitle title={title} />
      <div className={styles.post_card__content}>
      <PostAvatar userId={userId} />
      <PostText text={text} />
      </div>
      <ShowComments userId={userId} />
    </div>
  );

});

export { PostCard };
