import cls from 'classnames'

export default function Container({children, wide, className}) {
    return (
        <div className={cls('grid', {'wide': wide,},className)}>{children}</div>
    )

}