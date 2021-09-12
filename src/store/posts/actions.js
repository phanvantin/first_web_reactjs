import { PostsService } from '../../services/posts'
import { actFetchCommentsAsync } from '../comments/actions'

/**
 * Action Types
 */
export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS'
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS'
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL'
export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS'
// export const ACT_RESET_ARTICLES_PAGING = 'ACT_RESET_ARTICLES_PAGING'


/**
 * Action Creator
 */
// export function actResetArticlesPaging() {
//   return { type: ACT_RESET_ARTICLES_PAGING }
// }
export function actFetchLatestPosts({ posts }) {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: { posts }
  }
}
export function actFetchPopularPosts({ posts }) {
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: { posts }
  }
}
export function actFetchPost({
  posts,
  perPage,
  currentPage,
  totalItems,
  totalPages
}) {
  return {
    type: ACT_FETCH_POSTS,
    payload: { 
      posts,
      perPage,
      currentPage,
      totalItems,
      totalPages
    }
  }
}

export function actFetchPostDetail({ post }) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: { post }
  }
}
/**
 * Action Async
 */

export function actFetchLatestPostsAsync() {
  return function(dispatch) {
    return PostsService
      .getLatestList()
      .then(res => {
        dispatch(actFetchLatestPosts({ posts: res.data }))
      })
      .catch(err => {
        console.log('[actFetchLatestPosts]', err)
      })
  }
}

export function actFetchPopularPostsAsync() {
  return function(dispatch) {
    return PostsService
      .getPopularList()
      .then(res => {
        dispatch(actFetchPopularPosts({ posts: res.data }))
      })
      .catch(err => {
        console.log('[actFetchPopularPosts]', err)
      })
  }
}

export function actFetchPostsAsync({
  currentPage = 1,
  perPage = 2,
  ...restParams
} = {}) {
  return dispatch => {
    return PostsService
      .getList({
        page: currentPage,
        per_page: perPage,
        ...restParams
      })
      .then(res => {
        const posts = res.data
        const totalItems = Number(res.headers['x-wp-total'])
        const totalPages = Number(res.headers['x-wp-totalpages'])

        dispatch(actFetchPost({
          currentPage,
          perPage,
          posts,
          totalItems,
          totalPages
        }))
      })
      .catch(err => {
        console.log('[actFetchPostsAsync]', err)
      })
  }
}

export function actFetchPostDetailAsync({ slug }) {
  return async dispatch => {
    try {
      const response = await PostsService.getList({ slug })
      const post = response.data[0]

      if (!post) {
        throw new Error('Post Not Found')
      }

      const postId = post.id
      // const authorId = post.author

      dispatch(actFetchPostDetail({ post }));
      // await dispatch(actFetchRelatedPostsByAuthorIdAsync(authorId))
      await dispatch(actFetchCommentsAsync({
        postId,
        parentId: 0
      }))

      return {
        ok: true
      }

    } catch(err) {
      return {
        ok: false
      }
    }
  }
}