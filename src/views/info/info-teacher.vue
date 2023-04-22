<template>
  <v-app class="appContainer" id="guideCall">
    <v-container fluid>
      <v-row class="header" align="center">
        <h2> 원어민 선생님 </h2>
      </v-row>
      <v-row>
        <Markdown :markdown="this.teacher"/>
      </v-row>
      <v-row class="row g-3" >
        <v-col cols="12" sm="4" v-for="t in teacherList" :key="t.accountId">
          <v-card elevation="8"
                  outlined>
            <v-card-title class="card-subtitle">{{ t.username }}</v-card-title>
            <v-row>
              <v-col cols="4">
                <img :src="t.profileImageUrl"
                       width="100%"

                       style="border: 1px solid transparent; border-color: #6c757d; border-radius: 0.25rem; margin:10px;">
              </v-col>
              <v-col cols="8" v-if="t.major">
                <v-card-text>Major : {{ t.major }} </v-card-text>
<!--                <v-card-text v-if="t.career">Career : {{ t.career }} </v-card-text>-->
                <v-card-text>Personality : {{ t.personality }} </v-card-text>
<!--                <v-card-text>Country : {{ t.country }} </v-card-text>-->
<!--                <v-card-text v-if="t.intro">Intro : {{ t.intro }} </v-card-text>-->
              </v-col>
              <v-col>
                <!-- <lazy-youtube v-if="t.profileVideoUrl.trim() != ''" :src="t.profileVideoUrl" max-width="720px"
                              style=" margin:10px; width: 90%"
                /> -->
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Markdown from '@/components/Markdown'
// import {LazyYoutube} from "vue-lazytube";
import {mapActions} from "vuex";

export default {
  name: 'InfoTeacher',
  data() {
    return {
      teacher: '' +
          '- 수강 기간 내 담당 선생님 지정\n' +
          '- 수업 시간 조율 가능\n ' +
          '- 전문 교육 수료, 전화영어센터 경력 3년 ↑ \n' +
          '- 한국인 담당자 면접(영미권 발음 검증) \n',
      teacherList: []
    }
  },
  components: {
    Markdown,
    // LazyYoutube
  },
  computed: {

  },
  created() { },
  mounted() {
    this.fetchTeacherList()
      .then(res => {
        this.teacherList = res.sort((a, b) => {
          return a.profileVideoUrl > b.profileVideoUrl ? -1 : 1
        })
      })
  },
  methods: {
    ...mapActions(['fetchTeacherList']),
  },

}
</script>

<style scoped>
</style>

