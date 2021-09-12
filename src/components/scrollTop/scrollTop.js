import React, { useEffect,useRef } from 'react';
// import * as Scroll from 'react-scroll';

import './scrollTop.css';
var Scroll = require('react-scroll');

const ScrollTop = () => {
  // let scroll    = Scroll.animateScroll;
    // const [visible,setVisible] = useState(false);
    const scrollOff = useRef();
    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (scrolled > 300){
    //       setVisible(true)
    //     } 
    //     else if (scrolled <= 300){
    //       setVisible(false)
    //     }
    //   };
      
    //   const scrollToTop = () =>{
    //     window.scrollTo({
    //       top: 0, 
    //       behavior: 'smooth'
    //     });
    //   };
      
    //   window.addEventListener('scroll', toggleVisible);
    useEffect(()=> {
        window.addEventListener('scroll', () => {
          if(window.scrollY > 300){
            // setVisible(true);
            scrollOff.current.classList.add("active");

          }else {
            // setVisible(false);
            scrollOff.current.classList.remove("active");
          }
          return () => {
            window.removeEventListener('scroll', ()=> { });
          }
       })
      },[])
    // const scrolltotop = () => window.scrollTo({ top:0, behavior: 'smooth' });
    const scrolltotop = () =>Scroll.animateScroll.scrollToTop({
      duration: 300,
      smooth: true,
    });

    return (
        <div ref={scrollOff} onClick={scrolltotop} className ="scrollTop">
            <span><i className="fas fa-arrow-alt-circle-up"></i></span>
        </div>
    )
}
export default ScrollTop;