


function ListProduct(list){
    console.log(list)
    return (
        <li className="filter-list__item">
            <div className="filter-item-wrapper item-image">
                <span>
                <i className="far fa-square" />
                </span>
                <img
                alt=""
                src={list.src}
                />
            </div>
        </li>
    )
}               
export default ListProduct            
                                
                                
                                
                                