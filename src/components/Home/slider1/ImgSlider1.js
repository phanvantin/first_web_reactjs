
import React, { useEffect, useState, useRef} from 'react';
import imgData from './imgData';
import { Swiper} from 'swiper/react';


function ImgSlider1({autoPlay}) {
  const [current, setCurrent] = useState(0);
  const [isSelect, setIsSelect] = useState(0);
  const imgElm = useRef();
  const rmElm = useRef();
  
  useEffect(()=>{
		let interval = setInterval(function(){
      setCurrent(current +1);
      setIsSelect(current)
      if(current===imgData.length-1){setCurrent(0)}
		},autoPlay *1000);
    return () => {
      clearInterval(interval);
      }

	},[current,isSelect,autoPlay])
  
  useEffect(() => {
    const slideselm = document.querySelector('.banner-left--imgs');
    slideselm.style.width = imgData.length * 780 + 'px'
    rmElm.current.style.width = imgData.length * 156 + 'px'
  },[])
  // useEffect(() => {
  //   const $ = document.querySelector.bind(document);
  //   $('.content-item.active').scrollIntoView({
  //   behavior: "smooth",
  //   block: "nearest",
  //   inline: "nearest"
  //   });
  // },[current])

  // handleScroll = () => {
  //   const { index, selected } = this.props
  //   if (index === selected) {
  //     setTimeout(() => {
  //       this.childDiv.current.scrollIntoView({ behavior: 'smooth' })
  //     }, 500)
  //   }
  useEffect(() => {
    // let newTrst = styleData.filter((style,index) => current === index)
    // transform: newTrst[0].transform,
    Object.assign(imgElm.current.style, {
      transform: `translateX(-${current * 780}px)`,
      transition: 'all 500ms ease 0s'
    });
    let i;
    if (current<4) {
      i = 0;
    }
    if (current>3) {
      i = current-3
    }
    if (current===imgData.length-1) {
      i = current-4
    }
    // var contentelm = document.querySelector('.banner-left--contents');
    // let contentstrs = imgData.filter((style) => current === style.id)
    // transform: contentstrs[0] && contentstrs[0].transformConten,
    Object.assign(rmElm.current.style, {
    transform: `translateX(-${i * 156}px)`,
    transition: 'all 500ms ease 0s'
    });
    setIsSelect(current)
  },[current,isSelect])

	function handlenext() {
    setCurrent(current + 1);
    if(current>imgData.length-2){setCurrent(0)}
  }
  function handleprev() {
    setCurrent(current - 1 );
    if(current<=0){setCurrent(imgData.length-1)}
    // const removeActive = document.getElementsByClassName("content-item");
    // for (let i = 0; i < removeActive.length; i++) {
    //   removeActive[i].classList.remove("active");
    // }
    // var slideselm = document.querySelector('.banner-left--imgs');
    //   let newTrst = styleData.filter((style,index) => current === index)
    //   return Object.assign(imgElm.current.style, {
    //     transform: newTrst[0].transform,
    //     transition: 'all 500ms ease 0s'
    //   });
    }
  function handleselected(id) {
    setIsSelect(id);
    setCurrent(id);
    // let newTrst = styleData.filter((style,index) => index === id)
    // transform: newTrst[0].transform,
    // var slideselm = document.querySelector('.banner-left--imgs');
    // Object.assign(slideselm.style, {
    //   transform: `translateX(-${current * 780}px)`,
    //   transition: 'all 500ms ease 0s'
    // });
    // if(id === 0 || id === 1 || id === 2 || id === 3) {
    //   setValue(value)
    // }else {
    //   setValue(id)
    // }
    // // var contentelm = document.querySelector('.banner-left--contents');
    //   let contentstrs = imgData.filter((style,index) => id === style.id)
    //   Object.assign(rmElm.current.style, {
    //   // transform: `translateX(-${value * 156}px)`,
    //   transform: contentstrs[0].transformConten,
    //   transition: 'all 500ms ease 0s'
    // });
  };
  return (
    <>
    <div className="banner-left__img">
      <div ref={imgElm} className="banner-left--imgs">
        {
          imgData.map((src, index)=>{
            return (<div key={index} className="image-wrapper">
            <a href="##" className={`image-item ${+current === index ? 'active': ''}`}>
              <img alt="" src={src.src}/>
            </a>
          </div>)
          })
        }
      </div> 
      <span onClick={()=>handleprev()} className="banner-left--btn banner-left__prev">
      <i className="fas fa-angle-double-left"></i>
      </span>
      <span onClick={handlenext} className="banner-left--btn banner-left__next">
      <i className="fas fa-angle-double-right"></i>
      </span>
    </div>
    <div className="banner-left__content">
    <Swiper slidesPerView={4}>
      <ul ref={rmElm} className="swiper-wrapper banner-left--contents">
        {
          imgData.map((content,index)=> {
            return <li key={index} onClick={()=>handleselected(content.id)} className={`swiper-slide content-item ${current === content.id || content.id === isSelect ? 'active': ''}`}>{content.content}</li>
          })
        }
      </ul>
      </Swiper>
    </div>
</>
  );
}

export default ImgSlider1;



// switch (current) {
    //   case 1:
    //     Object.assign(slideselm.style, {
    //       transform: 'translateX(-2340px)',
    //       transition: trst
    //     });
    //     break;
    //     case 2:
    //       Object.assign(slideselm.style, {
    //         transform: 'translateX(-1560px)',
    //         transition: trst
    //       });
          
    //       break;
    //       case 3:
    //         Object.assign(slideselm.style, {
    //           transform: 'translateX(-780px)',
    //           transition: trst
    //         });
    //         break;
    //       case 4:
    //         Object.assign(slideselm.style, {
    //         transform: 'translateX(0)',
    //         transition: trst
    //         });
    //     break;
    //   case 5:
    //     Object.assign(slideselm.style, {
    //     transform: 'translate3d(-3443px, 0, 0)',
    //     transition: 'all 500ms ease 0s'
    //     });
    //     break;
    //   default:
    //     break;
    // }