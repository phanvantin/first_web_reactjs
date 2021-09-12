
import ArticlesList from '../components/ArticlesList';

import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { 
  actFetchLatestPostsAsync, 
  actFetchPopularPostsAsync, 
  actFetchPostsAsync
} from '../store/posts/actions';

export default function Blogs() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchLatestPostsAsync())
    dispatch(actFetchPopularPostsAsync())
    dispatch(actFetchPostsAsync()) // Lấy trang 1
  }, [dispatch])

  return (
    <>
      <ArticlesList />
    </>
  )
}