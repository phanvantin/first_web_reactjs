
import cls from 'classnames'

export default function Row({children, noGutters, className}) {
    
    return (
        <div className={cls('row',className, {'no-gutters': noGutters,})}>{children}</div>
    )

}