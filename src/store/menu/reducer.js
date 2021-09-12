
import {ACT_GET_MENU_BY_NAME} from './action'

const initState = {
    mainMenu: [],
    footerMenu: []
  }


export default function menusReducer(menuState=initState, action){
    switch (action.type) {
        case ACT_GET_MENU_BY_NAME:
            if(action.payload.name=== 'main-menu-vi'){
                return {
                    ...menuState,
                    mainMenu: action.payload.menuData
                }
            }
            return menuState
    
        default:
            return menuState;
    }
}
