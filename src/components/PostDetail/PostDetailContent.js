import PostDetailComments from "./PostDetailComments";
import PostDetailTags from "./PostDetailTags";
import { useSelector } from "react-redux";
import './postDetail.css'

function PostDetailContent() {
  // const slug = useSelector(state => state.Posts.currentPostSlug);
  const post = useSelector(state => state.Posts.postDetail);
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={post.featured_media_url} alt={post.title.rendered} />
      </div>
      <div className="content-padding">
        
        <div className="rte" dangerouslySetInnerHTML={{
          __html: post.content.rendered
        }} />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  )
}

export default PostDetailContent;