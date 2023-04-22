<template>
  <v-app class="appContainer" id="guideCall">
    <v-container fluid>
      <v-row class="row g-3" align="center">
        <v-col  cols="12" >
          <h2>화상전화 앱 사용 방법</h2>
        </v-col>
        <v-col>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="12">
                    <h3><v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_zoom.png"
                             width="38px"
                             height="38px"
                             style="border: 1px solid transparent; border-color: #6c757d; border-radius: 0.25rem; margin-right:10px "/>Zoom
                    </h3>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row justify="center" align="center">
                  <v-col cols="4" >
                    <h6 >App 설치</h6>
                  </v-col>
                  <v-col>
                    <v-btn class="btn primary" @click="openWindow('https://zoom.us/download')" width="190">Download</v-btn>
                  </v-col>
                </v-row>
                <v-row justify="center" align="center">
                  <v-col cols="4">
                    <h6 >회원가입</h6>
                  </v-col>
                  <v-col>
                    <a type="button"
                       @click="openWindow('https://zoom.us/google_oauth_signin')">
                      <v-img width="190px" height="40px"
                           src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/google-signin-button.png"/>
                    </a>
                  </v-col>
                </v-row>

                <v-row class="row g-3">
                  <v-col>
                    <h6>선생님이 친구요청 보내드리면 Zoom 앱에서 수락 부탁드립니다.</h6>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/zoom-accept-1.jpg" width="100%"/>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/zoom-accept-2.jpg" width="100%"/>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="12">
                    <h3> <v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/button/btn_skype.png"
                              width="38px"
                              height="38px"
                              style="  border-radius: 0.25rem; margin-right: 10px"/>Skype
                    </h3>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row justify="center" align="center">
                  <v-col cols="4" >
                    <h6 >App 설치</h6>
                  </v-col>
                  <v-col>
                    <v-btn class="btn primary" @click="openWindow('https://skype.daesung.com/download/downloadMain.asp')" width="190">Download</v-btn>
                  </v-col>
                </v-row>
                <v-row id="zoom" class="row g-3">
                  <v-col>
                    <h6>선생님에게 Skype 계정을 공유해주시면 전화드립니다.</h6>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/skype1.jpeg" width="100%"/>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-img src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/skype2.jpeg" width="100%"/>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'InfoCallGuide',
  data: () => ({
      skype: '## [Skype 다운로드](https://skype.daesung.com/download/downloadMain.asp)\n' +
          '![skype](https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/get_skype_id.jpg)',
      // panel: [0, 1]
    }),
  components: {  },
  created() {
  },
  methods: {
    openWindow(link) {
      this.$openWindow(link, 'book', 0, 0)
    },
  }
}
</script>
