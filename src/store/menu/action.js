import {MenuService} from '../../services/menu'
import {mapCleanMenuData} from '../../components/common/Helpers/menu'

export const ACT_GET_MENU_BY_NAME = "ACT_GET_MENU_BY_NAME"


export function actGetMenu(name,menuData) {
    return {
        type:ACT_GET_MENU_BY_NAME,
        payload:{name,menuData}
    }
}



export function actGetMenuAsync(name = 'main-menu-vi') {
    return async dispatch =>{
        try {
            const response = await MenuService.getMenus(name)
            const menuData = response.data.items.map(mapCleanMenuData)
            dispatch(actGetMenu(name,menuData))
        }catch(err){
        }
    }
}
