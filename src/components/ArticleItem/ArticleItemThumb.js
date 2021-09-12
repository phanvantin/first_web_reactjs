// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({ thumbnail, postURL }) {
  return (
    <div className="article-item__thumbnail">
      <a href={postURL}>
        <img src={thumbnail} alt="/images/arr_img1.jpg" />
      </a>
    </div>
  )
}