import apiAccount from '@/api/modules/api-account'
import Cookies from 'vue-cookies'

export const storeUser = {
  state: {
    token: null,
    user: {
      accountId: null,
      accountRoles: null,
      accountSnsId: null,
      accountSnsList: [],
      createdAt: null,
      email: null,
      englishName: null,
      expired: null,
      koreanName: null,
      password: null,
      phone: '',
      providerType: null,
      accessToken: null,
      refreshToken: null,
      role: null,
      snsAccount: null,
      status: null,
      username: null,
      profileImageUrl:'',
      profileVideoUrl:'',

      major: '' ,
      career: '' ,
      personality: '' ,
      country: '' ,
      intro: ''
    },
    teacherList: [],
    studentList: [],
    isAuthPhone: false,
  },
  getters: {
    user: state => state.user,
    accountId: state => state.user.accountId,
    accessToken: state => state.user.accessToken,

    teacherList: state => state.teacherList,
    studentList: state => state.studentList,
    isStudent: state => state.user.accountRoles ? state.user.accountRoles.map(ar=>ar.roleType).includes('EN9DOOR_STUDENT') : false
                      && state.user.accountRoles.length === 1,
    isOwner: state => state.user.accountRoles ? state.user.accountRoles.map(ar=>ar.roleType).includes('EN9DOOR_OWNER') : false,
    isTeacher: state => state.user.accountRoles ? state.user.accountRoles.map(ar=>ar.roleType).includes('EN9DOOR_TEACHER') : false,
    isManager: state => state.user.accountRoles ? state.user.accountRoles.map(ar=>ar.roleType).includes('EN9DOOR_MANAGER') : false
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      if (token){
        Cookies.set('accessToken',token)
      }else{
        Cookies.remove('accessToken')
      }
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user= user
    },
    SET_AUTH_PHONE: (state, isAuthPhone) => {
      state.isAuthPhone= isAuthPhone
    },
    SET_TEACHER_LIST: (state, teacherList) => {
      state.teacherList = teacherList
    },
    SET_STUDENT_LIST: (state, studentList) => {
      state.studentList = studentList
    }
  },
  actions: {
    fetchUser ({state, commit}) {
      return new Promise(resolve => {
        if (state.user.accountId){
          resolve(state.user.accountId)
        }else {
          apiAccount.getUser()
            .then(res => {
              Cookies.set('refreshToken',res.refreshToken)
              Cookies.set('accountId', res.accountId)
              Cookies.set('username', res.username)
              Cookies.set('email',res.email)
              Cookies.set('role',res.accountRoles)
              commit('SET_USER', res)
              resolve(res)
            })
        }
      })
    },
    fetchTeacherList ({commit}) {
      let fetchQuery = {}
      return apiAccount.getTeacherList(fetchQuery)
              .then(res => {
                commit('SET_TEACHER_LIST', res)
                return res
              })
    },
    updateUser ({state, commit}) {
      return new Promise(resolve => {
          apiAccount.putUser(state.user)
              .then(res => {
                  commit('SET_USER', res)
                  resolve(res)
              })
      })
    },
    // user logout
    logout({commit}) {
      return new Promise(resolve => {
          let emptyUser = {
            accountId: '',
            username: '',
            email: '',
            role: '',
            token: ''
          }
          Cookies.keys().forEach(cookie => Cookies.remove(cookie));
          commit('SET_USER', emptyUser)
          commit('SET_REGISTER', [])
          commit('SET_TOKEN', '')
          resolve()
      })
    }
  }
}
