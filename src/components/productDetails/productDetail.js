import { useEffect, useRef, useState } from 'react';
import './productDetail.css'
import Container from './../common/reponsive/container';
import Row from './../common/reponsive/row';
import Col from './../common/reponsive/col';
import ModalProduct from './modalProduct';
// import _ from 'lodash';

function ProductDetail() {
    const dataColor = [
        {
            id:1,
            color: 'trắng',
            img: "https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail01.png?alt=media&token=fd4342af-b5e5-4270-9cab-81d4502f3b8b"
        },
        {
            id:2,
            color: 'đen',
            img: "https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail03.png?alt=media&token=267b8976-db73-48f5-be47-f9b4a17d1c8e"
        },
        {
            id:3,
            color: 'xanh',
            img: "https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%2Floa-bluetooth-ivalue.png?alt=media&token=b3814f8c-f3f5-4edb-a719-79f5333879fd"
        }
    ];
    const [colorSelect, setColorSelect] = useState(dataColor[0]);
    const [isShowModal,setIsShowModal] = useState(false);
    const readMore = useRef();
    const handleselect = (color)=>{
        setColorSelect(color)
    }
    const hideModal =()=>{
        setIsShowModal(false)
    }
    useEffect(()=> {
        if(isShowModal) {
            document.querySelector("body").classList.add("openModal");

        }else {
            document.querySelector("body").classList.remove("openModal");
        }
    },[isShowModal])
	return (
		<div className="main-wrapper">
			<Container className="main-cart" wide>
                <section className="product-info">
                    <Row>
                        <Col l={4}>
                        <div className="product-info__left">
                            <div className="left-gallery">
                                <div className="display-image">
                                <div className="display-image__wrapper">
                                    <div id="image-container">
                                    <img
                                        id="zoom-image"
                                        alt=""
                                        src={colorSelect.img}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="review-image">
                                <ul className="review-image__list">
                                    {
                                        dataColor.map((color)=>{
                                            return(
                                                <li key={color.id} onClick={()=>handleselect(color)} className={colorSelect.id=== color.id ? "review-image-item active" : "review-image-item"}>
                                                    <div className="item-wrapper">
                                                        <img
                                                        alt=""
                                                        src={color.img}
                                                        />
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* <li className="review-image-item active">
                                    <div className="item-wrapper">
                                        <img
                                        alt=""
                                        src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail01.png?alt=media&token=fd4342af-b5e5-4270-9cab-81d4502f3b8b"
                                        />
                                    </div>
                                    </li>
                                    <li className="review-image-item ">
                                    <div className="item-wrapper">
                                        <img
                                        alt=""
                                        src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail02.png?alt=media&token=c931c715-0279-481f-a921-d8a0b07b7606"
                                        />
                                    </div>
                                    </li>
                                    <li className="review-image-item ">
                                    <div className="item-wrapper">
                                        <img
                                        alt=""
                                        src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail03.png?alt=media&token=267b8976-db73-48f5-be47-f9b4a17d1c8e"
                                        />
                                    </div>
                                    </li>
                                    <li className="review-image-item ">
                                    <div className="item-wrapper">
                                        <img
                                        alt=""
                                        src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail04.png?alt=media&token=ab16b4ce-9db0-4014-9d37-3335a5b53d27"
                                        />
                                    </div>
                                    </li> */}
                                    <div className="review-image__more">
                                    <span>
                                        <i className="far fa-images" />
                                    </span>
                                    <span>Xem thêm 4 ảnh</span>
                                    </div>
                                </ul>
                                </div>
                            </div>
                            <div className="left-description">
                                <div className="left-description__title">
                                <span>Đặc điểm nổi bật</span>
                                </div>
                                <ul className="left-description__list">
                                <li className="left-description-item">
                                    Hai màn hình HD+ mở rộng tối đa không gian trải nghiệm hình ảnh
                                </li>
                                <li className="left-description-item">
                                    Thân máy hoàn thiện đường gập tối ưu
                                </li>
                                <li className="left-description-item">
                                    Sạc nhanh siêu tốc 15W giúp nạp đầy năng lượng nhanh chóng
                                </li>
                                <li className="left-description-item">
                                    Dung lượng pin lớn 4500mAh thoải mái trải nghiệm cả ngày dài
                                </li>
                                <li className="left-description-item">
                                    3 camera sau 12MP + 12MP + 12MP hỗ trợ chụp ảnh đa tính năng
                                </li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col l={8}>
                        <div className="product-info__right">
                            <div className="right-combo-first">
                                <div className="combo-first__pr-name">Samsung galaxy ZFold2</div>
                                <div className="combo-first__pr-rating">
                                <div className="pr-rating__star">
                                    <span>
                                    <i className="fas fa-star" />
                                    </span>
                                    <span>
                                    <i className="fas fa-star" />
                                    </span>
                                    <span>
                                    <i className="fas fa-star" />
                                    </span>
                                    <span>
                                    <i className="fas fa-star" />
                                    </span>
                                    <span>
                                    <i className="far fa-star" />
                                    </span>
                                </div>
                                <span className="pr-rating__text">(Xem 46 đánh giá)</span>
                                </div>
                                <div className="combo-first__like-share">
                                <span className="like-icon">
                                    <i className="fas fa-heart" />
                                </span>
                                <span className="share-icon">
                                    <i className="fas fa-share-alt" />
                                </span>
                                </div>
                            </div>
                            <div className="right-combo-second">
                                <div className="row">
                                <Col l={8}>
                                    <div className="combo-second-content">
                                    <div className="combo-second-content__price">
                                        <div className="product-price">
                                        <span className="price-discount">49.000.000 ₫</span>
                                        <div className="product-price__combo">
                                            <span className="combo__discount-percent">-2%</span>
                                            <span className="combo__price-normal">50.000.000 ₫</span>
                                        </div>
                                        </div>
                                        <div className="policy-price">
                                        <img src="/static/media/policy-image.62c1167a.png" alt="" />
                                        <span>
                                            <i className="far fa-question-circle" />
                                        </span>
                                        </div>
                                    </div>
                                    <div className="combo-second-content__option">
                                        <div className="option">
                                        <div className="option__name">
                                            Chọn Màu:<span>{colorSelect.color}</span>
                                        </div>
                                        <ul className="option__list">
                                            {
                                                dataColor.map((color,i)=>{
                                                    return (
                                                        <li key={i} onClick={()=>handleselect(color)} className={colorSelect.color===color.color ? "option-item active" : "option-item"}>{color.color}{
                                                            colorSelect.color===color.color ? <span>
                                                            <i className="fas fa-check" />
                                                        </span> : ''
                                                        }</li>
                                                    )
                                                })
                                            }
                                            {/* <li className="option-item active">
                                            Trắng
                                            <span>
                                                <i className="fas fa-check" />
                                            </span>
                                            </li>
                                            <li className="option-item ">Vàng</li>
                                            <li className="option-item ">Xám</li> */}
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="combo-second-content__button">
                                        <div className="button-quantity">
                                        <p>Số lượng:</p>
                                        <div className="button-group">
                                            <span>-</span>
                                            <input type="text" defaultValue={1} />
                                            <span>+</span>
                                        </div>
                                        </div>
                                        <div className="button-purchase">
                                        <button className="btn btn--primary btn-add-to-cart">
                                            Thêm vào giỏ hàng
                                        </button>
                                        <div className="combo-button">
                                            <div className="combo-button__installment">
                                            <span>Trả góp 0%</span>
                                            <span>Duyệt nhanh qua điện thoại</span>
                                            </div>
                                            <div className="combo-button__installment">
                                            <span>Trả góp qua thẻ</span>
                                            <span>Visa, Master Card, JCB</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="combo-second-content__sale">
                                        <div className="sale-together-title">
                                        <span>Sản phẩm thường được mua cùng</span>
                                        </div>
                                        <div className="sale-together-content">
                                        <div className="sale-together-list">
                                            <div className="sale-together-item">
                                            <div className="item-image">
                                                <img
                                                alt=""
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%2Ftai-nghe-gaming-zadez.png?alt=media&token=cdb99cb8-2924-4736-8418-28ade9690e3f"
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-info__name">
                                                <a href="#vv">
                                                    Tai nghe choàng đầu có mic Gaming Zadez GT-326P
                                                </a>
                                                </div>
                                                <div className="item-info__discount-price">600.000 ₫</div>
                                                <div className="item-info__combo-price">
                                                <span>-8%</span>
                                                <span>650.000 ₫</span>
                                                </div>
                                            </div>
                                            <div className="item-check">
                                                <span>
                                                <i className="fas fa-check-square" />
                                                </span>
                                            </div>
                                            </div>
                                            <div className="sale-together-item">
                                            <div className="item-image">
                                                <img
                                                alt=""
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%2Fsac-du-phong-quick-charge-li-polymer.png?alt=media&token=03702988-5d10-41fa-aead-d0afe985bbbc"
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-info__name">
                                                <a href="#vv">
                                                    Pin sạc dự phòng Quick Charge Li-polymer 10000 mAh
                                                    UMETRAVEL SKY10000
                                                </a>
                                                </div>
                                                <div className="item-info__discount-price">799.000 ₫</div>
                                                <div className="item-info__combo-price">
                                                <span>-6%</span>
                                                <span>849.000 ₫</span>
                                                </div>
                                            </div>
                                            <div className="item-check">
                                                <span>
                                                <i className="fas fa-check-square" />
                                                </span>
                                            </div>
                                            </div>
                                            <div className="sale-together-item">
                                            <div className="item-image">
                                                <img
                                                alt=""
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%2Floa-bluetooth-ivalue.png?alt=media&token=b3814f8c-f3f5-4edb-a719-79f5333879fd"
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-info__name">
                                                <a href="#vv">Loa bluetooth i.value BS03</a>
                                                </div>
                                                <div className="item-info__discount-price">600.000 ₫</div>
                                                <div className="item-info__combo-price">
                                                <span>-13%</span>
                                                <span>690.000 ₫</span>
                                                </div>
                                            </div>
                                            <div className="item-check">
                                                <span>
                                                <i className="fas fa-check-square" />
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="sale-together-button">
                                        <button className="btn btn--primary ">Mua ngay</button>
                                        </div>
                                    </div>
                                    </div>
                                </Col>
                                <Col l={4}>
                                    <div className="combo-second-accessory-warranty">
                                    <div className="combo-second-accessory">
                                        <div className="accessory-header">
                                        <span>Phụ kiện đi kèm</span>
                                        </div>
                                        <ul className="accessory-list">
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Sạc</span>
                                            <span className="accesory-item__quantity">x1</span>
                                        </li>
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Cáp sạc</span>
                                            <span className="accesory-item__quantity">x2</span>
                                        </li>
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Cây lấy sim</span>
                                            <span className="accesory-item__quantity">x2</span>
                                        </li>
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Tai nghe</span>
                                            <span className="accesory-item__quantity">x1</span>
                                        </li>
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Sách hướng dẫn</span>
                                            <span className="accesory-item__quantity">x1</span>
                                        </li>
                                        <li className="accessory-item">
                                            <span className="accesory-item__name">Ốp lưng</span>
                                            <span className="accesory-item__quantity">x2</span>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="combo-second-warranty">
                                        <div className="warranty-header">
                                        <span>Chính sách bảo hành</span>
                                        </div>
                                        <div className="warranty-body">
                                        <ul className="warranty-body__list">
                                            <li className="warranty-item">
                                            <span className="warranty-item__left">
                                                Thời gian bảo hành
                                            </span>
                                            <span className="warranty-item__right">12 tháng</span>
                                            </li>
                                            <li className="warranty-item">
                                            <span className="warranty-item__left">
                                                Hình thức bảo hành
                                            </span>
                                            <span className="warranty-item__right">Hóa đơn</span>
                                            </li>
                                            <li className="warranty-item">
                                            <span className="warranty-item__left">Nơi bảo hành</span>
                                            <span className="warranty-item__right">
                                                Bảo hành chính hãng
                                            </span>
                                            </li>
                                            <li className="warranty-item">
                                            <span className="warranty-item__left">
                                                Hướng dẫn bảo hành
                                            </span>
                                            <span className="warranty-item__right">
                                                <a href="#vv">Xem chi tiết</a>
                                            </span>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="warranty-footer">
                                        <div className="warranty-footer__benefit">
                                            <span className="benefit-icon">
                                            <i className="fas fa-shield-alt" />
                                            </span>
                                            <span className="benefit-content">
                                            Hoàn tiền <strong>100%</strong> nếu là hàng giả
                                            </span>
                                        </div>
                                        <div className="warranty-footer__benefit">
                                            <span className="benefit-icon">
                                            <i className="fas fa-calendar-check" />
                                            </span>
                                            <span className="benefit-content">
                                            Mở hộp kiểm tra trước khi nhận hàng
                                            </span>
                                        </div>
                                        <div className="warranty-footer__benefit">
                                            <span className="benefit-icon">
                                            <i className="fas fa-sync-alt" />
                                            </span>
                                            <span className="benefit-content">
                                            Đổi trả trong <strong>7</strong> ngày nếu phát sinh lỗi
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </Col>
                                </div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="product-description">
                    <Row>
                        <Col l={7}>
                            <div className="product-description__left">
                            <div ref={readMore} className="product-description-review">
                                <div className="review-title">
                                    <span>Đánh giá chi tiết</span>
                                </div>
                                <div id="reCo" className="review-content">
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>
                                        Không giống bất kỳ chiếc điện thoại nào khác,{" "}
                                        <a href="https://fptshop.com.vn/dien-thoai/samsung-galaxy-z-fold-2 ">
                                        Samsung Galaxy Z Fold 2 5G
                                        </a>{" "}
                                        sở hữu màn hình gập kỳ diệu mà mỗi khi mở màn hình, bạn đã mở ra tương
                                        lai của ngành công nghiệp smartphone.
                                    </b>
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <b>
                                        <img
                                        alt="Samsung Galaxy Z Fold 2 5G "
                                        src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2.jpg "
                                        />
                                    </b>
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Hai màn hình, trải nghiệm trong cùng một thiết bị</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Không chỉ là một chiếc điện thoại màn hình gập, Galaxy Z Fold 2 5G còn là
                                    chiếc <a href="https://fptshop.com.vn/dien-thoai ">điện thoại</a> có tới 2
                                    màn hình. Trong trạng thái gập, màn hình ngoài của máy với kích thước 6,2
                                    inch, viền mỏng cho trải nghiệm smartphone thông thường, nơi bạn có thể
                                    thao tác dễ dàng bằng một tay. Còn muốn trải nghiệm một màn hình lớn hơn,
                                    tương đương máy tính bảng, bạn có thể mở ra màn hình gập, điều kỳ diệu sẽ
                                    xuất hiện.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="Hai màn hình, trải nghiệm trong cùng một thiết bị | Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-7.JPG "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Màn hình gập 7,6 inch&nbsp;lớn nhất thế giới smartphone</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Màn hình gập Galaxy Z Fold 2 5G khi mở ra có kích thước lớn tới 7,6 inch
                                    và được làm viền mỏng cả 4 cạnh tuyệt đẹp. Bạn sẽ được tận hưởng màn hình
                                    lớn chưa từng thấy trên thế giới smartphone, dù là đọc báo, vào mạng xã
                                    hội, xem phim hay chơi game, tất cả đều cho những trải nghiệm thú vị.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="màn hình Samsung Galaxy Z Fold 2 5G "
                                        src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2-2.jpg "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Chất lượng hiển thị xuất sắc với tần số quét 120Hz</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Không chỉ lớn, màn hình Samsung Galaxy Z Fold 2 5G còn có chất lượng cao
                                    cấp hàng đầu hiện nay. Với công nghệ Dynamic AMOLED 2X mới nhất từ{" "}
                                    <a href="https://fptshop.com.vn/dien-thoai/samsung ">Samsung</a>, độ phân
                                    giải siêu cao, hỗ trợ HDR 10+, màn hình Z Fold2 hiển thị chân thực và sắc
                                    nét đến từng chi tiết. Một điều bất ngờ nữa là màn hình này còn hỗ trợ tần
                                    số quét 120Hz, giúp tất cả mọi thao tác của bạn hay hình ảnh đều mượt mà
                                    hơn bao giờ hết.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="hiển thị Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-1.JPG "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Cơ chế gập tiên tiến nhất</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Với những kinh nghiệm từ thế hệ đầu tiên, Samsung đã tạo nên chiếc điện
                                    thoại màn hình gập Galaxy Z Fold 2 5G hoàn hảo hơn rất nhiều. Bản lề mới
                                    hiện đại giúp thao tác gập mở nhẹ nhàng, cứng cáp, đồng thời làm phẳng mọi
                                    nếp gấp trên màn hình. Một logo Samsung tinh tế nằm ngay trên phần bản lề
                                    tạo điểm nhấn riêng biệt cho{" "}
                                    <a href="https://fptshop.com.vn/dien-thoai ">điện thoại</a>.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="cơ chế gập Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-4.JPG "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Điện thoại gập nhỏ gọn nhưng&nbsp;cao cấp</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Samsung Galaxy Z Fold 2 ra đời với mục đích mang đến cho người dùng màn
                                    hình lớn vượt trội trong một chiếc máy nhỏ gọn. Trong trạng thái gập,
                                    Galaxy Z Fold 2 vô cùng nhỏ gọn, dễ dàng để bạn cho vào túi quần, túi xách
                                    hay sử dụng và thao tác bằng một tay. Từng chi tiết trên điện thoại đều
                                    được hoàn thiện cao cấp. Từ camera selfie trên màn hình Infinity-O; cụm 3
                                    camera chính cho đến phần bản lề, các góc cạnh đều được trau chuốt tỉ mỉ.
                                    Sử dụng chất liệu kim loại và kính, Samsung Galaxy Z Fold 2 đẹp sang
                                    trọng, vô cùng đẳng cấp.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="màn hình gập Samsung Galaxy Z Fold 2 5G "
                                        src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2-1.jpg "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <strong>Cấu hình mạnh mẽ như máy tính để bàn</strong>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Samsung Galaxy Z Fold 2 5G có cấu hình tương xứng với đẳng cấp và sự đặc
                                    biệt của máy. Điện thoại trang bị bộ vi xử lý
                                    <a href="https://fptshop.com.vn/tin-tuc/danh-gia/day-la-loat-smartphone-snapdragon-865-plus-sap-ra-mat-123592 ">
                                        Snapdragon 865+
                                    </a>{" "}
                                    mạnh mẽ hàng đầu thế giới smartphone và đi kèm với dung lượng RAM lên tới
                                    12GB cùng 256GB bộ nhớ trong. Tốc độ và khả năng xử lý của Galaxy Z Fold 2
                                    mạnh tương đương với những máy tính để bàn. Mọi ứng dụng, thao tác của bạn
                                    đều được phản hồi ngay lập tức. Kết hợp thêm màn hình 120Hz, bạn sẽ được
                                    cầm trên tay chiếc điện thoại nhanh và mượt nhất hiện nay.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="cấu hình Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-5.JPG"
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Camera&nbsp;ở khắp mọi nơi</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Samsung Galaxy Z Fold 2 trang bị tới 5 camera, trong đó mỗi màn hình có
                                    một camera trước 10MP và cụm camera chính mặt sau gồm 3 camera 12MP. Nhờ
                                    cơ chế đóng mở màn hình mà việc sử dụng camera của bạn cũng hết sức linh
                                    hoạt. Tất nhiên mỗi cảm biến camera trên Galaxy Z Fold 2 đều rất cao cấp
                                    và chất lượng. Vì thế bạn có thể chụp ảnh, selfie, gọi video chất lượng
                                    cao dù là khi màn hình đang gập hay mở.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="camera Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-3.JPG "
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Khả năng chụp ảnh&nbsp;xuất sắc</b>
                                    </h3>
                                    <p style={{ marginBottom: 11, textAlign: "justify" }}>
                                    Cụm 3 camera sau Galaxy Z Fold 2 5G sở hữu 3 cảm biến camera hàng đầu thế
                                    giới smartphone hiện nay. Camera chính 12MP khẩu độ lớn 1.8um, hỗ trợ lấy
                                    nét kép Dual Pixel và chống rung quang học OIS. Camera Tele 12MP cũng hỗ
                                    trợ OIS và zoom quang học 2X; cuối cùng là camera 12MP góc siêu rộng. Trải
                                    nghiệm chụp ảnh trên Galaxy Z Fold 2 sẽ còn tuyệt vời hơn nữa khi màn hình
                                    xem trước của bạn cực lớn, để bạn bao quát và thấy trọn vẻ đẹp cả trước và
                                    sau khi chụp.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="camera Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-3.JPG"
                                    />
                                    </p>
                                    <h3 style={{ marginBottom: 11, textAlign: "justify" }}>
                                    <b>Kết nối 5G, kết nối của tương lai</b>
                                    </h3>
                                    <p style={{ textAlign: "justify", marginBottom: 11 }}>
                                    5G đã không còn là giấc mơ nữa khi tính năng này được tích hợp ngay trên
                                    Samsung Galaxy Z Fold 2, mở ra một kỷ nguyên mới về kết nối mạng không
                                    dây. Tốc độ mạng sẽ được nâng lên một tầm cao mới, cho bạn khả năng truy
                                    cập siêu tốc và không phải chờ đợi.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="Kết nối 5G Samsung Galaxy Z Fold 2 5G "
                                        src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2-12.jpg "
                                    />
                                    </p>
                                    <h3 style={{ textAlign: "justify", marginBottom: 11 }}>
                                    <b>Sử dụng ở mọi góc độ</b>
                                    </h3>
                                    <p style={{ textAlign: "justify", marginBottom: 11 }}>
                                    Màn hình gập và cơ chế gập tiên tiến của Galaxy Z Fold 2 5G giúp bạn có
                                    thể sử dụng điện thoại ở bất cứ góc độ nào. Không chỉ là cầm trên tay, bạn
                                    có thể để trên mặt bàn, nghiêng máy và làm việc một cách rảnh tay. Xem một
                                    bộ phim, gọi video hay làm bất cứ điều gì bạn thích một cách dễ dàng trên
                                    Galaxy Z Fold2 5G.
                                    </p>
                                    <p style={{ marginBottom: 11, textAlign: "center" }}>
                                    <img
                                        alt="Sử dụng ở mọi góc độ | Samsung Galaxy Z Fold 2 5G "
                                        src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/oppo-reno-6-5g-5.JPG"
                                    />
                                    </p>
                                </div>
                                <div className="review-see-more-overlay">
                                    <span onClick={()=>readMore.current.classList.add("--show")} className="button-overlay">
                                    Đọc thêm
                                    <i className="fas fa-caret-down" />
                                    </span>
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col l={5}>
                            <div className="product-description__right">
                                <div className="des-right-specification">
                                    <div className="specification-title"><span>Thông số kĩ thuật</span></div>
                                    <div className="specification-content">
                                        <div className="specification-content__table">
                                            <div className="spec-table-wrapper"><table><tbody><tr><td>Màn hình</td><td>Màn hình trước: 6.2", Màn hình chính: 7.6", HD+, Chính: Dynamic AMOLED 2X, phụ: Super AMOLED, 1768 x 2208 Pixel</td></tr><tr><td>Camera sau</td><td>12.0 MP + 12.0 MP + 12.0 MP</td></tr><tr><td>RAM</td><td>12 GB</td></tr><tr><td>Bộ nhớ trong</td><td>256 GB</td></tr><tr><td>CPU</td><td>Snapdragon 865+</td></tr><tr><td>GPU</td><td>Adreno 650</td></tr><tr><td>Dung lượng pin</td><td>4500 mAh</td></tr><tr><td>Loại Sim</td><td>1 eSIM, 1 Nano SIM</td></tr><tr><td>Hệ điều hành</td><td>Window 10</td></tr><tr><td>Xuất xứ</td><td>Việt Nam</td></tr><tr><td>Thời gian ra mắt</td><td>01/2021</td></tr></tbody></table></div>
                                            <div onClick={()=>setIsShowModal(true) } className="spec-table-see-detail"><span>Xem cấu hình chi tiết</span><span><i className="fas fa-caret-right"></i></span></div>
                                            <ModalProduct hideModal={hideModal} isShowModal={isShowModal}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-instruction">
                                    <div className="instruction-title">
                                        <span>Tin tức &amp; Sự kiện</span>
                                    </div>
                                    <div className="instruction-content">
                                        <ul className="instruction-content__wrapper">
                                        <li className="instruction-item">
                                            <a href="#v" className="instruction-item__link">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new01.png?alt=media&token=a01434dc-e630-4e7c-80d5-7c5a2aef2e8f"
                                                alt=""
                                            />
                                            <span>
                                                Samsung đang đưa một số tính năng của Galaxy S21 lên các thiết bị cũ
                                                hơn
                                            </span>
                                            </a>
                                        </li>
                                        <li className="instruction-item">
                                            <a href="#v" className="instruction-item__link">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new02.png?alt=media&token=385c6ca2-7aef-4ff6-95f1-3afc6413eb8e"
                                                alt=""
                                            />
                                            <span>Samsung Galaxy Z Fold 2 đạt 109 điểm DxOMARK</span>
                                            </a>
                                        </li>
                                        <li className="instruction-item">
                                            <a href="#v" className="instruction-item__link">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new03.png?alt=media&token=b835d924-2036-42ec-b821-ea9a9c84c3e5"
                                                alt=""
                                            />
                                            <span>
                                                Sau Galaxy Z Flip, Samsung tung lại bản cập nhật One UI 3.0 Beta cho
                                                Galaxy Z Fold2{" "}
                                            </span>
                                            </a>
                                        </li>
                                        <li className="instruction-item">
                                            <a href="#v" className="instruction-item__link">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new04.png?alt=media&token=19053c30-7a46-4cdb-9851-c97da0ff5276"
                                                alt=""
                                            />
                                            <span>
                                                Hết hàng quá nhanh, Samsung Galaxy Z Fold2 mở bán đợt 2 tại Việt Nam
                                                với số lượng có hạn
                                            </span>
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
		</div>
	);
}

export default ProductDetail;