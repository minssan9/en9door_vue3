import {methods} from '@/api/axios-en9door'

let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}
// let fetchPageQuery = {role: '', username: '', size: 10, page: 1, sort: 'createdAt'}

const baseUrl = `ed/manager`

const apiManager = {
  getStudentList() {
    fetchQuery.role = 'EN9DOOR_STUDENT'
    return methods.get(`${baseUrl}/account/search`, fetchQuery)
  },
  getAccountList(searchQuery) {
    return methods.get(`${baseUrl}/account/search`,searchQuery)
  },
  addAccountRole(row, role) {
    row.roleType = role
    return methods.post(`${baseUrl}/account/${row.accountId}/role`, row)
  },
  removeAccountRole(row, role) {
    let accountRoleId = row.accountRoles.filter(ar => ar.roleType === role).map(ar => ar.accountRoleId)[0]
    return methods.delete(`${baseUrl}/account/${row.accountId}/role/${accountRoleId}`)
  },

  setAccount(row) {
    return methods.put(`${baseUrl}/account/${row.accountId}`, row)
  },


  putRegister(row) {
    return methods.put(`${baseUrl}/register/${row.registerId}`, row)
  },
  putRegisterSetTeacher(row) {
    return methods.put(`${baseUrl}/register/${row.registerId}/teacher`, row)
  },
  putRegisterCompleteTest(row) {
    return methods.put(`${baseUrl}/register/${row.registerId}/test`, row)
  },


  getAssignedTeacherSchedule(queryDto) {
    return methods.get(`${baseUrl}/assign/schedule`, queryDto)
  },
  createAssign(assign){
    return methods.post(`${baseUrl}/assign/create`,assign)
  },
  completeAssign(row) {
    return methods.put(`${baseUrl}/assign/${row.assignId}/complete`, row)
  },
  quitAssignClass(row) {
    return methods.put(`${baseUrl}/assign/${row.assignId}/end`, row)
  },
  noticeTeacherChanged(row) {
    return methods.post(`${baseUrl}/assign/${row.assignId}/teacher-changed`)
  },


  getAttendanceSheet(assignId, isFake) {
    return methods.get(`${baseUrl}/assign/${assignId}/attend-sheet` , { isFake: isFake })
  },

  sendEmergencyNotice(row) {
    return methods.post(`${baseUrl}/assign/notice/emergency`, row)
  },
}

export default apiManager
