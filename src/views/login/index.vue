<template>
  <v-app>
    <v-container fluid>
      <v-row class="row g-3">
        <v-col cols="12" md="6">
          <v-row class="row g-3" justify="center">
            <img :src=logoImg
                 style="width: 120px; margin-bottom: 20px"
                 @click="onChrome()"
            >
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row class="row g-2" justify="center">
            <a type="button" style="width: 200px;"
               :href="getSocialLoginUrl('kakao')">
              <img type="button" width="200" height="40"
                   src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/kakao-signin-korean.png"/>
            </a>
          </v-row>
          <v-row class="row g-2" justify="center">
            <a type="button" style="width: 200px"
               :href="getSocialLoginUrl('google')">
              <img type="button" width="200" height="40"
                   src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/google-signin-korean.png"/>
            </a>
          </v-row>
          <v-row class="row g-2" justify="center">
            <a type="button" style="width: 200px"
               :href="getSocialLoginUrl('naver')">
              <img type="button" width="200" height="40"
                   src="@/assets/img/naver_login.png"/>
            </a>
          </v-row>
          <v-row class="row g-1 text-center " justify="center"
                 @click="onChrome()">
            <v-alert v-if="isMobile"
                     border="right"
                     color="red lighten-2"
                     dark

            >
              모바일 환경에서는 Safari, Chrome 등 <br>
              기본 인터넷 브라우저 연결 부탁드립니다. <br>
              <h5>여기를 누르면 기본 브라우저로 연결</h5>
            </v-alert>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import apiAccount from "@/api/modules/api-account";
import common_util from "@/utils/common_util";

export default {
  name: 'LoginPage',
  components: {},
  data() {
    return {
      loading: false,
      showDialog: false,
      redirect: undefined,
      googleLoginLink: ''
    }
  },
  computed: {
    isMobile: function () {
      return common_util.isMobile()
    },
    logoImg: function () {
      if (this.$vuetify.theme.dark) {
        return `https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/logo/en9door_dark.png`
      } else {
        return "https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/logo/en9door.png"
      }
    }
  },
  created() {
    this.redirect = this.$route.query.redirect
    window.scrollTo(0,0);
  },
  mounted() {
  },
  methods: {
    onChrome() {
      if (navigator.userAgent.match(/iPhone|iPad/i)) {
        // IOS
        window.location.href = 'googlechrome://en9doors.com'


      } else {
        // 안드로이드
        window.location.href = "intent://" + "en9doors.com" + "#Intent;scheme=https;package=com.android.chrome;end";
      }
    },
    getSocialLoginUrl(socialType) {
      return apiAccount.getSocialLoginUrl(socialType, this.redirect)
    }
  }
}
</script>

