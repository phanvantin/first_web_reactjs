import React from 'react';
import './Slider1.css';
import ImgSlider1 from './ImgSlider1';
import Col from '../../common/reponsive/col'
// import SliderContent from './SliderContent';

function Slider1() {
  
	return (
		<div className="grid wide">
			<div className="row">
                <div className="col l-8">
                    <div className="banner-left">
                        <ImgSlider1 autoPlay={3}/>
                        {/* <SliderContent /> */}
                    </div>
                </div>
                <Col l={4}>
                <div className="home-banner__right">
                    <div className="banner-right__new">
                    <div className="new-heading">Tin tức công nghệ</div>
                    <div className="new-body">
                        <a href="#v" className="new-body-wrapper">
                        <img alt="" className="new-body__image" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FNew%20Technology%2Ftechnology-new.png?alt=media&token=aea1c2c0-4b52-4da4-991b-c846c2daaaf8" />
                        <div className="new-body__content"><span>Nhận ngay gói Microsoft 365 Personal khi chọn mua Galaxy Tab S7 tại FPT Shop</span><span>100 ngày trước</span></div>
                        </a>
                    </div>
                    </div>
                    <div className="banner-right__two-banner">
                    <a href="#v" className="two-banner__wrapper">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FHome%20Two%20Banner%2Ftwo-banner01.png?alt=media&token=dbabdaba-6948-47e5-aba8-960dec9b7ae9" />
                    </a>
                    <a href="#v" className="two-banner__wrapper">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FHome%20Two%20Banner%2Ftwo-banner02.png?alt=media&token=b60acf87-473b-423d-bb41-d61f18859e4b" />
                    </a>
                    </div>
                </div>
                </Col>
            </div>
		</div>
	);
}

export default Slider1;
