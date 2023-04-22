import {methods} from '@/api/axios-en9door'

// let fetchQuery = {role: '', username: '', size: 0, page: 1, sort: 'createdAt'}
// let fetchPageQuery = {role: '', username: '', size: 10, page: 1, sort: 'createdAt'}
const baseUrl = `ed/review`

const apiPublic = {
  getAssignByOrderId(orderId){
    let queryDto = {}
    queryDto.orderId = orderId
    return methods.get(`${baseUrl}`, queryDto)
  },
  saveReview(review){
    return methods.post(`${baseUrl}`, review)
  },
  getReviews() {
    return methods.get(`${baseUrl}/list`)
  }
}

export default apiPublic
