import { getDefaultPaging } from "../../components/common/Helpers/paging";
import { useCommentsPaging } from "../../hooks/useCommentsPaging";
import PostCommentSection from "./PostCommentSection";
import IconLoading from '../common/IconLoading';
import PostCommentsForm from './PostCommentsForm';
import { useState } from "react";

function PostCommentsItem({ isCommentParent, comment, postDetailId }) {
  const [isShowReplyForm, setIsShowReplyForm] = useState(false)
  const parentId = comment.id
  
  const commentsChildPaging = useCommentsPaging({
    extraParams: {
      postId: postDetailId,
      parentId: parentId
    },
    fnSelector: (state) => {
      const found = state.Comments.hashChildPaging['parent-' + parentId]

      if (!found) {
        return getDefaultPaging()
      }

      return found
    }
  })

  function handleToggleShowReplyForm() {
    setIsShowReplyForm(!isShowReplyForm)
  }
  
  const isLoading = commentsChildPaging.isLoading
  const replyCount = comment.comment_reply_count
  const commentsChild = commentsChildPaging.comments
  const remainingReplyCount = replyCount - commentsChild.length
  
  return (
    <li className="item">
      <PostCommentSection 
        comment={comment} 
        isCommentParent={isCommentParent} 
        handleToggleShowReplyForm={handleToggleShowReplyForm} 
      />
      {/*  */}
      {
        remainingReplyCount > 0 && (
          <div className="comments__hidden">
            {/* <div className="load--wait"></div> */}
            <a href="/" onClick={commentsChildPaging.handleLoadMore}>
              { isLoading ? <IconLoading width="1em" /> : <i className="icons ion-ios-undo"></i> } 
              {/* { isLoading && <div className="load--wait"></div>} */}
              Xem thêm {remainingReplyCount} câu trả lời
            </a>
          </div>
        )
      }
      {/* Reply Comments */}
      {
        isCommentParent && commentsChild.length > 0 && (
          <ul className="comments">
            {
              commentsChild.map(comment => {
                return <PostCommentsItem key={comment.id} isCommentParent={false} comment={comment} />
              })
            }
          </ul>
        )
      }

      { 
        isCommentParent 
          && isShowReplyForm 
          && <PostCommentsForm btnLabel="Trả lời" parentId={comment.id} postId={postDetailId} /> 
      }
    </li>
  )
}

export default PostCommentsItem