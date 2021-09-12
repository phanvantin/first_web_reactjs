import { DEFAULT_PER_PAGE } from "../../components/common/Helpers/paging"
import { CommentsService } from "../../services/comments"
// import { actIncreaseCommentCount } from "../posts/actions"

/**
 * Action Types
 */
export const ACT_FETCH_PARENT_COMMENTS = 'ACT_FETCH_PARENT_COMMENTS'
export const ACT_FETCH_CHILD_COMMENTS = 'ACT_FETCH_CHILD_COMMENTS'
export const ACT_INIT_CHILD_COMMENT_PAGING = 'ACT_INIT_CHILD_COMMENT_PAGING'
export const ACT_ADD_NEW_PARENT_COMMENT = 'ACT_ADD_NEW_PARENT_COMMENT'
export const ACT_ADD_NEW_CHILD_COMMENT = 'ACT_ADD_NEW_CHILD_COMMENT'

/**
 * Action Creator
 */

export function actFetchComments({
  comments,
  perPage,
  currentPage,
  totalItems,
  totalPages,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_FETCH_PARENT_COMMENTS : ACT_FETCH_CHILD_COMMENTS,
    payload: { 
      comments,
      perPage,
      currentPage,
      totalItems,
      totalPages,
      parentId
    }
  }
}

export function actInitChildCommentPaging(listParentComments) {
  return {
    type: ACT_INIT_CHILD_COMMENT_PAGING,
    payload: { listParentComments }
  }
}

export function actPostNewComment({
  newComment,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_ADD_NEW_PARENT_COMMENT : ACT_ADD_NEW_CHILD_COMMENT,
    payload: {
      newComment,
      parentId
    }
  }
}

/**
 * Action Async
 */

export function actFetchCommentsAsync({
  currentPage = 1,
  perPage = DEFAULT_PER_PAGE,
  postId,
  parentId,
  ...restParams // exlucde
}) {
  return async dispatch => {
    try {
      const response = await CommentsService.getList({
        per_page: perPage,
        page: currentPage,
        post: postId,
        parent: parentId,
        ...restParams
      })

      const comments = response.data
      const totalItems = Number(response.headers['x-wp-total'])
      const totalPages = Number(response.headers['x-wp-totalpages'])
      
      dispatch(actFetchComments({
        currentPage,
        perPage,
        comments,
        totalItems,
        totalPages,
        parentId
      }))

      if (parentId === 0) {
        dispatch(actInitChildCommentPaging(comments))
      }

    } catch (err) {

    }
  }
}

export function actPostNewCommentAsync({
  authorId,
  content,
  postId,
  parentId = 0
}) {
  return async dispatch => {
    try {
      const response = await CommentsService.postNewComment({
        authorId,
        content,
        postId,
        parentId
      })
      const newComment = response.data
      
      dispatch(actPostNewComment({ newComment, parentId }))
      // dispatch(actIncreaseCommentCount())

    } catch(err) {
      return {
        ok: false
      }
    }
  }
}