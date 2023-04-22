<template>
  <v-container fluid>
    <v-row class="row g-3" >
      <v-col cols="10">
        <h2> 영어문 운영 방식 </h2>
      </v-col>
      <v-col cols="2">
        <a class="" href="https://pf.kakao.com/_gjKqxb/chat">
          <img src="@/assets/icon/kakaotalk_icon.svg" width="40">
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Markdown :markdown="classInfo1"/>
      </v-col>
      <v-col cols="12" md="6">
        <Markdown :markdown="classInfo2"/>
        <img class="container"
             src="https://en9door-web.s3.ap-northeast-2.amazonaws.com/website/marketing/price_comparison.PNG"
             width="100%">
      </v-col>
      <v-col cols="12" md="6">
        <Markdown :markdown="classInfo3"/>
      </v-col>
      <v-col cols="12" md="6">
        <Markdown :markdown="classInfo4"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Markdown from '@/components/Markdown'

export default {
  name: 'InfoClass',
  data() {
    return {
      classInfo1: '' +
          '### 이용 안내\n' +
          '- 무료 레벨 테스트\n' +
          '- 수업 가능 시간 : 8AM ~ 11PM \n' +
          '- 20회 수강권 기준 횟수 차감 방식(수업 연기 5회)\n' +
          '- 결제 영수증, 출석증 발급\n' +
          '---\n' +
          '- Skype, Zoom 기반 수업\n' +
          '- 화상 / 음성통화 동일 가격\n' +
          '---\n' +
          '- 담당 선생님 지정 및 동일한 시각에 수업\n' +
          '- 한국, 필리핀 공휴일 수업은 휴무이며, 자동 연기\n' +
          '- 현지 전력, 인터넷 문제로 수업 불가시, 자동 연기\n' +
          '---\n',

      classInfo2: '### 가격 비교\n' +
          '- IT 개발자가 운영하는 플랫폼으로 강사와 고객님을 직접 연결하며, ' +
          '운영비용을 최소화하여 보다 나은 서비스를 제공하고 있습니다. \n',

      classInfo3: '' +
          '### 수업 보충\n' +
          '개인적인 이유로 수업 참석이 어려운 경우, \n' +
          '사전(최소 1일전)에 My Class(수강현황) 화면에서 수업연기 요청\n' +
          '- 보충 수업 1개월 5회까지만 가능합니다.\n' +
          '- 연장의 경우에도 주말을 제외하고 5일까지 가능합니다.\n' +
          '\n' +
          '선생님께만 전달 하거나 문자로 주시는 경우에는 누락되어 보강으로 진행이 안될 수 있으니 사이트 이용 반드시 부탁 드립니다.\n' +
          '\n' +
          '- 한번 연장하신 수업은 재연장, 혹은 보충수업 처리 되지 않습니다.\n' +
          '- 연장수업은 수업 마지막날을 기준으로 처리됩니다.\n' +
          '\n' +
          'ex)\n' +
          '- 수업일 : 1월1일(목)~ 1월28일(수) 인 경우\n' +
          '- 2번 연장 요청시 : 연장일은 29일(목), 30(금)일 까지만 수업이 진행됩니다\n' +
          '- 3번 연장 요청시 : 연장일은 29일(목), 30일(금), 31(토) , 2/1 (일) , 2/2 (월) 까지 입니다.\n' +
          ' (주말을 제외하고 연장 처리 됩니다)\n' +
          '- 보충 수업은 평일 또는 주말 중 선생님 스케줄과 조율되어 진행될 수 있습니다.\n' +
          '\n' +
          '### 선생님 변경\n' +
          '선생님 변경을 희망하시는 경우 최소 희망하시는 변경일 하루 전에, 카카오톡으로 요청해주시면 반영해 드립니다.',
      classInfo4: '### 환불규정\n' +
          '영어문의 수업료 환불 규정은 아래와 같습니다.\n' +
          '\n' +
          '1개월/총 20회 수업 중\n' +
          '- 총 교습시간의 1/3 미만(6회) : 수강료의 2/3 해당 환불\n' +
          '- 총 교습시간의 1/2 미만(10회) : 수강료의 1/2 해당 액 환불\n' +
          '- 총 교습시간의 1/2 경과 후 환불하지 않음\n' +
          '\n' +
          '수업 연장일은 환불에 포함되지 않습니다.\n\n' +
          '환불 신청은 하루 전 카카오톡을 통해 계좌번호와 함께 남겨주세요.\n\n' +
          '수업당일 전달 시에는 수업일로 처리가 됩니다.\n'
    }
  },
  components: {
    Markdown
  },
  created() {
  },
}
</script>

<style scoped>
</style>

