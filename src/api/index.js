/* Api */
import apiAccount from '@/api/modules/api-account'
import apiStudent from '@/api/modules/api-student'
import apiManager from '@/api/modules/api-manager'
import apiTeacher from '@/api/modules/api-teacher'
import apiPdf from "@/api/modules/api-pdf";

const api = {
  accountAPI: apiAccount,
  studentAPI: apiStudent,
  teacherAPI: apiTeacher,
  managerAPI: apiManager,
  pdfAPI: apiPdf
}

export default api

