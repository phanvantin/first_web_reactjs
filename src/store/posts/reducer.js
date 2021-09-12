import { 
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS,
  ACT_FETCH_POST_DETAIL,
  ACT_FETCH_POSTS,
  // ACT_RESET_ARTICLES_PAGING
} from './actions'

function getDefaultPaging() {
  return {
    list: [],
    perPage: 2,
    currentPage: 1,
    totalItems: 0,
    totalPages: 0
  }
}

const initState = {
  articlesLatest: [],
  articlesPopular: [],
  postDetail: null,

  articlesPaging: getDefaultPaging()
}

function postsReducer(postsState = initState, action) {
  switch (action.type) {
    // case ACT_RESET_ARTICLES_PAGING:
    //   return {
    //     ...postsState,
    //     articlesPaging: getDefaultPaging()
    //   }
    case ACT_FETCH_POSTS:
      return {
        ...postsState,
        articlesPaging: {
          ...postsState.articlesPaging,
          // list: [
          //     ...postsState.articlesPaging.list,
          //     ...action.payload.posts
          //   ],
          list: action.payload.currentPage === 1 
            ? action.payload.posts 
            : [
              ...postsState.articlesPaging.list,
              ...action.payload.posts
            ],
          currentPage: action.payload.currentPage,
          perPage: action.payload.perPage,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages
        }
      }
      case ACT_FETCH_POST_DETAIL:
        return {
          ...postsState,
          postDetail: action.payload.post
        }
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...postsState,
        articlesLatest: action.payload.posts
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...postsState,
        articlesPopular: action.payload.posts
      }
      
    default:
      return postsState
  }
}

export default postsReducer