<template>
  <v-app class="app-main">
    <Navbar />
    <v-content style="padding: 0px" >
      <transition name="fade-transform" mode="out-in"  >
        <router-view :key="key" />
      </transition>
    </v-content>
    <FooterBlock />

    <NavDrawer />
  </v-app>
</template>
<script>
import Navbar from '@/views/base/Navbar'
import NavDrawer from '@/views/base/NavigationDrawer'
import FooterBlock from '@/views/base/FooterBlock'
import {mapActions, mapGetters} from "vuex";
import common_util from "@/utils/common_util";

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    NavDrawer,
    FooterBlock
  },
  mounted() {
    // this.fetchSysConfEn9door()

    if (this.user.accountId == null){
      this.logout()
    } else {
      this.searchQuery.studentId = this.user.accountId

      this.fetchUser()

      if (this.user.accountRoles.map(ar => ar.roleType).includes('EN9DOOR_STUDENT')
          && this.register.registerId === null) {
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'register']),
    key() {
      return this.$route.path
    },
    isMobile: function (){
      return common_util.isMobile()
    }
  },
  methods: {
    ...mapActions([
        'closeSideBar',
      'fetchSysConfEn9door',
      'fetchUser',
      'logout'
    ]),
    showMenuOfRole(menuRole){
      return this.user.accountRoles != null
          ? this.user.accountRoles.map(ar => ar.roleType).includes(menuRole)
          : false
    },
    // toggleSideBar() {
    //   this.$store.dispatch('toggleSideBar')
    // },
    // closeSideBar() {
    //   this.$store.dispatch('closeSideBar')
    // },
  }
}
</script>

<style lang="scss" scoped>

.app-main {
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

  min-height: calc(100vh - 220px);
  width: 100%;
  position: relative;
}
</style>
