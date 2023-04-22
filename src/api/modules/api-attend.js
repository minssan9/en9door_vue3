import {methods} from '@/api/axios-en9door'

const baseUrl = `ed/attend`

const apiAttend = {
  getAttends(searchQuery){
    return methods.get(baseUrl, searchQuery)
  },
  getAttendByAssign(searchQuery){
    return methods.get(`/ed/assign/${searchQuery.assignId}/attend`)
  },
  putAttend(row){
    return methods.put(`${baseUrl}/${row.attendId}`, row)
  }
}

export default apiAttend
