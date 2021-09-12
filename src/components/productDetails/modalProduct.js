import { useEffect, useRef } from "react";
import { Swiper,SwiperSlide } from 'swiper/react';



export default function ModalProduct({isShowModal,hideModal}) {
    
	const navProduct = useRef();
    const scrollNavProduct = useRef();
	useEffect(()=> {
        // scrollNavProduct.current.onscroll = function(){
        //     console.log(scrollNavProduct.current.scrollTop)
        // }

        
		scrollNavProduct.current.addEventListener('scroll', () => {
            let navigationLinks = scrollNavProduct.current.querySelectorAll('.swiper-slide-item');
            let fromTop = scrollNavProduct.current.scrollTop;
            let showNav= scrollNavProduct.current.querySelector('.de-modal-body__content')

            navigationLinks.forEach(link => {
            let section = scrollNavProduct.current.querySelector('#' + link.getAttribute('data-scroll'));
            // console.log(section.offsetTop)
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add('active');
										link.scrollIntoView({
											behavior: 'smooth',
											// block: "start",
											inline: "center"
									});
                } else {
                    link.classList.remove('active');
                }
            });
            if(scrollNavProduct.current.scrollTop > showNav.offsetTop){
                navProduct.current.classList.add("--show")
            }
            if(scrollNavProduct.current.scrollTop < showNav.offsetTop) {
                navProduct.current.classList.remove("--show")
            }
            return () => {
              scrollNavProduct.current.removeEventListener('scroll', ()=> { });
            }
	   })
	  },[])
    document.querySelectorAll('.swiper-slide-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(e.target.getAttribute('data-scroll')).scrollIntoView({
                behavior: 'smooth',
                block: "start",
                inline: "start"
            });
        });
    });
    return (
        <div onClick={()=>hideModal()} ref={scrollNavProduct} className="spec-table-detail-modal" style={isShowModal ? {display: "block"} : {display: "none"}} >
            <div onClick={(e)=>e.stopPropagation()} className="de-modal">
                <div className="de-modal__wrapper">
                
                <div className="de-modal-title">
                    Chi tiết thông số kĩ thuật Samsung galaxy ZFold2
                    <span onClick={()=>hideModal()} id="close-modal-btn">
                    <i className="fas fa-times" />
                    </span>
                </div>
                <div className="de-modal-body">
                    <div className="de-modal-body__image">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FSpecification%20Image%2Fss-galaxy-zFold-spec00.png?alt=media&token=eea18e75-ce55-4f44-80fe-2b83ac6a7d9d"
                        alt=""
                    />
                    </div>
                    <div ref={navProduct} className="de-modal-body__nav">
											<Swiper className="nav-wrapper"> 
													{/* <div className="swiper-wrapper nav-swiper-slide"> */}
														<SwiperSlide onClick={(e)=>console.log(e.target.getAttribute("data-scroll"))} className="swiper-slide-item" data-scroll="data-0">
																Thiết kế &amp; Trọng lượng
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-1">
																Màn hình
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-2">
																Camera sau
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-3">
																Bảo mật
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-4">
																Bộ nhớ RAM
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-5">
																Lưu trữ
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-6">
																Bộ xử lí
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-7">
																Graphics
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-8">
																Thông tin Pin &amp; Sạc
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-9">
																Giao tiếp &amp; Kết nối
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-10">
																Hệ điều hành
														</SwiperSlide>
														<SwiperSlide className="swiper-slide-item " data-scroll="data-11">
																Thông tin hàng hóa
														</SwiperSlide>
													{/* </div> */}
      								</Swiper>
                    </div>
                    <div className="de-modal-body__content">
                    <div className="content-item-modal showNav" id="data-0">
                        <div className="content-item__title">
                        Thiết kế &amp; Trọng lượng
                        </div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Width (mm)</td>
                            <td>68.0 - 128.2</td>
                            </tr>
                            <tr>
                            <td>Depth (mm)</td>
                            <td>6.9 - 16.8</td>
                            </tr>
                            <tr>
                            <td>Height (mm)</td>
                            <td>159.2</td>
                            </tr>
                            <tr>
                            <td>Trọng lượng (g)</td>
                            <td>282</td>
                            </tr>
                            <tr>
                            <td>Tỷ lệ diện tích sử dụng màn hình</td>
                            <td>88%</td>
                            </tr>
                            <tr>
                            <td>Chuẩn kháng nước / Bụi bẩn</td>
                            <td>Không</td>
                            </tr>
                            <tr>
                            <td>Chất liệu</td>
                            <td>Khung kim loại &amp; Mặt lưng kính cường lực</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-1">
                        <div className="content-item__title">Màn hình</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Công nghệ màn hình</td>
                            <td>Chính: Dynamic AMOLED 2X, phụ: Super AMOLED</td>
                            </tr>
                            <tr>
                            <td>Kích thước màn hình</td>
                            <td>
                                Màn hình trước: 6.2", Màn hình chính: 7.6", HD+, Chính:
                                Dynamic AMOLED 2X, phụ: Super AMOLED, 1768 x 2208 Pixel
                            </td>
                            </tr>
                            <tr>
                            <td>Chuẩn màn hình</td>
                            <td>HD+</td>
                            </tr>
                            <tr>
                            <td>Độ phân giải</td>
                            <td>Đang cập nhật</td>
                            </tr>
                            <tr>
                            <td>Màu màn hình</td>
                            <td>16 triệu</td>
                            </tr>
                            <tr>
                            <td>Chất liệu mặt kính</td>
                            <td>Gorilla Glass Victus</td>
                            </tr>
                            <tr>
                            <td>Tỷ lệ tương phản</td>
                            <td>Đang cập nhật</td>
                            </tr>
                            <tr>
                            <td>Loại cảm ứng</td>
                            <td>Điện dung đa điểm</td>
                            </tr>
                            <tr>
                            <td>Độ sáng tối đa</td>
                            <td>Đang cập nhật</td>
                            </tr>
                            <tr>
                            <td>Mật độ điểm ảnh</td>
                            <td>388 ppi</td>
                            </tr>
                            <tr>
                            <td>Tần số quét</td>
                            <td>120 Hz</td>
                            </tr>
                            <tr>
                            <td>Độ phủ màu</td>
                            <td>Đang cập nhật</td>
                            </tr>
                            <tr>
                            <td>Tỉ lệ khung hình</td>
                            <td>21:9</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-2">
                        <div className="content-item__title">Camera sau</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Độ phân giải</td>
                            <td>12.0 MP + 12.0 MP + 12.0 MP</td>
                            </tr>
                            <tr>
                            <td>Xóa phông</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Tự động lấy nét</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Toàn cảnh (Panorama)</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Nhận diện khuôn mặt</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Quay Slow Motion</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Làm đẹp video</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Chống rung quang học</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>A.I Camera</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Chế độ chụp chuyên nghiệp</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Zoom quang học</td>
                            <td>Có</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-3">
                        <div className="content-item__title">Bảo mật</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Mở khóa vân tay</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Nhận diện khuôn mặt</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Quét mống mắt</td>
                            <td>Không</td>
                            </tr>
                            <tr>
                            <td>Cảm biến vân tay dưới màn hình</td>
                            <td>Không</td>
                            </tr>
                            <tr>
                            <td>Mở khóa bằng mật mã</td>
                            <td>Có</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-4">
                        <div className="content-item__title">Bộ nhớ RAM</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>RAM</td>
                            <td>12 GB</td>
                            </tr>
                            <tr>
                            <td>RAM Type</td>
                            <td>LPDDR5</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-5">
                        <div className="content-item__title">Lưu trữ</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Bộ nhớ trong</td>
                            <td>256 GB</td>
                            </tr>
                            <tr>
                            <td>Danh bạ lưu trữ</td>
                            <td>Đang cập nhật</td>
                            </tr>
                            <tr>
                            <td>Thẻ nhớ ngoài</td>
                            <td>Không</td>
                            </tr>
                            <tr>
                            <td>Hỗ trợ thẻ nhớ tối đa</td>
                            <td>Không</td>
                            </tr>
                            <tr>
                            <td>Bộ nhớ còn lại</td>
                            <td>Khoảng 223 GB</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-6">
                        <div className="content-item__title">Bộ xử lí</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Phiên bản</td>
                            <td>Snapdragon 865+</td>
                            </tr>
                            <tr>
                            <td>CPU</td>
                            <td>
                                1 x Kryo 585 3.09 GHz + 3 x Kryo 585 2.42 GHz + 4 x Kryo 585
                                1.8 GHz
                            </td>
                            </tr>
                            <tr>
                            <td>Type</td>
                            <td>Octa-Core</td>
                            </tr>
                            <tr>
                            <td>Số nhân CPU</td>
                            <td>8</td>
                            </tr>
                            <tr>
                            <td>Tốc độ tối đa</td>
                            <td>2.73 GHz</td>
                            </tr>
                            <tr>
                            <td>64 Bits</td>
                            <td>Có</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-7">
                        <div className="content-item__title">Graphics</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>GPU</td>
                            <td>Adreno 650</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-8">
                        <div className="content-item__title">Thông tin Pin &amp; Sạc</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Dung lượng pin</td>
                            <td>4500 mAh</td>
                            </tr>
                            <tr>
                            <td>Loại Pin</td>
                            <td>Lithium polymer</td>
                            </tr>
                            <tr>
                            <td>Công nghệ Pin</td>
                            <td>Sạc pin nhanh</td>
                            </tr>
                            <tr>
                            <td>Hỗ trợ sạc không dây</td>
                            <td>Có</td>
                            </tr>
                            <tr>
                            <td>Sạc pin cho thiết bị khác</td>
                            <td>Có</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-9">
                        <div className="content-item__title">Giao tiếp &amp; Kết nối</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Số khe sim</td>
                            <td>1</td>
                            </tr>
                            <tr>
                            <td>Thẻ Sim</td>
                            <td>1 eSIM, 1 Nano SIM</td>
                            </tr>
                            <tr>
                            <td>Băng tần 4G</td>
                            <td>Hỗ trợ</td>
                            </tr>
                            <tr>
                            <td>Băng tần 5G</td>
                            <td>Hỗ trợ</td>
                            </tr>
                            <tr>
                            <td>Wifi</td>
                            <td>
                                Wi-Fi 802.11 a/b/g/n/ac/ax, Dual-band, Wi-Fi Direct, Wi-Fi
                                hotspot
                            </td>
                            </tr>
                            <tr>
                            <td>GPS</td>
                            <td>GPS,Glonass,Beidou,Galileo</td>
                            </tr>
                            <tr>
                            <td>Bluetooth</td>
                            <td>v5.0</td>
                            </tr>
                            <tr>
                            <td>Cổng sạc</td>
                            <td>Type-C</td>
                            </tr>
                            <tr>
                            <td>Hỗ trợ OTG</td>
                            <td>Có</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-10">
                        <div className="content-item__title">Hệ điều hành</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Version</td>
                            <td>Window 10</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="content-item-modal" id="data-11">
                        <div className="content-item__title">Thông tin hàng hóa</div>
                        <table className="content-item__table">
                        <tbody>
                            <tr>
                            <td>Thương hiệu</td>
                            <td>Samsung</td>
                            </tr>
                            <tr>
                            <td>Series</td>
                            <td>Galaxy Fold</td>
                            </tr>
                            <tr>
                            <td>Xuất xứ</td>
                            <td>Việt Nam</td>
                            </tr>
                            <tr>
                            <td>Thời gian ra mắt</td>
                            <td>01/2021</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

    )
}