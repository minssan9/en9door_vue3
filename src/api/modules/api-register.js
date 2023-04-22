import {methods} from '@/api/axios-en9door'

const baseUrl = `ed/register`

const apiRegister = {
  requestZoomAccept(row) {
    let messageDto = {
      subject: '',
      content: '빈 값 불가'
    }
    return methods.post(`${baseUrl}/account/${row.studentId}/zoom/accept`, messageDto)
  },

  getRegisterPage(searchQuery) {
    return methods.get(`${baseUrl}/page/v1`, searchQuery)
  },
  getRegisterByQuery(searchQuery) {
    return methods.get(baseUrl, searchQuery)
  },
  getRegisterById(registerId) {
    return methods.get(`${baseUrl}/${registerId}`)
  },

  saveRegister(register) {
    return methods.post(`${baseUrl}`, register)
  },
  putRegister(row) {
    return methods.put(`${baseUrl}/${row.registerId}`, row)
  }
}

export default apiRegister
