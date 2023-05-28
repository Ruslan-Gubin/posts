import { useEffect } from "react";
import { InputRG } from "../../../../shared";
import { usePostFeatureAction } from "../../../post";
import { useLayoutAction, useLayoutSelect } from "../../model";
import { SearchResult } from "../search-result/SearchResult";
import styles from "./LayoutSearch.module.scss";

const LayoutSearch = () => {
  const { setSearchValue, activeSearch, cancelSearch } = useLayoutAction();
  const { searchValue, activeFilter } = useLayoutSelect();
  const { setPage } = usePostFeatureAction();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (searchValue.length === 0) return;
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  useEffect(() => {
    window.document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchValue]);

  const handleClickSearch = () => {
    if (searchValue.length === 0) return;
    activeSearch();
    setPage({ page: 1 });
  };
  const handleCancelInput = () => {
    cancelSearch();
  };

  const handleChangelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickSearchItem = (value: string) => {
    setSearchValue(value);
    handleClickSearch();
  };

  return (
    <div className={styles.input_container}>
      {searchValue.length > 0 && (
        <div onClick={handleCancelInput} className={styles.input_cancel}></div>
      )}
      <InputRG
        variant="search"
        searchClick={handleClickSearch}
        value={searchValue}
        onChange={handleChangelInput}
        placeholder="Поиск"
        className={styles.input_main}
      />
      {searchValue.length > 0 && !activeFilter && (
        <SearchResult
          searchValue={searchValue}
          clickSearchItem={handleClickSearchItem}
        />
      )}
    </div>
  );
};

export default LayoutSearch;
