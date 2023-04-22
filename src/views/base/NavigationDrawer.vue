<template>
  <v-navigation-drawer
    v-model="app.sidebar.opened"
    app
    right
    temporary
    location="right"

  >
<!--    @click="toggleSideBar()"-->
    <v-list active-class="text--accent-4" nav dense>
      <!--      <v-list-item-group-->
      <!--          active-class="text&#45;&#45;accent-4"-->
      <!--          color="primary"-->
      <!--          v-model:opened="open"-->
      <!--      >-->
      <v-list-subheader v-show="user.accountId" class="large font-weight-bold" inset>수강관리</v-list-subheader>
      <v-list-item class="nav-link small " v-show="showStudentMenu('EN9DOOR_STUDENT') || isManager"
                   to="/student/register">
        <v-list-item-content> 수강 신청</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showStudentMenu('EN9DOOR_STUDENT') || isManager"
                   to="/student/assign">
        <v-list-item-content>나의 수업</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_TEACHER')" to="/teacher/register">
        <v-list-item-content> Teacher Register List</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_TEACHER')" to="/teacher/assigns">
        <v-list-item-content> Teacher Assign List</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_TEACHER')" to="/teacher/attends/student">
        Teacher <br v-if="!isMobile">Attend List
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_TEACHER')" to="/teacher/attends/today">
        Teacher <br v-if="!isMobile">Attend Today
      </v-list-item>

      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_MANAGER')" to="/manager/register">Manager <br
        v-if="!isMobile">Register List
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_MANAGER')" to="/manager/assigns">Manager <br
        v-if="!isMobile">Assign List
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_MANAGER')" to="/manager/accounts">Manager <br
        v-if="!isMobile">Account List
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_MANAGER')" to="/manager/attends">Manager <br
        v-if="!isMobile">Attend List
      </v-list-item>
      <v-list-item class="nav-link small " v-show="showMenuOfRole('EN9DOOR_MANAGER')" to="/manager/schedule">Manager <br
        v-if="!isMobile">Teacher Schedule
      </v-list-item>
      <v-list-item class="nav-link small " v-show="user.accountId" to="/profile"> {{ this.user.username }}</v-list-item>
    </v-list>


    <v-list active-class="text--accent-4" v-show="!isManager && !isTeacher" nav dense>
      <v-list-subheader class="large font-weight-bold" inset>영어문 안내</v-list-subheader>
      <v-list-item class="nav-link small" to="/main/class-info">
        <v-list-item-content> 운영방식 안내</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small" to="/main/guide/register">
        <v-list-item-content> 수강신청 안내</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small" to="/main/teacher">
        <v-list-item-content> 선생님 소개</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small" to="/main/content">
        <v-list-item-content> 교재 샘플</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link small" to="/main/guide/call">
        <v-list-item-content> App 설치 안내</v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list active-class="text--accent-4" nav dense>
      <v-list-subheader class="large font-weight-bold" inset>고객센터</v-list-subheader>
      <v-list-item class="nav-link small" to="/board">
        <v-list-item-content> 공지사항</v-list-item-content>
      </v-list-item>
      <v-list-item class="nav-link" @click="openWindow('https://pf.kakao.com/_gjKqxb/chat' )">
        <strong>카카오톡 문의</strong>
        <img src='@/assets/icon/kakaotalk_icon.svg' width="25">
      </v-list-item>
    </v-list>


    <v-list>
      <v-list-item>
        <v-list-item-content></v-list-item-content>
      </v-list-item>
      <v-list-item class="fluid" v-show="!user.accountId " to="/login" style="padding: 0px">
        <v-btn width="100%" color="primary">Login</v-btn>
      </v-list-item>
      <v-list-item class=" fluid " v-show="user.accountId" to="/logout" style="padding: 0px">
        <v-btn width="100%" color="primary">Log Out</v-btn>
      </v-list-item>

      <v-list-item>
        <v-switch
          flat
          v-model="$vuetify.theme.dark"
          label="Dark Mode"
          @change="toggleTheme()"
        ></v-switch>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>


<script>
import {mapGetters} from 'vuex'
import common_util from "@/utils/common_util";
import {useTheme} from "vuetify";


export default {
  name: 'NavBar',
  data: () => ({
    props: false,
    open: ['']
  }),
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  computed: {
    ...mapGetters(['app', 'user', 'isManager', 'isTeacher']),
    classObj() {
      return {
        collapse: !this.app.sidebar.opened,
        show: this.app.sidebar.opened
      }
    },
    isMobile: function () {
      return common_util.isMobile()
    }
  },
  created() {
    const theme = useTheme()

    this.props = false;
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    theme.global.name.value = darkThemeMq.matches ? 'dark' : 'light'
  },
  mounted() {
  },
  methods: {
    openWindow(link) {
      this.$openWindow(link, 'book', 0, 0)
    },
    showMenuOfRole(menuRole) {
      return this.user.accountRoles != null
        ? this.user.accountRoles.map(ar => ar.roleType).includes(menuRole)
        : false
    },
    showStudentMenu(menuRole) {
      if (this.user.accountRoles != null
        && this.user.accountRoles.map(ar => ar.roleType).includes(menuRole)
        && this.user.accountRoles.length === 1) {
        return true
      }
      return false
    },
    // toggleTheme()  {
    //   const theme = useTheme()
    //
    //   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    //   this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    //   console.log(this.$vuetify.theme.dark)
    // },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.replace('/')
      this.$router.go();
    },
  }
}
</script>
