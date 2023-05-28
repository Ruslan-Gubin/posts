import { useCallback, useEffect } from "react";
import {  PostModel, usePostAction, usePostSelect } from "../../../../entities";
import { Loader } from "../../../../shared";
import { PostCard } from "../../../../widgets/post";
import { useLayoutSelect } from "../../../layout";
import { filterPostsSearch, getPostsFromPage } from "../../libs";
import { usePostFeatureAction, usePostFeatureSelect } from "../../model";

import styles from './PostList.module.scss';


const PostList = () => {
  const { getPosts } = usePostAction()
  const { posts, loading, error } = usePostSelect()
  const { page, perPage } = usePostFeatureSelect()
  const { searchValue, activeFilter } = useLayoutSelect();
  const { setTotalPosts } = usePostFeatureAction()

  useEffect(() => {
    if (posts.length !== 0) return;
     getPosts()
  }, []) 

  
  const filterPosts = useCallback((postsArr: PostModel[]): {count: number, posts: PostModel[]}  => {
    let postsFilter: PostModel[] = postsArr
    let totalCountPost = postsArr.length 
    
    if (activeFilter) {
      postsFilter = filterPostsSearch(postsArr, searchValue)
      totalCountPost = postsFilter.length
    } 
  
    return {
      posts: getPostsFromPage(postsFilter, page, perPage),
      count: totalCountPost,
    } 
  },[ page, perPage, activeFilter, searchValue])
  
  useEffect(() => {
   setTotalPosts({total: filterPosts(posts).count})
  }, [filterPosts, posts])

  return (
    <>
    {error && <div>Error: {error}</div>}
    {loading && <Loader/>}
    <ul className={styles.post_list}>
    { posts.length > 0 &&  filterPosts(posts).posts.map(post => 
     <PostCard 
     key={post.id} 
     text={post.body} 
     title={post.title} 
     userId={post.userId}
     />
     )}
    </ul>
     </>
  );
};

export { PostList };