// import './post-detail.css';
import { useEffect, useState } from 'react';
// import Loading from '../components/common/IconLoading'
import Container from '../components/common/reponsive/container'
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostNotFound from "../components/postNotFound"
// import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actFetchPostDetailAsync } from '../store/posts/actions';


function PostDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    dispatch(actFetchPostDetailAsync({ slug }))
      .then(res => {
        if (res.ok) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])

  if (status === 'loading') {
    return (
      <div className="load">
        <div className="load--wait"></div>
      </div>
      // <Container>
      //   <Loading width="100" />
      // </Container>
    )
  }

  if (status === 'error') {
    return (
      <PostNotFound/>
    )
  }

  return (
    <Container wide className="post-detail">
      <div className="spacing" />
      <PostDetailHead />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <Container>
          <div className="post-detail__wrapper">
            <PostDetailContent />

            {/* <PostDetailSidebar /> */}
          </div>
        </Container>
      </div>
    </Container>

  )
}

export default PostDetail