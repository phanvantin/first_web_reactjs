import React, { useCallback, useEffect } from 'react';

import IconError from '../iconError/iconErr';
import './Modal.css';

export default function Modal({ 
    title = <IconError/>,
    children, 
    width = 324,
    isHeader=true,
    isVisible = true,
    onCancle,
    renderFooter 
}) 
{

    const _onCancle = useCallback(
        () => {
            if(onCancle && typeof onCancle === 'function') {
                onCancle();
            }
        },
        [onCancle]
    )
    
    useEffect(() => {
        document.addEventListener('keyup', (e)=> {
            if(isVisible && e.keyCode === 27 ) {
                _onCancle();
            }
        })
        return () => {
        document.removeEventListener('keyup', ()=> { });
    }
    },[_onCancle,isVisible])
    useEffect(()=> {
        if(isVisible) {
            document.querySelector("body").classList.add("tp-open");

        }else {
            document.querySelector("body").classList.remove("tp-open");
        }
    },[isVisible])
    const _renderFooter = () => {
        if(renderFooter && typeof renderFooter === 'function') {
        return renderFooter();
        }
        return (
            <div className="footer-btn">
                <button className ="footer-btn1" onClick={_onCancle}>
                <div className = "btn">Hủy bỏ</div>
                </button>
                <button className ="footer-btn1">
                <div className = "btn btn-next">Tiếp tục</div>
                </button>
            </div>
        )
    }
    
    return (
        <div className={`tp_modal ${isVisible ? 'show': ''}`}>
            <div className="tp_modal-overlay" onClick={_onCancle}></div>
            <div className ="tp_modal-dialog">
                <div className="tp_modal-content" style={{width}}>
                    {
                    isHeader &&
                    <div className="dialog--err">
                        {title}
                    </div>
                    }
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {_renderFooter()} 
                    </div>
                </div>
            </div>
        </div>
    )
}