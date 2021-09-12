import React from 'react';
import Toast from './toast';

const OpenToast = () => {
   const showsuccess = ()=>{
    Toast({
       title: 'Success',
       message: 'Chúc mừng bạn đã đăng ký thành công.!',
       type: 'success',
       duration: 2000
   })}
   const showerror = ()=>{
    Toast({
       title: 'Thất bại',
       message: 'Đăng ký thất bại',
       type: 'warning',
       duration: 5000
   })}
    return (
        <>
			<div onClick={showsuccess} className="btn">Show Success</div>
            <div onClick={showerror} className="btn">Show error</div>	
		</>
    );
}
export default OpenToast;