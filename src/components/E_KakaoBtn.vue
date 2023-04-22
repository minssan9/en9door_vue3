<template>
  <v-row justify="center" class="text-center" style="margin: 40px 0px 40px 0px">
    <v-col cols="6">
      <v-row >
        <v-btn elevation="5"
               class="black--text"
               color="#FDE613FF"
               size="x-large"
               @click="openWindow('https://pf.kakao.com/_gjKqxb/chat' )"
               style="background-color: #FDE613FF; font-size: large;"
        >
          <img :src="require('@/assets/icon/kakaotalk_icon.svg')" width="30">
               카카오톡 문의
        </v-btn>
      </v-row>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'E_BtnKakao',
  methods: {
    openWindow(link) {
      this.$openWindow(link, 'book', 0, 0)
    }
  },
}
</script>
