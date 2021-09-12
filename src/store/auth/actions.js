
import {AuthService} from "../../services/auth"



export const ACT_SET_TOKEN = 'ACT_SET_TOKEN'
export const ACT_SET_CURRENT_USER = 'ACT_SET_CURRENT_USER'


/**
 * Action Sync
 */
export const actSetToken = (token) => ({
  type: ACT_SET_TOKEN,
  payload: { token }
})
export const actSetCurrentUser = (userData) => ({
  type: ACT_SET_CURRENT_USER,
  payload: { userData }
})

/**
 * Action Async
 */

export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await AuthService.login(username, password)
      const token = response.data.token

      // 1. Lưu vào trong localStorage
      // 2. Lấy token này dispatch thêm một action nữa -> Thấy thông tin chi tiết user
      dispatch(actSetToken(token))
      dispatch(actFetchMeAsync())

      return {
        ok: true
      }
    } catch(err) {
      if (err.response && err.response.data) {
        const code = err.response.data.code
        const hashErrorLabel = {
          "[jwt_auth] invalid_username": "Tên đăng nhập không tồn tại",
          "[jwt_auth] incorrect_password": "Mật khẩu không hợp lệ"
        }
        const labelError = hashErrorLabel[code]
        
        return {
          ok: false,
          error: labelError
        }
      }
      return {
        ok: false,
        error: "Có lỗi xảy ra, vui lòng thử lại sau!"
      }
    }
  }
}

export function actFetchMeAsync() {
  return async (dispatch, getState) => {
    try {
      const token = getState().Auth.token

      if (!token) {
        throw new Error('Token invalid')
      }

      const response = await AuthService.getMe()
      const userData = response.data
      dispatch(actSetCurrentUser(userData))
    } catch(err) {
      dispatch(actSetToken(''))
      dispatch(actSetCurrentUser(null))
      return {
        ok: false
      }
    }
  }
}

export function actRegisterAsync(email, username,password) {
  return async () =>{
    try {
      await AuthService.register(email, username,password)
        return {
          ok: true,
          data: {
            email,
            password
          }
        }
      }
    catch(err) {  
        return {
          ok: false,
          error: err
        }
    }
  }}