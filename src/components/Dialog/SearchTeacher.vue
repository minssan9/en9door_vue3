<template>
  <v-card>
    <v-card-title>Current Teacher : {{ selectedTeacher.teacherId }} -  {{ selectedTeacher.username }}</v-card-title>
    <v-card-text>
      <slot name="body">
        <GridTeacher class="agGrid"
                     :teacher-list="teacherList"
                     :is-select-dialog="false"
                     @onClickTeacher="onClickTeacher"
        />
      </slot>
    </v-card-text>
    <v-card-actions class="justify-end mr-2 pb-4">
      <v-btn color="amber" dark rounded small @click="$emit('hide')">
        Close(취소)
      </v-btn>
      <v-btn color="success" rounded small @click="$emit('submit')">
        Submit(확인)
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import GridTeacher from "@/components/Grid/grid-teacher";

export default {
  name: 'SearchTeacher',
  components: {GridTeacher},
  props: {
    selectedTeacher: {type: Object, default: [],},
  },
  data(){
    return {
      listLoading: true,
      searchQuery: {
        studentName: '',
        stat: 'ACTIVE',
        page: 1,
        size: 10,
        sort: 'createdAt'
      },
      context: '',
    }
  },
  computed: {
    ...mapGetters(['app','user','teacherList'])
  },
  created() {
    this.context = {CompSelectTeacher: this};
  },
  mounted() {
    this.fetchTeacherList()
  },
  methods: {
    ...mapActions(['fetchTeacherList']),
    onGridReady(params){
      params.api.setHeaderHeight(60);
      this.columnApi = params.columnApi;
    },
    onClickTeacher(params){
      this.$emit('submit', params)
    },
  }
}
</script>

<style scoped>
.pagination-container {
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
