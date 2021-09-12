
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';


import './cv.css'
// import Container from '../common/reponsive/container'
import Row from '../common/reponsive/row'
import Col from '../common/reponsive/col'



function Cv() {
  const componentRef = useRef();
  return (
    <div className="main-wrapper main-wrapper--top">
      <ReactToPrint
        trigger={() => <button className="btn btn-primary print_cv">IN CV</button>}
        content={() => componentRef.current}
      />
    <div ref={componentRef} className="grid wide">
      <Row>
        <Col className="left__cv" l={4}>
          <div className="profile">
            <div className="profile__img">
              <img src="/img/cv.jpg" alt="avatar"></img>
            </div>
            <h2>Phan Văn Tín<br/><span>Web Developer</span></h2>
          </div>
          <div className="contactInfo">
            <h3>thông tin liên hệ</h3>
            <ul>
              <li>
                <span className="icon"><i className="fas fa-phone-alt"></i></span>
                <span className="text">0905.55.64.68</span>
              </li>
              <li>
                <span className="icon"><i className="far fa-envelope"></i></span>
                <span className="text">tinphan1811@gmail.com</span>
              </li>
              <li>
                <span className="icon"><i className="fab fa-facebook"></i></span>
                <span className="text">https://www.facebook.com/tin.phan.0211</span>
              </li>
              <li>
                <span className="icon"><i className="fas fa-globe-americas"></i></span>
                <span className="text">https://dazzling-wozniak-79a4c8.netlify.app</span>
              </li>
              <li>
                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                <span className="text">Quế Phong, Quế Sơn, Quảng Nam</span>
              </li>
            </ul>
            <div></div>
          </div>
          <div className="contactInfo education">
            <h3>Trình độ học vấn</h3>
            <ul>
              <li>
                <h5>Tên Trường</h5>
                <h4>Trường Đại Học Kinh Tế Huế</h4>
              </li>
              <li>
                <h5>Tên Bằng Cấp</h5>
                <h4>Bằng cử nhân</h4>
              </li>
              <li>
                <h5>Chuyên Ngành</h5>
                <h4>Tin Học Kinh Tế</h4>
              </li>
              <li>
                <h5>Xếp Loại</h5>
                <h4>Khá</h4>
              </li>
              <li>
                <h5>Khóa Học</h5>
                <h4>2014-2018</h4>
              </li>

            </ul>
            <div></div>
          </div>
        </Col>
        <Col className="right__cv" l={8}>
          <div className="about">
            <h2>Kinh nghiệm việc làm</h2>
            <div className="box">
              <div className="year_company">
                <h5>02/2018 – 06/2018</h5>
              </div>
              <div className="text">
                <h4>Thực tập sinh</h4>
                <p>Thực tập tại công ty Cổ Phần truyền thông quảng cáo Eaglemedia Huế đề tài xây dựng website thương mại điện tử dựa trên mã nguồn mở Wordpress.</p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>09/2018 - 01/2019</h5>
              </div>
              <div className="text">
                <h4>Nhân viên kinh doanh</h4>
                <p>Làm việc tại công ty Cổ phần viễn thông FPT Telecom Đà Nẵng vị trí nhân viên kinh doanh.</p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>03/2019 - 07/2019</h5>
              </div>
              <div className="text">
                <h4>Nhân viên kinh doanh</h4>
                <p>Làm việc tại công ty thiết kế website NR Global Đà Nẵng vị trí nhân viên kinh doanh.</p>
              </div>
            </div>
            <div className="box">
              <div className="year_company">
                <h5>08/2020 - 12/2020</h5>
              </div>
              <div className="text">
                <h4>Nhân viên phân tích dữ liệu</h4>
                <p>Làm việc tại cửa hàng xe máy Honda Quốc Tiến Đà Nẵng vị trí nhân viên phân tích dữ liệu và làm việc trên Excel, PowerBI.</p>
              </div>
            </div>
          </div>
          <div className="about target">
            <h2>Mục tiêu nghề nghiệp</h2>
            <ul>
              <li>- Trau dồi kĩ năng, học hỏi thêm kiến thức mới.</li>
              <li>- Mong muốn có một môi trường là việc chuyên nghiệp, ổn định và phát triển lâu dài với công ty.</li>
            </ul>
          </div>
          <div className="about skills">
            <h2>Kĩ năng</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent">
                <div style={{width:"60%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
              <div style={{width:"45%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>JAVASCRIPT</h4>
              <div className="percent">
              <div style={{width:"30%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>REACTJS</h4>
              <div className="percent">
              <div style={{width:"45%"}}></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default Cv;