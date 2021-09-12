import React, {useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import ModalUser from '../LoginRegister/ModalUser';
import NotifyList from './NotifyList';
import { actSetCurrentUser, actSetToken } from '../../../store/auth/actions'



function HeaderTop() {
  const currentUser = useSelector(state => state.Auth.currentUser)
	const dispatch = useDispatch();
	const [isvisible, setIsvisible] = useState(false)
	const [LoginRes, setLoginRes] = useState(1);
	const onCancle = useCallback(
		() => {
		  setIsvisible(false);
		},[]
	  ) 
	  const openFormLogin = ()=> {
		setIsvisible(true)
		setLoginRes(1)
	  }
	  const openFormRegister = ()=> {
		setIsvisible(true)
		setLoginRes(2)
	  }
		function handleLogout(evt) {
			evt.preventDefault()
			dispatch(actSetToken(''))
			dispatch(actSetCurrentUser(null))
		}
	return (
		<div className="grid wide header-top">
			<div className="phone">
				<p>Phone:</p>
				<NavLink to="/">0905556468</NavLink>
			</div>
			<ul className="notify-header">
				<li className="notify-header_right">
					<a href="##" className="notify-header__item">
					<i className="far fa-bell"></i>Thông báo <span>5</span>
					</a>
					<NotifyList/>
				</li>
			{
				!currentUser 
              ? (
								<li className="acount">
									<span className="acount-1 acount--saparate " onClick={openFormLogin}>Đăng ký</span>
									<span className="acount-1" onClick={openFormRegister}>Đăng nhập</span>
								</li>
              ) : (
								<li className="acount">
                  <Link to="/dashboard"><i className="icons ion-person" /> { currentUser.nickname }</Link>
                  <ul>
                    <li><a href="/" onClick={handleLogout}>Đăng xuất</a></li>
                  </ul>
                </li>
              )
        }
				
			</ul>
			<ModalUser isvisible={isvisible} onCancle={onCancle} LoginRes={LoginRes} openFormLogin={openFormLogin} openFormRegister={openFormRegister}/>
      <div id="toast"></div>
		</div>
	);
}

export default HeaderTop;
