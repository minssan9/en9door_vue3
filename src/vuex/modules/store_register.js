import apiRegister from "@/api/modules/api-register";

export const storeRegister = {
  state: {
    register: {
      registerId: null,
      assignId: null,
      callType: 'Audio(음성 수업)',
      assignDays: [1,2,3,4,5],
      startDate: new Date(),
      classStartTime: '08:00:00',
      isRequestAttendSheet: false,
      registerStatus: 'NO_TEACHER',
      comment: '',
      feedback: '',
      callAppType: 'Skype',
      skypeId: '',
      recommend:'',
      course: {
        courseId: 0,
        description: '화상영어 20분 20회 수강권',
        courseName: '20min',
        price: 70000
      },
      courseId: 0,
      content: {
        contentId: 0,
      },
      contentId: 0,
      teacher: {
        accountId: null,
      },
      student: {
        accountId: null,
      },
    },
  },
  getters: {
    register: state => state.register
  },
  mutations: {
    SET_REGISTER: (state, register) => {
      state.register = register
    },
    SET_CLASS_START_DATE: (state, classStartDate) => {
      state.register.startDate = classStartDate
    },
    SET_CLASS_START_TIME: (state, classStartTime) => {
      state.register.classStartTime = classStartTime
    }
  },
  actions: {
    fetchRegister ({commit}, query) {
      let searchQuery = {studentId: query.studentId}
      return apiRegister.getRegisterByQuery(searchQuery)
        .then(res => {
          if (res.registerId) {
            commit('SET_REGISTER', res)
            return res
          }
        })
    },
    saveRegister({commit}, newRegister) {
      return apiRegister.saveRegister(newRegister)
        .then(res => {
          commit('SET_REGISTER', res)
          return res
        })
    },
    putRegister({commit}, newRegister) {
      return apiRegister.putRegister(newRegister)
        .then(res => {
          commit('SET_REGISTER', res)
          return res
        })
    },
  }
}
