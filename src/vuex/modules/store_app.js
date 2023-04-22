import apiCommon from "@/api/modules/api-common";

export const storeApp = {
  state: {
    size: window.sessionStorage.getItem('size') || 'medium',
    registerStatusOptions: ['', 'ACTIVE', 'NO_TEACHER', 'NO_TEST'],
    assignStudentStatusOptions: [ 'ACTIVE', 'END'],
    assignStatusOptions: ['', 'ACTIVE', 'INACTIVE', 'PAID', 'END'],
    attendStatusOptions: ['', 'ATTEND', 'UNATTEND', 'POSTPONE', 'NOSHOW'],
    roleOptions: ['', 'EN9DOOR_MANAGER', 'EN9DOOR_STUDENT', 'EN9DOOR_TEACHER'],
    callAppType: [
      { appCode: 'Skype', appName: 'Skype'  },
      { appCode: 'Zoom', appName: 'Zoom'  }
    ],
    weekdays: [
      { value: 1, dayOfWeek: 'Mon', isChecked: false },
      { value: 2, dayOfWeek: 'Tue', isChecked: false },
      { value: 3, dayOfWeek: 'Wed', isChecked: false },
      { value: 4, dayOfWeek: 'Thu', isChecked: false },
      { value: 5, dayOfWeek: 'Fri', isChecked: false },
      { value: 6, dayOfWeek: 'Sat', isChecked: false },
      // { value: 7, dayOfWeek: 'Sun', isChecked: false },
    ],
    classStartHourList: [],
    classStartMinuteList: [],
    classStartTimeList: [],
    sidebar: {
      opened: false,
      withoutAnimation: false
    },
    book: [],
    content: [{
      contentId:'',
      contentName:'',
      createdAt:'',
      description:'',
      useFlag:''
    }],
    course: [{
      applyEndDate: '',
      applyStartDate: '',
      courseId: '',
      courseName: '',
      createdAt: '',
      description: '',
      duration: '',
      payappLink: '',
      price: '',
      stat: '',
      wage: ''
    }],
    sysconf: [],
  },
  getters: {
    app: state => state
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    },
    OPEN_SIDEBAR: state => {
      state.sidebar.opened = true
    },
    CLOSE_SIDEBAR: state => {
      state.sidebar.opened = false
    },
    SET_CONTENT: (state, content) => {
      state.content = content
    },
    SET_BOOK: (state, book) => {
      state.book = book
    },
    SET_COURSE: (state, course) => {
      state.course = course
    },
    SET_SYSCONF: (state, sysconf) => {
      state.sysconf = sysconf
    },
    SET_EN9DOOR_: (state, sysconf) => {
      state.sysconf = sysconf
    },
    SET_ASSIGN_STATUS: (state, assignStatus) => {
      state.assignStatusOptions = assignStatus
    },
    SET_CLASS_HOUR_LIST : (state, classStartHourList) => {
      state.classStartHourList = classStartHourList
    },
    SET_CLASS_MINUTE_LIST : (state, classStartMinuteList) => {
      state.classStartMinuteList = classStartMinuteList
    },
    SET_CLASS_TIME_LIST : (state, classStartTimeList) => {
      state.classStartTimeList = classStartTimeList
    },
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    openSideBar({commit}) {
      commit('OPEN_SIDEBAR')
    },
    closeSideBar({commit}) {
      commit('CLOSE_SIDEBAR')
    },
    fetchClassStartTime({commit}) {
      const classStartTimeList = [];
      const classStartHourList = [];
      const classStartMinuteList = [];
      for (let i = 8; i <= 23; i++) {
        classStartHourList.push(String(i).padStart(2, '0'))
        for (let j = 0; j < 60; j = j + 10) {
          classStartMinuteList.push(          String(j).padStart(2, '0'))
          classStartTimeList.push(
            String(i).padStart(2, '0') + ":" + String(j).padStart(2, '0') + ":00"
          )
        }
      }
      commit('SET_CLASS_HOUR_LIST', classStartHourList)
      commit('SET_CLASS_MINUTE_LIST', classStartMinuteList)
      commit('SET_CLASS_TIME_LIST', classStartTimeList)
    },
    fetchContent ({commit}) {
      return apiCommon.getContent()
        .then(res => {
          res.content = res.content.filter(content => content.useFlag ==='Y')
          commit('SET_CONTENT', res.content)
        })
    },
    fetchCourse ({commit}) {
      return apiCommon.getCourse()
        .then(res => commit('SET_COURSE', res.content))
    },
    fetchBook ({commit}) {
      return apiCommon.getBook()
        .then(res => commit('SET_BOOK', res.book))
    },
    fetchSysConfEn9door ({commit}) {
      const en9doorList = apiCommon.getSysConfLike('en9door_')
      const clientIdList = apiCommon.getSysConfLike('_CLIENT_ID')

      Promise.all([en9doorList, clientIdList])
        .then((values) => {
          return [].concat.apply([], values);
        }).then(res=> {
          commit('SET_SYSCONF', res)
        });

    },
  }
}

export default storeApp
