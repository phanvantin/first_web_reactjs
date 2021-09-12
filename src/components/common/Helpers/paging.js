
export const DEFAULT_PER_PAGE = 5

export function getDefaultPaging() {
  return {
    list: [],
    perPage: DEFAULT_PER_PAGE,
    currentPage: 0,
    totalItems: 0,
    totalPages: 0,
    exclude: []
  }
}