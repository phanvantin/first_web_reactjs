import api from './api'

export const MenuService = {
  getMenus(name='main-menu-vi') {
    return api.call().get('/menus/v1/menus/'+ name)
  }
} 
