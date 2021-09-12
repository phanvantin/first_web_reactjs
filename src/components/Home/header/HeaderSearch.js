import React, { Component } from 'react';

class HeaderSearch extends Component {
	render() {
		return (
            <div className="search col l-1">
                <div className="header__search">
                    <input type="text" className="header__search-input" placeholder="Tìm kiếm" />
                    <span><i className="fas fa-search" /></span>
                </div>
			</div>
		);
	}
}

export default HeaderSearch;