<template>
  <v-container fluid>
    <v-row class="row g-3" >
      <h2> 교육 과정 및 교재 샘플 </h2>
    </v-row>
    <v-row>
      <Markdown :markdown="this.content"/>
    </v-row>

    <v-row v-for="t in app.content " :key="t.contentId">
      <v-col style="margin-bottom: 10px;">
        <v-card color="bg_1"
                elevation="8"
                outlined
                shaped>
          <v-card-title v-text="t.description" ></v-card-title>
          <Markdown :markdown="t.contentDesc"/>
          <v-card-actions style="margin-bottom: 10px;">
            <v-list-item-group color="book">
              <v-list-item  v-for="b in t.bookList" :key="b.bookId">
                <v-btn class="small" color="secondary" @click="openWindow(b.bookSampleLink, b.bookName)">
                  <v-list-item-content> {{ b.bookName }} </v-list-item-content>
                </v-btn>
              </v-list-item>
            </v-list-item-group>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Markdown from '@/components/Markdown'
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'InfoContent',
  data(){
    return {
      content: '- 수업 중 필요 교재 제공\n' +
               '- 상세 커리큘럼은 아래 항목에서 확인 부탁드립니다.\n\n' +
               '※ 아래 교재 링크는 일부 샘플입니다.',
    }
  },
  computed: {
    ...mapGetters(['app']),
  },
  components:{
    Markdown
  },
  mounted() {
    this.fetchContent()
  },
  methods: {
    ...mapActions(['fetchContent']),
    openWindow(link, title){
      this.$openWindow(link, title, 0, 0 )
    }
  }
}
</script>

<style scoped>
</style>

