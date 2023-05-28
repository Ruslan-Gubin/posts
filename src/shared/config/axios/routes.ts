
export const PostRoute = {
	getPosts: 'posts',
	getPost: (id: number) => `posts/${id}`,
	postComments: (id: number) => `/posts/${id}/comments`,
}

export const CommentsRoute = {
	get: (id: number) => `/comments?postId=${id}`,
}

export const UserRoute = {
	get: (userId: number) => `/users/${userId}`,
	getUserPosts: (userId: number) =>  `/users/${userId}/posts`,
}

