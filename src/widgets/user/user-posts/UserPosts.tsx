import { PostModel } from "../../../entities";
import { PostCard } from "../../post";

import styles from './UserPosts.module.scss';

const UserPosts = ({ posts }: { posts: PostModel[] }) => {

  if (!posts) {
    return null;
  }

  return (
    <ul className={styles.post_list}>
    { posts.length > 0 &&  posts.map(post => 
     <PostCard 
     key={post.id} 
     text={post.body} 
     title={post.title} 
     userId={post.userId}
     />
     )}
    </ul>
  );
};

export  {UserPosts};