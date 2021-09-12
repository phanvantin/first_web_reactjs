

export const ShowTotalPrice= items => {
	var total = 0;
	let lengthItems = items.length;
	if(lengthItems>0) {
		for (let i = 0; i< lengthItems; i++) {
			total += items[i].product.currentPrice * items[i].quantity;
		}
	}
	return total
}