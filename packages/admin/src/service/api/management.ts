import { mockRequest } from '../request'
import { adapterOfFetchUserList } from './management.adapter'
import { adapter } from '@/utils'

/** 获取用户列表 */
export const fetchUserList = async() => {
  const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList')
  return adapter(adapterOfFetchUserList, data)
}
