<template>
  <v-card>
    <v-row>
      <v-col cols="12"  >
        <v-card-title>Current Register : {{ selectedAssign.registerId }}</v-card-title>
        <v-card-title>Current Assign : {{ selectedAssign.assignId }}  </v-card-title>
        <v-card-text>
          <slot name="body">
            <v-row>
              <v-col sm="3"><v-text-field label="Assign Status"          :readonly=!isManager v-model="selectedAssign.registerStatus"></v-text-field></v-col>
              <v-col sm="3"><v-text-field label="Student Username"        :readonly=!isManager v-model="selectedAssign.student.username"></v-text-field></v-col>
              <v-col sm="3"><v-text-field label="Student English Name"    :readonly=!isManager v-model="selectedAssign.student.englishName"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col sm="6"><v-text-field label="Start Date"             :readonly=!isManager v-model="selectedAssign.startDate"></v-text-field></v-col>
              <v-col sm="6">
                <v-select v-model="selectedAssign.classStartTime" :hint="`${selectedAssign.classStartTime}`"
                          label="Class Start Time(수업 시작 시간)"
                          :items="app.classStartTimeList"
                          item-text="item" item-value="item"  persistent-hint return-object
                ></v-select>
<!--                <v-text-field label="Class Start Time"       :readonly=!isManager v-model="selectedAssign.classStartTime"></v-text-field>-->
              </v-col>
            </v-row>
            <v-row>
                <v-item-group multiple v-model="selectedAssign.assignDays" >
                  <v-subheader>Class Days(수업 요일)</v-subheader>
                  <v-item v-slot="{ active, toggle }" v-for="item in app.weekdays" :key="item.value" :value="item.value" >
                    <v-btn :id="item.dayOfWeek"  :value="(item.value)" :color="active ? 'primary' : ''"
                           @click="toggle" width="25px"  style="margin: 2px">{{ item.dayOfWeek }}</v-btn>
                  </v-item>
                </v-item-group>
            </v-row>
            <v-row>
              <v-col sm="3"><v-text-field label="Course Name"            :readonly=!isManager v-model="selectedAssign.courseName"></v-text-field></v-col>
              <v-col sm="3"><v-text-field label="Content Name"           :readonly=!isManager v-model="selectedAssign.contentName"></v-text-field></v-col>
              <v-col sm="6"><v-text-field label="Call Type"              :readonly=!isManager v-model="selectedAssign.callType"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col sm="4"><v-text-field label="Call App Type"           :readonly=!isManager v-model="selectedAssign.callAppType" ></v-text-field></v-col>
              <v-col sm="8"><v-text-field label="Skype/ Zoom"             :readonly=!isManager v-model="selectedAssign.skypeId" background-color="text_background" color="text"></v-text-field></v-col>            </v-row>
            <v-row>
              <v-col sm="6"><v-text-field label="Teacher Name"            :readonly=!isManager v-model="teacherName"></v-text-field></v-col>
            </v-row>
          </slot>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-actions class="justify-end mr-2 pb-4">
      <v-btn color="orange darken-4" dark rounded small @click="$emit('updateRegister', selectedAssign)">Save(저장)</v-btn>
      <v-btn color="blue darken-4" dark rounded small @click="$emit('hide')">Close(닫기)</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'DialogRegister',
  components: {  },
  props: {
    selectedAssign: {type: Object, default: [],},
  },
  data(){
    return {
      isManager: false,
      listLoading: true
    }
  },
  computed: {
    ...mapGetters(['app','user','teacherList']),
    teacherName : function (){
      return this.selectedAssign.teacher != null ? this.selectedAssign.teacher.username : ''
    }
  },
  created() {
    this.isManager = this.user.accountRoles.map(ar=>ar.roleType).includes('EN9DOOR_MANAGER')
  },
  mounted() {
    this.fetchClassStartTime()
  },
  methods: {
    ...mapActions(['fetchClassStartTime']),
  }
}
</script>
