import { ACT_FETCH_CATEGORIES,ACT_REMOVE_VALUE_CATE,ACT_SET_VALUE_CATE,ACT_SET_VALUE_CATE_NULL } from './actions'

const initState = {
  hashCategoryById: {},
  valueCategory: []
}

function reducer(categoriesState = initState, action) {
  switch (action.type) {
    case ACT_SET_VALUE_CATE:
            return {
                ...categoriesState,
                valueCategory: [
                    ...categoriesState.valueCategory,
                    action.payload.valueCate
                ] 
            }
        case ACT_SET_VALUE_CATE_NULL:
            return {
                ...categoriesState,
                valueCategory: [] 
            }    
        case ACT_REMOVE_VALUE_CATE:
            return {
                ...categoriesState,
                valueCategory: categoriesState.valueCategory.filter(item=> item.id !== action.payload.valueCate.id)
            }
    case ACT_FETCH_CATEGORIES:

      const newHashCategoryById = {}

      for (let index = 0; index < action.payload.categories.length; index++) {
        const value = action.payload.categories[index];
        const key = 'category-' + value.id
        
        newHashCategoryById[key] = value
      }

      return {
        ...categoriesState,
        hashCategoryById: newHashCategoryById
      }
    default:
      return categoriesState
  }
}

export default reducer