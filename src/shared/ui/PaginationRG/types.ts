interface PaginationRGProps {
  totalCount: number;
  countPerPage: number;
  currentPage: number;
  clickNumber: (value: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  className?: string;
  color?: "primary" | "warning" | "danger" | "info" | "success";
}

export type { PaginationRGProps };
