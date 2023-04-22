<template>
  <v-app class="appContainer" id="guideCall">
    <v-container fluid>
      <v-row class="row g-3" align="center">
        <h2>수강신청 안내</h2>
      </v-row>
      <v-row class="row" >
        <v-col cols="12" sm="10" md="6">
          <v-stepper v-model="e6" complete editable vertical>
            <v-stepper-step :complete="e6 > 1" step="1">#1 고객 정보, 수업 일정</v-stepper-step>

            <v-stepper-content step="1">
              <v-card class="mb-12"   >
                <v-card-text>
                  <img height="500px" src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/register_guide_1.png">
                </v-card-text>
              </v-card>

              <v-divider></v-divider>
              <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">#2 수업 주제, 방식, 시간</v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-12"  >
                <v-card-text>
                  <img height="500px" src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/register_guide_2.png">
                </v-card-text>
              </v-card>

              <v-divider></v-divider>
              <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
              <v-btn @click="e6 = 1">Back</v-btn>
            </v-stepper-content>

            <v-stepper-step step="3">#3 금액 확인, 테스트 신청, 결제</v-stepper-step>
            <v-stepper-content step="3">
              <v-card class="mb-12"  >
                <v-card-text>
                  <img height="500px" src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/guide/register_guide_3.png">
                </v-card-text>
              </v-card>

              <v-divider></v-divider>
              <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
              <v-btn @click="e6 = 2">Back</v-btn>
            </v-stepper-content>
            <E_TestBtnSmall></E_TestBtnSmall>

          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import E_TestBtnSmall from "@/components/E_RegisterBtn";

export default {
  name: 'RegisterGuide',
  data: () => ({
    e6: 1,
  }),
  components: { E_TestBtnSmall },
  computed: {   },
  created() {
  },
  methods: {
  }
}
</script>
