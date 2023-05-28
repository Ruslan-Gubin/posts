import { PaginationRG } from '../../../../shared';
import { usePostFeatureAction, usePostFeatureSelect } from '../../model';

const PostPagination = () => {
const { page, perPage, totalPosts } = usePostFeatureSelect()
const { setPage } = usePostFeatureAction()

if (totalPosts <= 5) {
  return null
}

  return (
    <PaginationRG
    totalCount={totalPosts}
    clickNumber={(page) => setPage({page})}
    countPerPage={perPage}
    currentPage={page}
    nextPage={() => setPage({page: page + 1})}
    prevPage={() => setPage({page: page - 1})}
    />
  );
};

export {PostPagination};