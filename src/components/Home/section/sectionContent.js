
import Col from './../../common/reponsive/col';
import Row from './../../common/reponsive/row';
import {useDispatch, useSelector} from 'react-redux';
import {Currency} from '../../common/Helpers/currency';
import {actAddToCart} from '../../../store/shopcart/action';
import Toast from '../../toast/toast'




function SectionContent({l}) {
    const DataProduct = useSelector(state => state.Products)
    const dispatch = useDispatch();
    const handleAddToCart=(product)=>{
        dispatch(actAddToCart(product,1))
        Toast({
            title: 'Thêm thành công',
            message: `${product.infoName}+" đã được thêm vào giỏ hàng"`,
            type: 'success',
            duration: 2000
        })
    }
    return (
        <div className="section-content">
            <Row noGutters>
                {
                    DataProduct.map((data, index)=> {
                        return (
                            <Col key={index} l={l}>
                                <div className =" product-content-wrapper">
                                    <div className="product-img">
                                        <div className="product-img__link">
                                            <img src={data.img} alt=''></img>
                                        </div>
                                        <div className ="badge-wrapper">
                                            <span className="badge badge-success">{data.badge.tragop}</span>
                                            {data.badge.voucher && <span className="badge badge-error">{data.badge.voucher}</span>}
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-info__name">
                                            <a href='##'>{data.infoName}</a>
                                        </div>
                                        <div className="product-info__price">
                                            <span className ="price-discount">{Currency(data.currentPrice, "USD", "right")}</span>
                                        </div>
                                        <div className="product-info__description">
                                            <ul className="description-list">
                                                {
                                                    data.descript.map((des,index)=>{
                                                        return (<div key={index}>
                                                            <li className="description-list__item" data-title ={des.datatitle}>{des.content}</li>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-btn">
                                        <button onClick={()=>{handleAddToCart(data)}} className="product-btn__addcart">Thêm vào giỏ</button>
                                        <button className="product-btn__view">Xem nhanh</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default SectionContent