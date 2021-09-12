
import React, { useCallback, useEffect, useState } from 'react';

import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import { actDeleteItem,actUpdateQnt } from '../../store/shopcart/action';
import {Currency} from '../common/Helpers/currency';
import {ShowTotalPrice} from '../common/Helpers/showTotalPrice';
import './cart.css';
import Container from './../common/reponsive/container';
import Row from './../common/reponsive/row';
import Col from './../common/reponsive/col';
import Modal from '../common/Modal/Modal';
import IconError from '../common/iconError/iconErr';


function CartProduct() {
	const items = useSelector(state=>state.Carts);
    const dispatch = useDispatch();
    const [isVisible, setIsvisible] = useState(false);
    const [isSort,setIsSort] = useState(false)
    const [valueSort,setValueSort]=useState('Đen')
    const Sort = [
        'Đen',
        'Đỏ',
        'Trắng',
        'Xám'
    ]
  const onCancle = useCallback(
    () => {
      setIsvisible(false);
    },[]
  ) 
  let injectedProps = {
    isVisible,
    isHeader: true, 
    onCancle,
    title: 
    <IconError color="yellow" width={32} height={32}/>,
    renderFooter: ()=> {
      return (
        <div className="footer-btn">
            <button className ="footer-btn1" onClick={onCancle}>
            <div className = "btn">Trở lại</div>
            </button>
        </div>
      )
    }
    }

    const handleDelete = item => {
        dispatch(actDeleteItem(item))
    }
    
    // let inputs = document.querySelectorAll('.name1')
    // Array.from(inputs).forEach(function (input) {
    //     if(input.value=== ""){
    //         input.onblur = function(){
    //         setIsvisible(true)
    //         }
    //     }
    // }
    // );
    useEffect(()=>{
        const inputs = document.querySelectorAll('.name1')
        if(isVisible) {
            Array.from(inputs).forEach(function (input) {
                input.disabled = true;
            });
        } else {
            Array.from(inputs).forEach(function (input) {
                input.disabled = false;
            });
        }
    },[isVisible])
            
    
    const handleChange = (product) => {return (e)=> {
        if(Number(e.target.value) === 0) {
            dispatch(actUpdateQnt(product,1))
        }else if (!Number(e.target.value) && Number(e.target.value) !== 0){
            setIsvisible(true);
            
        }
        else {
            Number(e.target.value) &&
            dispatch(actUpdateQnt(product,Number(e.target.value)))
        }
    }
    }
    const handleUpdateQnt =(product,quantity)  =>{
        if(quantity>0) {
            dispatch(actUpdateQnt(product,quantity))
        }
    }
    const handleActiveSort =(value)=>{
        setValueSort(value)
    }

	return (
		<div className="main-wrapper">
            <Modal {...injectedProps}>
                <p className="text-modal">
                Vui lòng nhập số lượng
                </p>
            </Modal>
			<Container className="main-cart" wide>
                {
                    items.length>0 ?
                    <Row>
                        <Col l={9}>
                        <div className="cart-product-title">
                            <span>Giỏ hàng</span><span>({items.length} sản phẩm)</span>
                        </div>
                        {
                            items.map((item,index)=> {
                                return (
                                    <div key={index} className="cart-product-inner">
                                        <div className="cart-product__group">
                                                <div className="group-content">
                                                        <div className="group-content__img"> 
                                                                <img src={item.product.img} alt=""></img>
                                                        </div>
                                                        <div className="group-content__info">
                                                                <a className="info-name" href="##">
                                                                        <span>{item.product.infoName}</span>s
                                                                </a>
                                                                <div className="info-spec">
                                                                    <div onClick={()=>setIsSort(!isSort)} className="c-dropdown">
                                                                            <div className="c-dropdown-button">{valueSort}<span><i className="fas fa-caret-down"></i></span></div>
                                                                            <div className={`c-dropdown-menu ${isSort ? 'active': ''}`}>
                                                                                <ul className="menu-list">
                                                                                {
                                                                                    Sort.map((sort,i)=><li key={i} onClick={()=>handleActiveSort(sort)} className="menu-item">{sort}</li>)
                                                                                }
                                                                                </ul>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="group-content__quanlity">
                                                                <div className="quanlity-button"><div className="button-group"><span onClick={()=>{handleUpdateQnt(item.product,item.quantity - 1)}} className={item.quantity<2 ? "disable" : ""}>-</span><input className="name1" onChange={handleChange(item.product)} type="text" value={item.quantity>0 ? item.quantity : ""} /><span onClick={()=>{handleUpdateQnt(item.product,item.quantity + 1)}}>+</span></div></div>
                                                                <div onClick={()=>{handleDelete(item)}} className="quanlity-remove"><span><i className="fas fa-trash-alt" /></span>Xóa</div>
                                                        </div>
                                                        <div className="group-content__price">
                                                                <div className="discount-price">{Currency(item.product.currentPrice, "USD", "right")}</div>
                                                                <div className="combo-normal-price"><span>50.000.000 ₫</span><span>-2%</span></div>
                                                        </div>
                                                </div>
                                                <div className="group-discount">
                                                        <div className="group-discount__desc">Mã Khuyến Mãi</div>
                                                        <div className="group-discount__small-list">
                                                                <div className="small-list-wrapper">
                                                                        <i className="semicircle left" />
                                                                        <i className="semicircle right" />
                                                                        <div className="content">Đã giảm 100k</div>
                                                                </div>
                                                        </div>
                                                        <div className="group-discount__see-more">
                                                                <span><i className="fas fa-chevron-down" /></span>
                                                        </div>
                                                </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </Col>
                        <Col l={3} className='cart-total-wrapper'>
                        <div className="cart-total-header">
                            <div className="header-title">
                                <span className="header-title__left">Mã khuyến mãi</span>
                                <div className="header-title__right">
                                <span>
                                    Có thể chọn 2 <i className="far fa-question-circle" />
                                </span>
                                <div className="small-modal">
                                    Áp dụng tối đa 1 mã giảm giá sản phẩm và 1 mã vận chuyển
                                </div>
                                </div>
                            </div>
                            <div className="header-content">
                                <input type="text" placeholder="Nhập mã khuyến mãi" />
                                <button className="btn btn--primary">Áp dụng</button>
                            </div>
                        </div>
                        <div className="cart-total-body">
                            <ul className="body-price-list">
                                <li className="body-price-item">
                                <span>Tạm tính</span>
                                <span>511.000đ</span>
                                </li>
                                <li className="body-price-item">
                                <span>Giảm giá</span>
                                <span>-100.000</span>
                                </li>
                            </ul>
                            <div className="body-price-total">
                                <div className="price-total-title">Thành tiền</div>
                                <div className="price-total-result">
                                <span>{Currency(ShowTotalPrice(items), "USD", "right")}</span>
                                <span>(Đã bao gồm VAT nếu có)</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total-footer">
                            <a className="btn btn--primary" href="/payment">Tiến hành đặt hàng</a>
                        </div>
                        </Col>
                    </Row>
                    :
                    <div className="cart-null-wrapper">
                        <img alt="" src="/img/cartnull.png"></img>
                        <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        <Link className="btn btn--primary" to="/">Tiếp tục mua sắm</Link>
                    </div>
                }
            </Container>
		</div>
	);
}

export default CartProduct;