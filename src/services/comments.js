import api from './api'

export const CommentsService = {
  getList({
    per_page = 4,
    page = 1,
    post,
    parent,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
        lang: "vi",
        ...restParams
      }
    })
  },
  postNewComment({
    authorId,
    content,
    postId,
    parentId = 0
  }) {
    return api.callWithToken().post('/wp/v2/comments', {
      author: authorId,
      content,
      post: postId,
      parent: parentId
    })
  }
} 

// UI ->  Tạo Service -> Store đẻ tạo Action Async -> Action -> Reducer -> UI
