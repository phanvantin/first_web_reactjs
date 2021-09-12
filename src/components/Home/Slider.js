import React, { useEffect } from 'react';




function Slider()  {
	useEffect(()=>{
		var counter = 2;
		let sI = setInterval(function(){
			document.getElementById('radio' + counter).checked = true;
			counter++;
			if(counter > 3){
			counter = 1;}
		},3000);
		return () => {
		clearInterval(sI);
		}
	},[])
	return (
		<div className="slider">
			<div className="slides">
				<input defaultChecked type="radio" name="radio-btn" id="radio1" />
				<input type="radio" name="radio-btn" id="radio2" />
				<input type="radio" name="radio-btn" id="radio3" />
				<div className="slide first">
					<img src="./img/banner4.jpeg" alt="" />
				</div>
				<div className="slide">
					<img src="./img/banner5.webp" alt="" />
				</div>
				<div className="slide last">
					<img src="./img/banner1.jpg" alt="" />
				</div>
				<div className="navigation-auto">
					<div className="auto-btn1" />
					<div className="auto-btn2" />
					<div className="auto-btn3" />
				</div>
			</div>
			<div className="navigation-manual">
				<label htmlFor="radio1" className="manual-btn" />
				<label htmlFor="radio2" className="manual-btn" />
				<label htmlFor="radio3" className="manual-btn" />
			</div>
		</div>
	);
}

export default Slider;
