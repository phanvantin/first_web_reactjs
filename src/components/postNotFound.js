import Row from "./common/reponsive/row"
import Col from "./common/reponsive/col"
import Container from "./common/reponsive/container"
import Button from "./common/Button"

export default function PostNotFound() {
  return (
    <Container wide>
      <Row className="spacing">
        <Col l={4}>
          <img src="https://cdn.24h.com.vn/images/404img_092018.png" alt="" />
        </Col>
        <Col l={8}>
          <h2>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h2>
          <Button as="a" to="/">Quay lai trang chu</Button>
        </Col>
      </Row>
    </Container>
  )
}