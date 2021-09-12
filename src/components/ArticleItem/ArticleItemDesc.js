

export default function ArticleItemDesc({ shortDesc }) {

  const innerHTML = {
    __html: shortDesc
  }
  return (
    <div className="article-item__desc" dangerouslySetInnerHTML={innerHTML} ></div>
  )
}