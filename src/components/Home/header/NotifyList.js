import './headerNotify.css'
export default function NotifyList() {
	return (
        <div className="header_notify">
        <div className="header_notify-header">
          <h3>Thông báo mới nhận</h3>
        </div>
        <ul className="header_notify-list">
          <li className="header_notify-item header_notify-link--viewed">
            <a href="##" className="header_notify-link ">
              <img src="img/vivo-y53s-2.jpg" alt="" className="header_notity-img" />
              <div className="header_notify-info">
                <span className="header_notify-name">iPhone 12 Pro Max 128GB</span>
                <span className="header_notify-description">“Trùm cuối” của dòng iPhone 12 đã xuất hiện. iPhone 12 Pro Max là chiếc iPhone có màn hình lớn nhất từ trước đến nay, mang trên mình bộ vi xử lý mạnh nhất, camera đẳng cấp pro cùng kết nối 5G siêu tốc, cho bạn những trải nghiệm tuyệt vời chưa từng có.
                </span>
              </div>
            </a>
          </li>
          <li className="header_notify-item header_notify-link--viewed">
            <a href="##" className="header_notify-link">
              <img src="/img/macbook-pro-16.png" alt="" className="header_notity-img" />
              <div className="header_notify-info">
                <span className="header_notify-name">Oppo Reno6 5G</span>
                <span className="header_notify-description">Sẵn sàng bật tung cảm xúc cùng OPPO Reno6 5G, chiếc điện thoại sở hữu thiết kế đẳng cấp siêu mỏng nhẹ, camera chụp chân dung Bokeh Flare độc đáo và trên hết là kết nối mạng 5G siêu tốc, cùng bạn kết nối tương lai.
                </span>
              </div>
            </a>
          </li>
          <li className="header_notify-item header_notify-link--viewed">
            <a href="##" className="header_notify-link">
              <img src="/img/poco-x3-pro-1.jpg" alt="" className="header_notity-img" />
              <div className="header_notify-info">
                <span className="header_notify-name">Xiaomi Redmi 10 4GB-128GB</span>
                <span className="header_notify-description">Dòng điện thoại Redmi yêu thích của bạn đã quay trở lại, Redmi 10 với bộ tứ camera 50MP AI đột phá, màn hình 90Hz siêu mượt và cấu hình “phá đảo” trong tầm giá, chắc chắn sẽ tiếp tục là lựa chọn hàng đầu ở phân khúc smartphone giá rẻ.
                </span>
              </div>
            </a>
          </li>
        </ul>
        <footer className="header_notify-footer">
          <a href="##" className="header_notify-footer-btn">Xem tất cả</a>
        </footer>
      </div>
      
    )
	
}
