<template>
  <v-container fluid>
    <v-row >
      <v-col cols="12" md="4" >
        <v-row justify="center" class="row gy-5" style="margin: 20px 0px 20px 0px">
          <v-col cols="12">
            <v-row class="h3" justify="center"
                   style="font-size: 36px;  letter-spacing: 0.001px; margin-right: 2px ">
              <div>
                <v-img
                  :width="40"
                  aspect-ratio="16/9"
                  :src="mainLogoImg"
                  style="margin-bottom: 0px; margin-right: -5px; width: 40px"
                />
              </div>
              {{ mainPageTitle1 }}
            </v-row>
            <v-row justify="center">
              <div class="text-center section-heading text-uppercase font-weight-bold" >
                {{ mainPageTitle2 }}
              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="text-center bg_1" justify="center" style="padding: 60px 0px 50px 0px">
          <v-col cols="12">
            <div class="text-h5 font-weight-bold section-heading text-uppercase ">출퇴근, 산책하며</div>
          </v-col>
          <v-col cols="12">
            <div class="text-h4 font-weight-bold section-heading text-uppercase ">즐기는 실전회화</div>
          </v-col>
          <h5 justify="center" class="text-sm-h5" > {{ mainPageTitle3 }}  </h5>
          {{ mainPageTitle3 }}

          <E_BtnTest></E_BtnTest>
        </v-row>

        <v-row justify="center"  class="text-center" style="margin: 50px 0px 50px 0px">
          <div>
            <v-img
              :width="150"
              aspect-ratio="16/9"
              src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/main/main-icon-money.png"
            ></v-img>
          </div>
          <v-col cols="12">
            <div class="text-h4 font-weight-bold section-heading text-uppercase blue--text">출퇴근, 산책하며</div>
          </v-col>
          <v-col cols="12">
            <div class="text-h6 font-weight-bold section-subheading">
              얼마든지 수업 가능<br><br>

              바쁜 일상에서 매일 20분씩<br>
              나만의 루틴 만들기!
            </div>
          </v-col>
          <E_BtnKakao></E_BtnKakao>
        </v-row>
      </v-col>


      <v-col cols="12" md="4"  >
        <v-row justify="center">
          <MainAbout style="padding-top: 60px; padding-bottom: 60px" />
        </v-row>

        <v-row justify="center"  class="text-center " style="margin-top: 30px; margin-bottom:  30px; padding: 60px 0px 50px 0px">
          <div>
            <v-img
              :width="150"
              aspect-ratio="16/9"
              src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/main/main-icon-money.png"
            ></v-img>
          </div>
          <v-col cols="12">
            <div class="text-h4 font-weight-bold section-heading text-uppercase " style="color: #20bdd9">
              영어문은 왜 저렴할까?
            </div>
            <div class="text-h6 font-weight-bold section-subheading">
              오피스 임대료 X<br>
              불필요한 광고 X<br>
              시스템 개발 비용 X<br>
              <br>
              <h4>최저가 보장! </h4>
            </div>

            <v-row style="margin-bottom: 30px;">
              <E_BtnTest></E_BtnTest>
            </v-row>
          </v-col>
        </v-row>
      </v-col>


      <v-col cols="12" md="4">

        <v-row align-content="center" justify="center" class="text-center bg_1" style=" margin-bottom:  30px; padding: 60px 0px 50px 0px">
          <div>
            <v-img
              :width="150"
              aspect-ratio="16/9"
              src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/main/main-icon-teacher.png"
            ></v-img>
          </div>
          <v-col cols="12">
            <div class="text-h4 font-weight-bold section-heading text-uppercase purple--text">
              자기 주도 학습
            </div>
          </v-col >
          <div class="text-h6 font-weight-bold section-subheading">
            선생님과 시간 조율 가능<br>
            8 AM - 12 PM 운영<br>
            <br>
            유아 회화부터 성인 영어까지<br>
            다양한 주제 선정 및 교재 제공<br>
          </div>
        </v-row>

        <v-row>
          <MainReview/>
        </v-row>
        <v-row>
          <E_BtnTest></E_BtnTest>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Cookies from 'vue-cookies'
import MainAbout from '@/views/main/main-about'
// import MainReview from "@/views/main/main-review";
import {mapGetters} from "vuex";
// import E_BtnTest from "@/components/E_TestBtn";
// import E_BtnKakao from "@/components/E_KakaoBtn";
export default {
  name: 'MainLanding',
  data() {
    return {
      selected: {
        accountId: null,
        username: '',
      },
      searchQuery: {
        status: 'ACTIVE'
      },
      studentList: [],
      teacherList: []
    }
  },
  components: {
    // E_BtnKakao,
    // E_BtnTest,
    MainAbout,
    // MainReview
  },
  computed: {
    ...mapGetters(['app','user', 'register']),
    mainLogoImg(){
      return 'https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/logo/en9door' + (this.$vuetify.theme.dark  ? '_dark.png' : '.png' );
    },
    mainPageTitle1(){return this.app.sysconf.filter(s => s.code === 'en9door_MAIN_PAGE_TITLE_1').map(s => s.value).toString()},
    mainPageTitle2(){return this.app.sysconf.filter(s => s.code === 'en9door_MAIN_PAGE_TITLE_2').map(s => s.value).toString()},
    mainPageTitle3(){return this.app.sysconf.filter(s => s.code === 'en9door_MAIN_PAGE_TITLE_3').map(s => s.value).toString()},
  },
  created() {
    this.selected.accountId = Cookies.get('accountId');
    this.selected.username = Cookies.get('username');
  },
  mounted() {
  },
  methods: {
    onChrome(){
      window.location.href = 'googlechrome://en9doors.com'
    },
    openWindow(link) {
      this.$openWindow(link, 'book', 0, 0)
    }
  }
}
</script>

