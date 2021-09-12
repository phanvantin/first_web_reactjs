// import { Link } from 'react-router-dom';

export default function ArticleItemTitle({ title, postURL }) {
  return (
    <h2 className="article-item__title">
      <a href={postURL}>{ title }</a>
    </h2>
  )
}