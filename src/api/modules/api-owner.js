import {methods} from '@/api/axios-en9door'

let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}

const baseUrl = `ed/owner`

const apiOwner = {

  createAssign(assign){
    return methods.post(`${baseUrl}/assign/create`,assign)
  },
  completeAssign(row) {
    return methods.put(`${baseUrl}/assign/${row.assignId}/complete`, row)
  },
  endAssign(row) {
    return methods.put(`${baseUrl}/assign/${row.assignId}/end`, row)
  },
  sendNotice() {
    return methods.post(`${baseUrl}/assign/notice`)
  }
}

export default apiOwner
