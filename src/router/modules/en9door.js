/** When your routing table is too long, you can split it into small modules **/

const en9doorRouter = [
  // footer
  {path: 'company/company-info', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/company/company_info'), name: 'Company Info', meta: {title: 'Company Info'}},
  {path: 'company/privacy-policy', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/company/privacy_policy'), name: 'Privacy Policy', meta: {title: 'Privacy Policy'}},
  {path: 'company/use-term', component: () => import(/* webpackChunkName: "en9door_common" */'@/views/company/use_term'), name: 'Use Term', meta: {title: 'Use Term'}},

  // student
  {path: 'student/register', component: () => import(/* webpackChunkName: "en9door_student" */'@/views/en9door/student/s_register'), name: 'Register', meta: {title: 'Register'}},
  {path: 'student/assign', component: () => import(/* webpackChunkName: "en9door_student" */'@/views/en9door/student/s_assign'), name: 'Assign', meta: {title: 'Assign'}},
  {path: 'student/review', component: () => import(/* webpackChunkName: "en9door_student" */'@/views/en9door/student/s_review'), name: 'Review', meta: {title: 'Review'}},

  // teacher
  {path: 'teacher/assigns', component: () => import(/* webpackChunkName: "en9door_teacher" */'@/views/en9door/teacher/t_assigns'), name: 'Teacher Assigns List', meta: {title: 'Teacher Assigns List'}},
  {path: 'teacher/register', component: () => import(/* webpackChunkName: "en9door_teacher" */'@/views/en9door/teacher/t_register'), name: 'Teacher Register List', meta: {title: 'Teacher Register List'}},
  {path: 'teacher/attends/today', component: () => import(/* webpackChunkName: "en9door_teacher" */'@/views/en9door/teacher/t_attends-today'), name: 'Teacher Today Attend List', meta: {title: 'Teacher Today Attend List'}},
  {path: 'teacher/attends/student', component: () => import(/* webpackChunkName: "en9door_teacher" */'@/views/en9door/teacher/t_attends-student'), name: 'Teacher Student Attend List', meta: {title: 'Teacher Student Attend List'}},

  // manager
  {path: 'manager/assigns', component: () => import(/* webpackChunkName: "en9door_manager" */'@/views/en9door/manager/m_assigns'), name: 'Manager Assign List', meta: {title: 'Manager Assign List'}},
  {path: 'manager/register', component: () => import(/* webpackChunkName: "en9door_manager" */'@/views/en9door/manager/m_register'), name: 'Manager Register List', meta: {title: 'Manager Register List'}},
  {path: 'manager/accounts', component: () => import(/* webpackChunkName: "en9door_manager" */'@/views/en9door/manager/m_accounts'), name: 'Manager Teacher List', meta: {title: 'Manager Teacher List'}},
  {path: 'manager/attends', component: () => import(/* webpackChunkName: "en9door_manager" */'@/views/en9door/manager/m_attends'), name: 'Manager Attend List', meta: {title: 'Manager Attend List'}},
  {path: 'manager/schedule', component: () => import(/* webpackChunkName: "en9door_manager" */'@/views/en9door/manager/m_schedule'), name: 'Manager Teacher Schedule', meta: {title: 'Manager Teacher Schedule'}},

]


export default en9doorRouter
