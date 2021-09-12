import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './headerMenu.css'

const RenderMenuItems =menuItem=>{
	const jsxMenu = (
		<li key={menuItem.ID}>
      <Link to={menuItem.url}>{ menuItem.title }</Link>

      {
        menuItem.child_items.length !== 0 && (
          <ul>
            { menuItem.child_items.map(RenderMenuItems) }
          </ul>
        )
      }
    </li>
	)
	return jsxMenu
}

export default function HeaderMenu(){
  const mainMenu = useSelector(state => state.Menus.mainMenu)
  return (
            <div className="nav col l-8">
                <ul className="navbar__list">
                    {
                        mainMenu.map(RenderMenuItems)
                    }
                </ul>
			</div>
		);
	}       
