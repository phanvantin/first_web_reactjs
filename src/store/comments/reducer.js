import { getDefaultPaging } from "../../components/common/Helpers/paging"
import { 
  ACT_FETCH_PARENT_COMMENTS,
  ACT_FETCH_CHILD_COMMENTS,
  ACT_INIT_CHILD_COMMENT_PAGING,
  ACT_ADD_NEW_PARENT_COMMENT,
  ACT_ADD_NEW_CHILD_COMMENT
} from './actions'

const initState ={
  parentPaging: getDefaultPaging(),
  hashChildPaging: { }
}
let hashKeyParentId = null;

function commentsReducer(commentsState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_PARENT_COMMENTS:
      return {
        ...commentsState,
        parentPaging: {
          ...commentsState.parentPaging,
          list: action.payload.currentPage === 1 
            ? action.payload.comments 
            : [
              ...commentsState.parentPaging.list,
              ...action.payload.comments
            ],
          currentPage: action.payload.currentPage,
          perPage: action.payload.perPage,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages
        }
      }
    case ACT_FETCH_CHILD_COMMENTS:
      hashKeyParentId = 'parent-' + action.payload.parentId 
      return {
        ...commentsState,
        hashChildPaging: {
          ...commentsState.hashChildPaging,
          [hashKeyParentId]: {
            ...commentsState.hashChildPaging[hashKeyParentId],
            list: action.payload.currentPage === 1 
              ? action.payload.comments 
              : [
                ...commentsState.hashChildPaging[hashKeyParentId].list,
                ...action.payload.comments
              ],
            currentPage: action.payload.currentPage,
            perPage: action.payload.perPage,
            totalItems: action.payload.totalItems,
            totalPages: action.payload.totalPages
          }
        }
      }
    case ACT_INIT_CHILD_COMMENT_PAGING:

      let newHashChildPaging = {
        ...commentsState.hashChildPaging
      }

      for (let index = 0; index < action.payload.listParentComments.length; index++) {
        const parentCmt = action.payload.listParentComments[index];
        const parentCmtId = parentCmt.id
        const key = 'parent-' + parentCmtId
        const value = getDefaultPaging()

        if (!newHashChildPaging[key]) {
          newHashChildPaging[key] = value
        }
      }

      return {
        ...commentsState,
        hashChildPaging: newHashChildPaging
      }
    case ACT_ADD_NEW_PARENT_COMMENT:
      return {
        ...commentsState,
        parentPaging: {
          ...commentsState.parentPaging,
          list: [
            ...commentsState.parentPaging.list, 
            action.payload.newComment
          ],
          exclude: [
            ...commentsState.parentPaging.exclude, 
            action.payload.newComment.id
          ],
          totalItems: commentsState.parentPaging.totalItems + 1
        }
      }
    case ACT_ADD_NEW_CHILD_COMMENT:
      hashKeyParentId = 'parent-' + action.payload.parentId
      return {
        ...commentsState,
        // parentPaging: {
        //   ...commentsState.parentPaging,
        //   totalItems: commentsState.parentPaging.totalItems + 1
        // },
        hashChildPaging: {
          ...commentsState.hashChildPaging,
          [hashKeyParentId]: {
            ...commentsState.hashChildPaging[hashKeyParentId],
            list: [
                ...commentsState.hashChildPaging[hashKeyParentId].list,
                action.payload.newComment
              ],
            // exclude: [
            //   ...commentsState.hashChildPaging[hashKeyParentid].exclude, 
            //   action.payload.newComment.id
            // ]
          }
        }
      }
    default:
      return commentsState
  }
}

export default commentsReducer