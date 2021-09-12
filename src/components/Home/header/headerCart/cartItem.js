import {useDispatch} from 'react-redux';
import { actDeleteItem } from '../../../../store/shopcart/action';
import {Link} from 'react-router-dom';
import {Currency} from '../../../common/Helpers/currency';
import {ShowTotalPrice} from '../../../common/Helpers/showTotalPrice'



export default function CartItems({items}) {
    // console.log(items)
	// function showItem(items) {
	// 	let xhtml = null;
	// 	if (items.length>0) {
			
	// 	}
	// }
    const dispatch = useDispatch();

    const handleDelete = item => {
        dispatch(actDeleteItem(item))
    }
    

    return (<>
        <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
        <ul className="header__cart-list-item">
            {
                items.map((item,index)=>{
                    // function showItem(item) {
                    //     const xhtml = null;
                    //     if(item.product.badge.tragop && item.product.badge.voucher === false) { 
                    //        xhtml= <p>{item.product.badge.tragop} </p>
                        
                    //     }
                    //     return xhtml
                    //     if(item.product.badge.voucher && item.product.badge.voucher) {<p>{item.product.badge.tragop}- {item.product.badge.voucher}</p>}
                    // }
                    return (
                        <li key={index} className="header__cart-item">
                            <img src={item.product.img} alt="" className="header__cart-img"/>
                            <div className="header__cart-info">
                                <div className="cart__item-head">
                                    <h5 className="cart__item-name">{item.product.infoName}</h5>
                                    <div className="cart__item-descript">
                                        <span className="cart__item-price">{Currency(item.product.currentPrice, "USD", "right")}</span>
                                        <span className="cart__item-multiply">x</span>
                                        <span className="cart__item-qnt">{item.quantity}</span>
                                    </div>
                                </div>
                                <div className="cart__item-body">
                                    
                                {item.product.badge.voucher ? <p>{item.product.badge.tragop} {"-" + item.product.badge.voucher}</p> : <p>{item.product.badge.tragop}</p> }
                            
                                    <span onClick={()=>{handleDelete(item)}} className="cart__item-remove">Xóa</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        
        <div className="cart__footer">
            <div className="cart__footer-total">
                <span>Tổng cộng:</span><span>{Currency(ShowTotalPrice(items), "USD", "right")}</span>
            </div>
            <Link className="btn btn--primary" to="/cart">Xem Giỏ Hàng</Link>
        </div>
        </>
    )
}