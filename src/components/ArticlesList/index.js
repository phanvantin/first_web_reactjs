import ArticleItem from '../ArticleItem';
import Col from '../common/reponsive/col';
import Row from '../common/reponsive/row';
import Container from '../common/reponsive/container';
import MainTitle from '../common/MainTitle';
import { usePostsPaging } from '../../hooks/usePostsPaging'

export default function ArticlesList() {
  const data = usePostsPaging()
  const posts = data.posts
  const renderButtonLoadmore = data.renderButtonLoadmore

  return (
    <div className="articles-list section">
      <Container wide>
        <MainTitle>Danh sách bài viết</MainTitle>

        <Row>
          {
            posts.map(post => {
              return (
                <Col className="post-article" l={6} key={post.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} isShowDesc isShowCategoies post={post} />
                </Col>
              )
            })
          }
        </Row>

        { renderButtonLoadmore() }
      </Container>
    </div>
  )
}

/** 
 * 

Khi User click vào Button Tải Thêm 
  -> Gọi API thêm một nữa

  -> Số phần tử trong mỗi trang: 2
  -> Trang hiện tại đang hiển thị là bao nhiêu: 1
  -> Tổng số phần tử có trong Database: Nhờ Back End trả về cho chúng ta

  Giả sử trong Database chỉ có 5 bài
  Mà mỗi lần hiển thị in ra 2 bài
    2 - 2 - 1


2 cách xây dựng Pagination
  - Cách 1: Phân trang phía Server  -----
  - Cách 2; Phân trang phía Client (Front End)

*/