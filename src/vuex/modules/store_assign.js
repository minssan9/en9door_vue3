import apiAssign from "@/api/modules/api-assign";

export const storeAssign = {
  state: {
    assign: {
      assignId: null,
      callType: 'Audio(음성 수업)',
      startDate: new Date(),
      classStartTime: ("0" + new Date().getHours()).slice(-2) + ':' + ("0" + new Date().getMinutes()).slice(-2),
      assignDays: [],
      isRequestAttendSheet: false,
      courseId: 0,
      contentId: 0,
      teacherId: 0,
      studentId: 0,
      teacher: null,
      student: null,
      comment: '',
      feedback: '',
      assignStatus: '',
      assignCount: 0,
      review: '',
      reviewRating: 5
    }
  },
  getters: {
    assign: state => state.assign
  },
  mutations: {
    SET_ASSIGN: (state, assign) => {
      state.assign = assign
    },
  },
  actions: {
    fetchAssignActive ({commit}, assign) {
      return apiAssign.getAssignActive(assign)
        .then(res => commit('SET_ASSIGN', res))
        .catch(() => commit('SET_ASSIGN', null))
    },
    fetchAssign ({commit}, assignId) {
      return apiAssign.getAssign(assignId)
        .then(res => commit('SET_ASSIGN', res))
        .catch(() => commit('SET_ASSIGN', null))
    },
    saveAssign({commit}, newAssign) {
      return apiAssign.saveAssign(newAssign)
        .then(res => {
           res.assignId != null
            ? commit('SET_ASSIGN', res)
            : commit('SET_ASSIGN', newAssign)
          return res
        })
    },
    putAssign({commit}, newAssign) {
      if (!newAssign) return null
      newAssign.assignId = this.getters.assign.assignId
      return apiAssign.putAssign(newAssign)
        .then(res => {
          res.assignId != null ? commit('SET_ASSIGN', res) : commit('SET_ASSIGN', newAssign)
          return res
        })
    },
    deleteAssign() {
      if (this.getters.assign != null){
        return apiAssign.deleteAssign(this.getters.assign.assignId)
      }
    }
  }
}
