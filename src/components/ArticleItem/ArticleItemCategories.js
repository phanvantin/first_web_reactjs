import { Link } from 'react-router-dom';

import { useSelector } from "react-redux"

export default function ArticleItemCategories({ categoriesId }) {
  const hashCategoryById = useSelector(state => state.Categories.hashCategoryById)

  return (
    <ul className="article-item__categories">
      {
        categoriesId.map(cateId => {
          const category = hashCategoryById['category-' + cateId]

          if (!category) {
            return null
          }

          const slug = category.slug
          const slugLink = '/category/' + slug

          return <li key={cateId}><Link to={slugLink} className="btn btn-category">{ category.name }</Link></li>
        })
      }
    </ul>
  )
}