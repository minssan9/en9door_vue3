<template>
  <v-container fluid className="bg_1">

    <v-row className="text-center">
      <div className="text-h4 font-weight-bold section-heading text-uppercase">영어문 서비스는?</div>
      <div className="text-h7 font-weight-bold section-subheading text-muted">How it works</div>
    </v-row>


    <v-row justify="center" style="margin-top: 50px; padding: 10px 20px 10px 0px ">

      <v-col className="text-center" cols="6" md="6">
        <router-link className="text-decoration-none" to="/main/class-info">
          <v-row className="card-body" style="height: 180px;">
            <v-card flat style="background-color: #20bdd9; color: white; margin: 10px;">
              <h5 className="card-header">운영방식</h5>
              <div className="small text-left " style="margin: 10px">
                - 화상/음성 동일 가격<br>
                - 영수증, 출석증 발급<br>
              </div>
              <div style="position: absolute; bottom: 0; right: 0; font-size: x-small; margin: 0px 10px 10px 0px"> 더보기
              </div>
            </v-card>
          </v-row>
        </router-link>

        <router-link className="text-decoration-none" to="/main/content">
          <v-row className="card-body" style="height: 280px; ">
            <v-card flat style="background-color: #5858d1; color: white; margin: 10px;">
              <h5 className="card-header">1:1 집중관리</h5>
              <div className="small text-left section-subheading" style="margin:  10px">
                - 문법 오류 교정<br>
                - 단계별 맞춤 수업<br>
                - 유아부터 성인까지<br>
                - 다양한 주제 및 시험대비<br>
              </div>
              <div style="position: absolute; bottom: 0; right: 0; font-size: x-small; margin: 0px 10px 10px 0px"> 더보기
              </div>
            </v-card>
          </v-row>
        </router-link>
      </v-col>
      <v-col className="text-center" cols="6" md="6">

        <router-link className="text-decoration-none" to="/main/teacher">
          <v-row className="card-body" style="height: 280px; ">
            <v-card flat style="background-color: #217cd6; color: white; margin: 10px; ">
              <h5 className="card-header">원어민 선생님</h5>
              <div className="small text-left section-subheading" style="margin: 10px">
                - 담당 선생님 지정<br>
                - 고정된 수업 시각<br>
                - 전문 교육과정 수료<br>
                - 전화영어 센터 출신<br>
              </div>
              <div style="position: absolute; bottom: 0; right: 0; font-size: x-small; margin: 0px 10px 10px 0px"> 더보기
              </div>
            </v-card>
          </v-row>
        </router-link>


        <router-link className="text-decoration-none" to="/main/guide/call">
          <v-row className="card-body" style="height: 180px;">
            <v-card flat style="background-color: #814ed2; color: white; margin: 10px; ">
              <div>
                <h5 className="card-header">전화 or 화상</h5>
              </div>
              <div className="small section-subheading" style="margin:  10px">
                <img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_zoom.png" width="38px"
                     height="38px"
                     style="border-radius: 0.25rem; margin: 10px">
                <img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_skype.png" width="38px"
                     height="38px"
                     style="border-radius: 0.25rem; margin: 10px">
                <div style="position: absolute; bottom: 0; right: 0; font-size: x-small; margin: 0px 10px 10px 0px">
                  더보기
                </div>
              </div>
            </v-card>
          </v-row>
        </router-link>
      </v-col>
    </v-row>


  </v-container>
</template>
<script>
import {mapGetters} from "vuex";
import common_util from "@/utils/common_util";

export default {
  name: 'MainAbout',
  data() {
    return {}
  },
  components: {
  },
  computed: {
    ...mapGetters(['app']),
    subTitleProcess() {
      return this.app.sysconf.filter(s => s.code === 'en9door_INFO_CONTENT_PROCESS').map(s => s.value).toString()
    },
    subTitleTeacher() {
      return this.app.sysconf.filter(s => s.code === 'en9door_INFO_CONTENT_TEACHER').map(s => s.value).toString()
    },
    subTitleContent() {
      return this.app.sysconf.filter(s => s.code === 'en9door_INFO_CONTENT_BOOK').map(s => s.value).toString()
    },
    isMobile: function () {
      return common_util.isMobile()
    },
    desktopCardHeight: function () {
      return common_util.isMobile() === false ? 320 : undefined
    }
  }
}
</script>
<style>
.dark-purple {
  background-color: #20bdd9
}
</style>
