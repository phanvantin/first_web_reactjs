import { useSelector } from "react-redux";
import dayjs from 'dayjs'
import 'dayjs/locale/vi';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('vi');
dayjs.extend(relativeTime);
const DEFAULT_AVATAR = '/img/avatar2.jpg';

function PostCommentSection({ 
  comment, 
  isCommentParent,
  handleToggleShowReplyForm,
}) {
  const currentUser = useSelector(state => state.Auth.currentUser)
  const createdDate = dayjs(comment.date)
  const currentDate = dayjs();
  const relativeTimeStr = createdDate.from(currentDate);

  return (
    <div className="comments__section">
      <div className="comments__section--avatar">
        <a href="/">
          <img src={ comment.author_data.avatar || DEFAULT_AVATAR } alt="" />
        </a>
      </div>
      <div className="comments__section--content">
        <a href="/" className="comments__section--user">{ comment.author_data.nickname }</a>
        <p className="comments__section--time">{relativeTimeStr}</p>
        <div 
          className="comments__section--text" 
          dangerouslySetInnerHTML={{
            __html: comment.content.rendered
          }} 
        />
        { 
        isCommentParent && currentUser
          && <i onClick={handleToggleShowReplyForm} className="ion-reply comments__section--reply"></i> 
        }
      </div>
    </div>
  )
}

export default PostCommentSection;