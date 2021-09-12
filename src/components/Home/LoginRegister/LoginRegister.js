import React, {useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import cls from 'classnames'


import Validator from './Validator';
import { actLoginAsync,actRegisterAsync } from '../../../store/auth/actions'
import IconError from '../../common/iconError/iconErr';
import './rulepass.css'


function LoginRegister({LoginRes,openFormLogin,openFormRegister,onCancle}) {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
  const [localType, setLocalType] = useState('password'); 

	const classIcon = useMemo(() => {
    return cls('toggle-password' , {
      'ion-eye': localType === 'text',
      'ion-eye-disabled': localType === 'password',
    })
  }, [ localType ])
	const toggleShowPassword = useCallback(() => {
    if (localType === 'password') {
      setLocalType('text')
    } else {
      setLocalType('password')
    }
  }, [ localType ])

	const _onCancle = useCallback(
        (e) => {
            if(onCancle && typeof onCancle === 'function') {
				e.preventDefault();
                onCancle();
            }
        },
        [onCancle]
    )
  const intoRegister = () => {
	if(openFormRegister && typeof openFormRegister === 'function') {
		openFormRegister();
	}
  };
  const intoLogin = () => {
	if(openFormLogin && typeof openFormLogin === 'function') {
		openFormLogin();
	}
  }
Validator({
	form: '#form-1',
	formGroupSelector: '.auth-form__group',
	errorSelector: '.form-message',
	errorIcon: '.notifiSvg',
	rules: [
		Validator.isRequired('#email'),
		Validator.isRequired('#userName', 'vui lòng nhập vào tên đầy đủ của bạn'),
		Validator.isEmail('#email'),
		Validator.isRequired('#password'),
		Validator.minLength('#password', 6),		
	],
	onSubmit: function(data) {
	  if (loading) return

		const email = data.email
    const username = data.userName
		const password = data.password
    setLoading(true)
    dispatch(actRegisterAsync(email,username, password))
      .then(res => {
        if (res.ok) {
          history.push('/')
					onCancle();
					const username = data.email
					const password = data.password
					dispatch(actLoginAsync(username, password))
        } else {
          alert(res.error)
        }
      })
      .finally(() => setLoading(false))
	}
});
Validator({
	form: '#form-2',
	formGroupSelector: '.auth-form__group',
	errorSelector: '.form-message',
	errorIcon: '.notifiSvg',
	rules: [
		Validator.isRequired('#email1'),
		// Validator.isEmail('#email1'),
		Validator.minLength('#password1', 6),
	],
	onSubmit: function(data) {
	  if (loading) return



    const username = data.email
		const password = data.password
    setLoading(true)
    dispatch(actLoginAsync(username, password))
      .then(res => {
        if (res.ok) {
          history.push('/')
					onCancle();
        } else {
          alert(res.error)
        }
      })
      .finally(() => setLoading(false))
	}
});
		return (
			<div className={`auth-form ${LoginRes === 1 ? 'login': 'register'}`} >
				<div className="auth-form__container">
					<div className="auth-form__header">
						<h3 className={LoginRes === 1 ? "btnheader-active" : "btnheader"} onClick={intoLogin}>Đăng ký</h3>
						<h3 className={LoginRes === 2 ? "btnheader-active" : "btnheader"} onClick={intoRegister}>Đăng nhập</h3>
					</div>
					{/* <div className={LoginRes === 1 ? "" : "formdisable"}> */}
				<form id="form-1" >
						
						<div className="auth-form__form">
							<div className="auth-form__group">
								<div className="input-group">
									<input id="email" type="text" name="email" className="auth-form__input" placeholder="Emai của bạn" />
									<span className="notifiSvg"><IconError/></span>
								</div>
								<span className="form-message"></span>
							</div>
							<div className="auth-form__group">
								<div className="input-group">
									<input id="userName" type="text" name="userName" className="auth-form__input" placeholder="UserName của bạn" />
									<span className="notifiSvg"><IconError/></span>
								</div>
								<span className="form-message"></span>
							</div>
							<div className="auth-form__group">
								<div className="input-group">
									<input id="password" type={localType} name="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
									<span className="notifiSvg"></span>
									<span className="notifiSvg-show"><i className={classIcon} onClick={toggleShowPassword} ></i></span>
								</div>
								<span className="form-message"></span>
							</div>
							<ul className="password-rules">
								<li className=""><span className="svgnam0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#88929e" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/></svg></span><span className="passCondition0">Sử dụng ít nhất 6 ký tự</span></li>
								<li className=""><span className="svgnam1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#88929e" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/></svg></span><span className="passCondition1">Bao gồm ít nhất một chữ cái</span></li>
							</ul>
						</div>
						<div className="auth-form__aside">
							<p className="auth-form__policy-text">
								Bằng việc đăng ký, bạn đã đồng ý với shoppe về
								<a href="/" className="auth-form__text-link">điều khoản dịch vụ</a> &amp;
								<a href="/" className="auth-form__text-link">Chính sách bảo mật</a>
							</p>
						</div>
						<div className="auth-form__controls">
							<button onClick={_onCancle} className="btn btn--normal btn-back">TRỞ LẠI</button>
							<button className="btn btn--primary">ĐĂNG KÝ</button>
						</div>
						<div className="auth-form__social">
							<a href="/" className="btn btn--fb btn--size-s btn--with-icon">
								<i className="cocial-icon fab fa-facebook-square" />
								<span className="text-icon">Kết nối với Facebook</span>
							</a>
							<a href="/" className="btn btn--gg btn--size-s btn--with-icon">
							<i className="cocial-icon fab fa-google" />
							<span className="text-icon">Kết nối với Google</span>
						</a>
						</div>
					</form>
					{/* </div> */}


					{/* <div className={LoginRes === 2 ? "" : "formdisable"}> */}

							<form id="form-2"> 
						<div className="auth-form__form">
							<div className="auth-form__group">
							<div className="input-group">
								<input id="email1" type="text" name="email" className="auth-form__input" placeholder="Emai của bạn" />
								<span className="notifiSvg"><IconError/></span>
							</div>
								<span className="form-message"></span>
							</div>
							<div className="auth-form__group">
								<div className="input-group">
									<input id="password1" type={localType} name="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
									<span className="notifiSvg"></span>
									<span className="notifiSvg-show"><i className={classIcon} onClick={toggleShowPassword} ></i></span>
								</div>
								<span className="form-message"></span>
							</div>
						</div>
						<div className="auth-form__aside">
							<div className="auth-form__help">
								<a href="/" className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
								<span className="auth-form__help-separate" />
								<a href="/" className="auth-form__help-link">Cần trợ giúp?</a>
							</div>
						</div>
						<div className="auth-form__controls">
							<button className="btn btn--normal btn-back">TRỞ LẠI</button>
							<button className="btn btn--primary">ĐĂNG NHẬP</button>
						</div>
						<div className="auth-form__social">
							<a href="/" className="btn btn--fb btn--size-s btn--with-icon">
								<i className="cocial-icon fab fa-facebook-square" />
								<span className="text-icon">Đăng nhập với Facebook</span>
							</a>
							<a href="/" className="btn btn--gg btn--size-s btn--with-icon">
								<i className="cocial-icon fab fa-google" />
								<span className="text-icon">Đăng nhập với Google</span>
							</a>
						</div>
						</form>
					{/* </div> */}
				</div>
			</div>
		);
}

export default LoginRegister;
