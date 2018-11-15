const lastPage = ({ total, perPage }) => Math.ceil(total / perPage)

export const getPages = ({ total, perPage, currentPage }) => ({
  first: 1,
  previous: currentPage > 1 ? currentPage - 1 : 1,
  next: currentPage < lastPage({ total, perPage }) ? currentPage + 1 : lastPage({ total, perPage }),
  last: lastPage({ total, perPage })
})
