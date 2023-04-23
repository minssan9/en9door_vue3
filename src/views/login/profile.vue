<template>
  <v-app class="appContainer" id="profile">
    <v-container fluid>
      <v-row class="header"  align="center">
        <v-col cols="12" sm="4">
          <h3>Profile</h3>
        </v-col>
      </v-row>
      <v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="4" sm="4">
                <v-avatar width="100px" height="100px">
                  <v-img :src="user.profileImageUrl"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="8" sm="8">
                <v-card-title class="title">{{ user.username }}</v-card-title>
                <v-card-subtitle>{{ user.email }}</v-card-subtitle>
              </v-col>
              <v-col cols="12" >
                <v-row v-if="hasRole('EN9DOOR_STUDENT')">
<!--                  <v-col v-if="!isConnectedKakao" cols="12" md="6">-->
<!--                    <v-btn @click="loginOAuth2('kakao')" width="200" height="50">-->
<!--                      <img type="button" width="195" height="45"-->
<!--                           src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_kakao_signin_light.png"/>-->
<!--                    </v-btn>-->
<!--                  </v-col >-->
<!--                  <v-col v-if="!isConnectedGoogle" cols="12" md="6">-->
<!--                    <v-btn  width="200" height="50">-->
<!--                      <GoogleLogin :params="params"-->
<!--                                   :onSuccess="onGoogleLoginSuccess"-->
<!--                                   :onFailure="onGoogleLoginFailure">-->
<!--                        <img type="button" width="200" height="50"-->
<!--                             src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_google_signin_light.png"/>-->
<!--                      </GoogleLogin>-->
<!--                    </v-btn>-->
<!--                  </v-col>-->
                </v-row>
              </v-col>
            </v-row>
          </v-col>


          <v-col cols="12" sm="6">
            <v-row v-if="hasRole('EN9DOOR_TEACHER')">
              <v-col cols="6" sm="4">
                <v-text-field label="Major" v-model="user.major"/>
              </v-col>
              <v-col cols="6" sm="4">
                <v-text-field label="Country" v-model="user.country"/>
              </v-col>
              <v-col  cols="6" sm="4">
                <v-text-field label="Personality" v-model="user.personality"/>
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea label="Career" v-model="user.career"/>
              </v-col>
              <v-col cols="8">
                <v-textarea label="Intro" v-model="user.intro"/>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" width="80%"
                       @click="saveUser">저장</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import apiAccount from "@/api/modules/api-account";

export default {
  data() {
    return {
      idExist: false,
      idNotExist: false,
      kakaoAppKey: process.env.VUE_APP_KAKAO_OAUTH2_CLIENT_KEY,
      params: {
        client_id: process.env.VUE_APP_GOOGLE_OAUTH2_CLIENT_KEY
      },
    }
  },
  components: {},
  computed: {
    ...mapGetters(['user']),
    isConnectedKakao : function (){
      return this.user.accountSnsList.filter(acs => acs.providerType === 'KAKAO').length === 1
    },
    isConnectedGoogle : function (){
      return this.user.accountSnsList.filter(acs => acs.providerType === 'GOOGLE').length === 1
    },
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapActions(['fetchUser', 'updateUser']),
    ...mapMutations(['SET_USER']),
    hasRole(role){
      return this.$hasRole(role)
    },
    saveUser(){
      this.SET_USER(this.user)
      this.updateUser()
          .then(() => this.$dialog.notify.info('Success', {position: 'top-right', timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right', timeout: 1000}))
    },
    async loginOAuth2(){
      // switch (socialType){
      // //   case "kakao":
      // //     let userInfo = [];
      // //
      // //     await this.$kakao.Auth.login({
      // //       success (res) {},
      // //       fail (err) {alert(JSON.stringify(err))}
      // //     })
      // //     await Kakao.API.request({
      // //       url: '/v2/user/me',
      // //       data: {property_keys: ["kakao_account.email", "kakao_account.gender", "kakao_account.phone_number",
      // //           "kakao_account.profile", "properties.nickname", "properties.profile_image", "properties.thumbnail_image"]},
      // //       success: function(res) {userInfo = res},
      // //       fail: function(error) {console.log(error);}
      // //     });
      // //     await apiAccount.saveAccountSns('kakao', userInfo)
      // //     break
      // //   case "google":
      // //     break
      // }
    },
    onGoogleLoginSuccess(accountSns){
      let userInfo = []
      userInfo.push('sub', accountSns.getBasicProfile().getId())
      userInfo.push('name', accountSns.getBasicProfile().getName())
      userInfo.push('email', accountSns.getBasicProfile().getEmail())
      userInfo.push('picture', accountSns.getBasicProfile().getImageUrl())

      apiAccount.saveAccountSns('google', userInfo)
    },
    onGoogleLoginFailure(accountSns){
      console.log(accountSns)
    }
  }
}
</script>

<style scoped>

</style>
