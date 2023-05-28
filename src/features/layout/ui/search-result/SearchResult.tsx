import { FC } from "react";
import { usePostSelect } from "../../../../entities";
import styles from "./SearchResult.module.scss";

interface SearchResultProps {
  searchValue: string;
  clickSearchItem: (value: string) => void;
}

const SearchResult: FC<SearchResultProps> = ({
  searchValue,
  clickSearchItem,
}) => {
  const { posts } = usePostSelect();

  const searchPostsList = () => {
    return posts.filter((post) => post.title.includes(searchValue));
  };
console.log('object')
  return (
    <ul className={styles.search}>
      {searchPostsList().map((post) => (
        <li
          onClick={() => clickSearchItem(post.title)}
          key={post.id}
          className={styles.search_item}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export { SearchResult };
