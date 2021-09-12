import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getAvatar } from "../../components/common/Helpers/avatar"
import { useState } from 'react'
import Button from '../common/Button'
import { actPostNewCommentAsync } from '../../store/comments/actions'

export default function PostCommentsForm({
  btnLabel = 'Đăng bình luận',
  postId,
  parentId,
}) {
  const dispatch = useDispatch()
  const [commentStr, setCommentStr] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const currentUser = useSelector(state => state.Auth.currentUser)

  if (!currentUser) {
    return null
  }

  const userId = currentUser.id
  const originalAvatar = currentUser.simple_local_avatar ? currentUser.simple_local_avatar.full : ''
  const avatar = getAvatar(originalAvatar, userId)
  const userLink = '/user/' + userId

  function onChange(evt) {
    setCommentStr(evt.target.value)
  }

  function handleSubmitForm() {
    if (!commentStr.trim() || isLoading) return

    setIsLoading(true)
    dispatch(actPostNewCommentAsync({
      authorId: userId,
      parentId: parentId,
      postId: postId,
      content: commentStr
    }))
      .then(res => {
        setCommentStr('')
        setIsLoading(false)
      })
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <Link to={userLink}>
            <img src={avatar} alt="" />
          </Link>
        </div>
        <textarea value={commentStr} onChange={onChange} />
      </div>
      <div className="text-right">
        <Button className='btn-default' isLoading={isLoading} onClick={handleSubmitForm}>{ btnLabel }</Button>
      </div>
    </div>
  )
}