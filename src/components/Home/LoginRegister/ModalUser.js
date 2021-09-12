import React, {useCallback} from 'react';
import LoginRegister from './LoginRegister';

function ModalUser({isvisible, onCancle,LoginRes, openFormLogin, openFormRegister}) {
	const _onCancle = useCallback(
        () => {
			// isvisible = !isvisible;
            if(onCancle && typeof onCancle === 'function') {
                onCancle();
            }
        },
        [onCancle]
    )
		return (
			<div className={`modal ${isvisible ? 'show': ''}`}>
				<div className="modal_overlay" onClick={_onCancle}></div>
				<div className="modal_body">
					<LoginRegister onCancle={onCancle} LoginRes={LoginRes} openFormLogin={openFormLogin} openFormRegister={openFormRegister}/>
					{/* <Switch>
						<Route exact path='/ModalUser/register' component={SignIn}/>
						<Route exact path='/ModalUser/login' component={SignOut}/>
					</Switch> */}
				</div>
			</div>
		);
	
}

export default ModalUser;
