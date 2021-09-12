import './button.css'
import cls from 'classnames'
import Loading from '../IconLoading'
import { Link } from 'react-router-dom'

function Button({ 
  to,
  children, 
  variant, 
  isSizeLarge, 
  isLoading, 
  className, 
  as = 'button',
  iconPos = 'left',
  ...restProps
}) {
  
  const finalClass = cls(className, 'btn', {
   "btn-default": variant === 'default',
   "btn-category": variant === 'category',
   "btn-primary": variant === 'primary',
   "btn-size-large": isSizeLarge 
  })

  const jsxContent = (
    <>
      { isLoading && iconPos === 'left' && <Loading /> }
      {children}
      { isLoading && iconPos === 'right' && <Loading /> }
    </>
  )

  if (as === 'a') {
    return (
      <Link to={to} {...restProps} className={finalClass}>{ jsxContent }</Link>
    )
  }

  return (
    <button {...restProps} className={finalClass}>{ jsxContent }</button>
  )
}

export default Button