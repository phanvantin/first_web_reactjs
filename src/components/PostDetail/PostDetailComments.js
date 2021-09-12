import PostCommentsForm from './PostCommentsForm'
import PostCommentsItem from './PostCommentsItem'
import { useSelector } from 'react-redux'
import { useCommentsPaging } from '../../hooks/useCommentsPaging'
import IconError from '../common/iconError/iconErr';
import Modal from '../common/Modal/Modal'
// import { Link } from 'react-router-dom'
import './postDetail.css'
import { useState } from 'react'
import { useCallback } from 'react'

export default function PostDetailComments() {
  const currentUser = useSelector(state => state.Auth.currentUser)
  const postDetail = useSelector(state => state.Posts.postDetail)

  const postDetailId = postDetail.id

  const { comments, totalItems, renderButtonLoadmore} = useCommentsPaging({
    extraParams: {
      postId: postDetailId,
      parentId: 0
    }
  })
  const [isVisible, setIsvisible] = useState(false);
  const onCancle = useCallback(
    () => {
      setIsvisible(false);
    },[]
  ) 
  let injectedProps = {
    isVisible,
    isHeader: true, 
    onCancle,
    title: 
    <IconError color="yellow" width={32} height={32}/>,
    renderFooter: ()=> {
      return (
        <div className="footer-btn">
            <button className ="footer-btn1" onClick={onCancle}>
            <div className = "btn">Trở lại</div>
            </button>
        </div>
      )
    }
    }

  return (
    <div className="post-detail__comments">
      <PostCommentsForm parentId={0} postId={postDetailId} />
      { !currentUser && <p>Vui lòng <span className="dang-nhap" onClick={()=>setIsvisible(true)}>đăng nhập</span> để bình luận bài viết này!</p> }
      <p>{ totalItems } Comments</p>
      {/* <p>{ totalItems + exclude.length } Comments</p> */}
      <Modal {...injectedProps}>
          <p className="text-modal">
          Deploy lên sever bị lỗi login,register tạm thời chưa fix được.
          </p>
      </Modal>
      <ul className="comments">
        {
          comments.map(comment => {
            return (
              <PostCommentsItem 
                isCommentParent={true} 
                key={comment.id} 
                comment={comment}
                postDetailId={postDetailId}
              />
            )
          })
        }
      </ul>

      { renderButtonLoadmore() }
    </div>

  )
}