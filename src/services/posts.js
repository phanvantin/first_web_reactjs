import api from './api'

export const PostsService = {
  getList({
    per_page = 4,
    page = 1,
    orderby = "date",
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/posts', {
      params: {
        per_page,
        page,
        orderby,
        lang: "vi",
        ...restParams
      }
    })
  },
  getLatestList() {
    return PostsService.getList({
      per_page: 3
    })
  },
  getPopularList() {
    return PostsService.getList({
      per_page: 3,
      orderby: "post_views"
    })
  }
} 

// UI ->  Tạo Service -> Store đẻ tạo Action Async -> Action -> Reducer -> UI
