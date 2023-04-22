<template>
  <v-app>
  <v-container fluid>
    <v-row justify="center" class="row g-1">
      <v-col cols="12" md="4">
        <v-row justify="center" class="row g-1">
          <a class="btn  btn-social mx-2">
            <img src="@/assets/icon/youtube_icon.svg" width="40"
                 @click="openWindow('https://www.youtube.com/channel/UC_tz6R7pbusavSBdDzCl3kQ' )">
          </a>
          <a class="btn btn-social mx-2">
            <img src="@/assets/icon/instagram_icon.svg" width="40"
                 @click="openWindow('https://www.instagram.com/en9door' )">
          </a>
          <a class="btn btn-social mx-2">
            <img src="@/assets/icon/kakaotalk_icon.svg" width="40"
                 @click="openWindow('https://pf.kakao.com/_gjKqxb/chat' )">
          </a>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row class="row g-1 text-center">
          <router-link class="text-decoration-none  me-3" to="/company/privacy-policy">[개인정보처리방침]</router-link>
        </v-row>
        <v-row class="row g-1 text-center">
          <router-link class="text-decoration-none me-3" to="/company/use-term">[이용약관]</router-link>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-row style="text-align: left; font-size: small; color: darkgray; margin-left: 30px">
          <v-col>
            <strong>영어문</strong> | {{ getSysConfValue('en9door_business_no') }} | {{ getSysConfValue('en9door_business_type') }}<br>
            <strong>대표자</strong> : {{ getSysConfValue('en9door_ceo') }}<br>
            <strong>주소</strong> : {{ getSysConfValue('en9door_address') }}
            <a v-bind:href="`tel:${getSysConfValue('en9door_tel')}`" >{{ getSysConfValue('en9door_tel') }}</a><br>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'FooterBlock',
  methods: {
    openWindow(link) {
      // this.$openWindow(link, 'book', 0, 0)
      return link
    },
    getSysConfValue(code){
      if (this.app.sysconf.length  === 0) return ''
      return this.app.sysconf.filter(s => s.code === code).map(s => s.value)[0]
    }
  },
  computed: {
    ...mapGetters(['app'])
  }
}
</script>

<style>
</style>
