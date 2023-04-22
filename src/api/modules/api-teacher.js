import {methods} from '@/api/axios-en9door'

let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}
// let fetchPageQuery = {role: '', username: '', size: 10, page: 1, sort: 'createdAt'}
const apiTeacher = {

  getStudentList() {
    fetchQuery.role = 'EN9DOOR_STUDENT'
    return methods.get(`ed/teacher/account/search`, fetchQuery)
  },
  getAccountList(searchQuery) {
    return methods.get(`ed/teacher/account/search`,searchQuery)
  },

  getRegisters(searchQuery) {
    return methods.get(`ed/teacher/register`, searchQuery)
  },

  getAssigns(searchQuery) {
    return methods.get(`ed/teacher/assign`, searchQuery)
  },
}

export default apiTeacher
