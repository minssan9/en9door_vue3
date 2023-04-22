<template>
  <v-app-bar fixed
    color="bg_1"
    :dark="isDark"
             height="50"
    app @focusout="closeSideBar()"
  >
    <v-row>
      <v-col cols="10">
        <router-link class="navbar-brand"
                     :class="{'text-black' : !this.$vuetify.theme.dark,
                              'text-white' : this.$vuetify.theme.dark }"
                     to="/">

          <v-img width="18" :src="mainLogoImg" /> English Door
        </router-link>
      </v-col>
    </v-row>
    <v-app-bar-nav-icon @click="openSideBar" />
  </v-app-bar>
</template>

<script>
import { mapGetters} from 'vuex'
import common_util from "@/utils/common_util";
import { useTheme } from 'vuetify'

export default {
  name: 'NavBar',
  setup() {  },
  computed: {
    ...mapGetters(['app','user']),
    mainLogoImg(){
      return 'https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/logo/en9door' + (this.$vuetify.theme.dark ? '_dark.png' : '.png' );
    },
    classObj() {
      return {
        collapse: !this.app.sidebar.opened,
        show: this.app.sidebar.opened
      }
    },
    isMobile: function (){
      return common_util.isMobile()
    },
    isDark: function (){
      const theme = useTheme()
      theme.current.value.dark
    }
  },
  created() {
    const theme = useTheme()
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      theme.dark = true
    } else {
      theme.dark = false
    }
  },
  mounted() { },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.replace('/')
      this.$router.go();
    },
    openSideBar() {
      this.$store.dispatch('openSideBar')
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    closeSideBar() {
      this.$store.dispatch('closeSideBar')
    },
  }
}
</script>

<style>
</style>
