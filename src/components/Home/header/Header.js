import React,{useEffect, useRef} from 'react';

import Logo from './Logo';
import HeaderSearch from './HeaderSearch';
import HeaderCart from './headerCart/HeaderCart';
import HeaderMenu from './headerMenu/headerMenu';


function Header() {
	const scrollHeadtop = useRef();
	useEffect(()=> {
		window.addEventListener('scroll', () => {
		  if(window.scrollY > 0){
			scrollHeadtop.current.classList.add("sticky")
		  }
		  if(window.scrollY < 30) {
			scrollHeadtop.current.classList.remove("sticky")
		  }
		  return () => {
			window.removeEventListener('scroll', ()=> { });
		  }
	   })
	  },[])
		return (
			<header ref={scrollHeadtop}>
				<div className="grid wide">
					<div className="header row">
						<Logo/>
						<HeaderMenu/>
						<HeaderSearch/>
						<HeaderCart/>
					</div>
				</div>
			</header>
		);
	}

export default Header;
