
export const getPostsFromPage = <T>(arr: T[], page: number, perPage: number): T[] => {
  const firstPost = (page - 1) * perPage 
  const lastPost = page * perPage 
  return arr.slice(firstPost, lastPost)
}

export const filterPostsSearch = <T extends { title: string }>(arr: T[], searchValue: string): T[] => {
  return arr.filter(post => post.title.includes(searchValue))
}