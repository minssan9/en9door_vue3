import {methods} from '@/api/axios-en9door'

// let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}
// let fetchPageQuery = {role: '', username: '', size: 10, page: 1, sort: 'createdAt'}
const baseUrl = `ed/assign`

const apiAssign = {
  getAssignActive(searchQuery) {
    return methods.get(`${baseUrl}/active`, searchQuery)
  },
  getAssign(assignId) {
    return methods.get(`${baseUrl}/${assignId}`)
  },
  getAssignPage(searchQuery) {
    return methods.get(baseUrl+ '/page/v1', searchQuery)
  },
  putAssign(row) {
    return methods.put(`${baseUrl}/${row.assignId}`, row)
  },
  saveAssign(assign) {
    return methods.post(baseUrl, assign)
  },
  deleteAssign(assignId) {
    return methods.delete(`${baseUrl}/${assignId}`)
  },
  getTeacherList(fetchQuery) {
    fetchQuery.role = 'EN9DOOR_TEACHER'
    return methods.get(`${baseUrl}/teacher`, fetchQuery )
  },
}

export default apiAssign
