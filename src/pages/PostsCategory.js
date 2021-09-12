import MainTitle from "../components/common/MainTitle"
import ArticleItem from "../components/ArticleItem"
import Row from "../components/common/reponsive/row"
import Col from "../components/common/reponsive/col"
import Container from "../components/common/reponsive/container"
// import Loading from "../components/common/IconLoading"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
// import Button from "../components/common/Button"
import { actFetchCategoryBySlugAsync } from "../store/categories/actions"
import { actFetchPostsAsync } from "../store/posts/actions"
import { usePostsPaging } from "../hooks/usePostsPaging"
import PostNotFound from "../components/postNotFound"

export default function PostsCategory() {
  const params = useParams()
  const [status, setStatus] = useState('loading')
  const [category, setCategory] = useState(null)
  const dispatch = useDispatch()
  const slug = params.slug

  useEffect(() => {
    dispatch(actFetchCategoryBySlugAsync(slug))
      .then(res => {
        if (res.ok) {
          setCategory(res.data)
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])

  useEffect(() => {
    if (category) {
      dispatch(actFetchPostsAsync({
        currentPage: 1,
        categories: [category.id]
      }))
        .then(res => {
          setStatus('success')
        })
    }
  }, [category, dispatch])
  
  const data = usePostsPaging({
    extraParams: {
      categories: category ? [category.id] : []
    }
  })
  const posts = data.posts
  const totalItems = data.totalItems
  const renderButtonLoadmore = data.renderButtonLoadmore

  if (status === 'error') {
    return (
      <PostNotFound/>
    )
  }

  if (status === 'loading') {
    return (
      <div className="load">
        <div className="load--wait"></div>
      </div>
      // <Container>
      //   <Row>
      //     <Col l={12}>
      //       <Loading width={150} />
      //     </Col>
      //   </Row>
      // </Container>
    )
  }

  return (
    <Container wide className="articles-list section">
      <div className="tcl-container">
      
        <MainTitle isSearch>{ totalItems } kết quả tìm kiếm với danh mục "{ category.name }"</MainTitle>
        
        <Row className="tcl-jc-center">
          {
            posts.map(post => {
              return (
                <Col l={6} key={post.id}>
                  <ArticleItem isStyleCard isShowDesc={true} isShowCategoies post={post} />
                </Col>
              )
            })
          }
        </Row>

        { renderButtonLoadmore() }
      </div>
    </Container>

  )
}