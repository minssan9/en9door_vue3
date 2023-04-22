import {methods} from '@/api/axios-en9door'

// let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}
// let fetchPageQuery = {stat: '', username: '', size: 10, page: 1, sort: 'createdAt'}
const baseUrl = 'ed/student'

const apiStudent = {
  getUser () {
    return methods.get('/apiAccount')
  },

  callPayment(paymentMethod, register) {
    register.paymentMethod = paymentMethod
    return methods.post(`payment/ready`, register)
  },
  getAttendanceSheet(assignId) {
    return methods.get(`${baseUrl}/assign/${assignId}/attend-sheet` )
  }
}


export default apiStudent
