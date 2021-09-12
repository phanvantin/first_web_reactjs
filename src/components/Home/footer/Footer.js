import React from 'react';

import Container from '../../common/reponsive/container'
import Row from '../../common/reponsive/row'
import Col from '../../common/reponsive/col'
import './footer.css'

 function Footer(){
		return (
			<footer className="footer">
				<Container wide>
					<Row>
						<Col l="2-4">
							<div className="support-title">Chăm sóc khách hàng</div>
							<ul className="support-content">
								<li className="support-content__item"><a href="#v">Trung tâm trợ giúp</a></li>
								<li className="support-content__item"><a href="#v">Hướng dẫn mua hàng</a></li>
								<li className="support-content__item"><a href="#v">Hướng dẫn mua trả góp</a></li>
								<li className="support-content__item"><a href="#v">Chính sách bảo hành</a></li>
								<li className="support-content__item"><a href="#v">Chính sách trả góp</a></li>
								<li className="support-content__item"><a href="#v">Chế độ đổi trả</a></li>
							</ul>
						</Col>
						<Col l="2-4">
							<div className="support-title">Thông tin</div>
							<ul className="support-content">
								<li className="support-content__item"><a href="#v">Tin tuyển dụng</a></li>
								<li className="support-content__item"><a href="#v">Tin khuyến mãi</a></li>
								<li className="support-content__item"><a href="#v">Chính sách bảo mật</a></li>
								<li className="support-content__item"><a href="#v">Hệ thống cửa hàng</a></li>
							</ul>
						</Col>
						<Col l="2-4">
							<div className="support-title">Thanh toán</div>
							<ul className="support-content">
								<li className="support-content__item"><a href="#v">Qua thẻ tín dụng</a></li>
								<li className="support-content__item"><a href="#v">Thanh toán trực tiếp</a></li>
								<li className="support-content__item"><a href="#v">Qua trả góp</a></li>
								<li className="support-content__item"><a href="#v">Ví MOMO</a></li>
							</ul>
						</Col>
						{/* <Col l="2-4">
							<div className="support-title">Theo dõi chúng tôi trên</div>
							<ul className="support-content">
								<li className="support-content__item"><a href="#v"><i className="fab fa-facebook"></i>Facebook</a></li>
								<li className="support-content__item"><a href="#v"><i className="fab fa-instagram"></i>Instagram</a></li>
								<li className="support-content__item"><a href="#v"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
							</ul>
						</Col> */}
						<Col l="2-4">
						<div className="support-title">Kết nối tới FaceBook</div>
						<div className="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
						</Col>
					</Row>
				</Container>
			</footer>
		)
	}

export default Footer;
