import {LIST_PRODUCT} from './action'


const DataProduct = [
    {
        id: 0,
        img: "/img/poco-x3-pro-1.jpg",
        badge: {
            tragop: "Trả góp 0%",
            voucher: "Voucher 2%"
        },
        infoName: "Galaxy Z Fold3 | Z Flip3 5G GẬP ĐÔI LÀ ĐỈNH",
        currentPrice: 5500000,
        descript: [
            {
                id:0,
                datatitle: "màn hình",
                content: "16.0\""
            },
            {
                id:1,
                datatitle: "cpu",
                content: "QUALCOM\""
            },
            {
                id:2,
                datatitle: "ram",
                content: "2G"
            },
        ]
            
    },
    {
        id: 1,
        img: "/img/samsung-galaxy-note20-ultra-2.jpg",
        badge: {
            tragop: "Trả góp 0%",
        },
        infoName: "Samsung Galaxy S21+ 256GB",
        currentPrice: 2600000,
        descript: [
            {
                id:0,
                datatitle: "màn hình",
                content: "16.0\""
            },
            {
                id:1,
                datatitle: "cpu",
                content: "android\""
            },
            {
                id:2,
                datatitle: "ram",
                content: "2G"
            },
        ]
            
    },
    {
        id: 2,
        img: "/img/iphone-12-pro-max-3.jpg",
        badge: {
            tragop: "Trả góp 0%",
            voucher: "Voucher 2%"
        },
        infoName: "MacBook Pro 16 2019 Touch Bar 2.3GHz Core i9 1TB",
        currentPrice: 1700000,
        descript: [
            {
                id:0,
                datatitle: "màn hình",
                content: "16.0\""
            },
            {
                id:1,
                datatitle: "cpu",
                content: "fpt\""
            },
            {
                id:2,
                datatitle: "ram",
                content: "2G"
            },
        ]
            
    },
    {
        id: 3,
        img: "/img/vivo-y53s-2.jpg",
        badge: {
            tragop: "Trả góp 0%",
            voucher: "Voucher 2%"
        },
        infoName: "Vivo Y53s 8GB+3GB - 128GB ",
        currentPrice: 3200000,
        descript: [
            {
                id:0,
                datatitle: "màn hình",
                content: "16.0\""
            },
            {
                id:1,
                datatitle: "cpu",
                content: "QUALCOM\""
            },
            {
                id:2,
                datatitle: "ram",
                content: "2G"
            },
        ]
            
    },
]


const products = (state = DataProduct, action) => {

	switch(action.type){
		case LIST_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default products;