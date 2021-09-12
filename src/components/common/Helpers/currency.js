export const Currency = (value, currencyUnit, position = "left")=> {
	 
		if(position === "left"){
			return currencyUnit + " " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}else if(position === "right"){
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + " " + currencyUnit;
		}
	}
