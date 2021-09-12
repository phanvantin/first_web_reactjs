import React, { useState } from 'react';
import './FilterProduct.css'
import { useDispatch, useSelector } from 'react-redux';
import Container from './../common/reponsive/container';
import Row from './../common/reponsive/row';
import Col from './../common/reponsive/col';
import SectionContent from './../Home/section/sectionContent';
import {ProductData} from './ProductData';
import {Sort} from './ProductData';
import { actSetValueCate,actRemovlue,actSetValueCateNull } from "../../store/categories/actions"


function Filterproduct() {
    const dispatch = useDispatch();
    const categoryValue = useSelector(state=>state.Categories.valueCategory)
    // const [isSelect,setIsSelect] = useState([])
    const [isSort,setIsSort] = useState(false)
    const [valueSort,setValueSort]=useState('Bán chạy nhất')
    const handlechange =(checked,name,valueCate)=>{
        if (checked) {
          if(name==="allCheck"){
          dispatch(actSetValueCateNull())
          }else
          
          dispatch(actSetValueCate(valueCate))
        } else {
          if(name==="allCheck"){
            dispatch(actSetValueCateNull())
            }else
          dispatch(actRemovlue(valueCate))
        }
      }
    const handleActiveSort =(value)=>{
        setValueSort(value)
    }
	return (
		<div className="main-wrapper">
			<Container className="main-cart" wide>
                <Row>
                    <Col l={3}>
                        <div className="left-content">
                            <div className="left-content__filter">
                                <div className="filter-title">Hãng sản xuất</div>
                                <ul className="filter-list">
                                    <label className="ass1-checkbox">
                                        <input type="checkbox" checked={categoryValue.length===0} onChange={(e)=>handlechange(e.target.checked,e.target.name)} name="allCheck" id="all-checked"/>
                                        <span />
                                        <p>Tất cả</p>
                                        </label>
                                        {
                                        ProductData.map((category)=>{
                                            return (
                                            <label key={category.id} className="ass1-checkbox">
                                                <input type="checkbox" checked={categoryValue.includes(category)} name={category.text} onChange={(e)=>handlechange(e.target.checked,e.target.name,category)}/>
                                                <span />
                                                <p>{category.text}</p>
                                            </label>
                                            )
                                        })  
                                    }
                                    {/* {
                                        ProductData.map((list,index) => { 
                                            return (
                                                <li key={index} className="filter-list__item">
                                                <div onClick={()=>handleselected(list.id)} className="filter-item-wrapper item-image">
                                                    <span>
                                                    <i className={`${isSelect === list.id ? 'fas fa-check-square': 'far fa-square'}`} />
                                                    </span>
                                                    <img
                                                    alt=""
                                                    src={list.src}
                                                    />
                                                </div>
                                            </li>
                                            )
                                        })
                                    } */}
                                </ul>
                            </div>
                            

                        </div>
                    </Col>
                    <Col l={9}>
                        <div className="right-content">
                            <div className="right-content__result">
                                <div className="result-title"><span>Kết quả tìm thấy</span><span>(328 sản phẩm)</span></div>
                                    <div className="result-tags"><span>Lọc theo: </span>
                                    {
                                        categoryValue.length ===0 ? <span className="tag-result-all">Tất cả </span> :
                                        (<>
                                        {categoryValue.map((catevl)=><span key={catevl.id} onClick={()=>dispatch(actRemovlue(catevl))}>{catevl.text}<i className="fas fa-times" /></span>)}
                                        
                                        <span onClick={()=>dispatch(actSetValueCateNull())} className="tag-delete-all">Xóa tất cả</span>
                                        </>
                                        )
                                    }
                                    </div>
                            </div>
                            <div className="right-content__product">
                                <div className="right-content-sort">
                                    <div onClick={()=>setIsSort(!isSort)} className="sort-wrapper">
                                        <div className="sort-button">
                                        {valueSort}
                                            <i className="fas fa-caret-down" />
                                        </div>
                                        <ul className={isSort ? 'sort-list active' : 'sort-list'}>
                                            {
                                                Sort.map((sort,i)=><li key={i} onClick={()=>handleActiveSort(sort)} className="sort-list__item">{sort}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <SectionContent l={4}/>
                                <div className="btn-see-more"><span>Xem thêm <b>20</b> sản phẩm</span></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
		</div>
	);
}

export default Filterproduct;