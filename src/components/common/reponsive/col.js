
import cls from 'classnames'

export default function Col({children, l,m,c, lo,mo,co, className}) {
    
    const classes = cls('col',{
        ['l-' + l]: (l>=0 && l<=12) || l === "2-4",
        ['m-' + m]: m>=0 && m<=12,
        ['c-' + c]: c>=0 && c<=12,
        ['lo-' + l]: lo>=1 && lo<=11,
        ['mo-' + m]: mo>=1 && mo<=11,
        ['co-' + c]: co>=1 && co<=11,

    },className)
    return (
        <div className={classes}>{children}</div>
    )

}