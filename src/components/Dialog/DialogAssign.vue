<template>
  <v-card>
    <v-row>
      <v-col cols="12" :lg="selectedAssign.assignId != null ? 5 : 12">
        <v-card-title v-if="selectedAssign.registerId">Current Register : {{ selectedAssign.registerId }}</v-card-title>
        <v-card-title v-if="selectedAssign.assignId">Current Assign : {{ selectedAssign.assignId }}  </v-card-title>
        <v-card-text>
          <slot name="body">
            <v-row>
              <v-col v-if="selectedAssign.assignId" sm="4"><v-text-field label="Assign Id"              :readonly=!isManager v-model="selectedAssign.assignId"></v-text-field></v-col>
              <v-col v-if="selectedAssign.assignId" sm="4"><v-text-field label="Assign Count"           :readonly=!isManager v-model="selectedAssign.assignCount"></v-text-field></v-col>
              <v-col v-if="selectedAssign.assignId" sm="4"><v-text-field label="Assign Status"          :readonly=!isManager v-model="selectedAssign.assignStatus"></v-text-field></v-col>
              <v-col v-if="selectedAssign.registerId" sm="4"><v-text-field label="Register Status"          :readonly=!isManager v-model="selectedAssign.registerStatus"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col cols="5" sm="5">
                <v-menu v-model="datePickerMenu" :close-on-content-click="false"
                        :readonly=!isManager
                        transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field class="text-h6"
                                  v-model="selectedAssign.startDate"
                                  label="Start Date (수업 시작일)"
                                  readonly
                                  v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="selectedAssign.startDate"
                      @input="datePickerMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="7" sm="7">
                <v-menu
                    ref="menu"
                    v-model="timePickerMenu"
                    :close-on-content-click="false"
                    :nudge-right="60"
                    :return-value.sync="selectedAssign.classStartTime"
                    transition="scale-transition"
                    offset-y
                    max-width="330px"
                    min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="selectedAssign.classStartTime"
                        label="수업 시작 시간"
                        prepend-icon="access_time"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                      v-if="timePickerMenu"
                      v-model="selectedAssign.classStartTime"
                      min="7:30"
                      max="24:00"
                      :allowed-minutes="allowedStep"

                      use-seconds
                      :allowed-seconds="[ 0 ]"
                      width="330px"
                      @click:minute="$refs.menu.save(selectedAssign.classStartTime)"
                  ></v-time-picker>
                </v-menu>
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
            </v-row>
            <v-row>
              <v-col sm="4"><v-text-field label="Student Username"        :readonly=!isManager v-model="selectedAssign.studentName"></v-text-field></v-col>
              <v-col sm="4"><v-text-field label="Student English Name"    :readonly=!isManager v-model="selectedAssign.studentEngName"></v-text-field></v-col>

              <v-col sm="4"><v-text-field label="Teacher Name"            :readonly=!isManager v-model="teacherName"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col sm="4"><v-text-field label="Call Type"           :readonly=!isManager v-model="selectedAssign.callType" ></v-text-field></v-col>
              <v-col sm="2"><v-text-field label="Call App Type"           :readonly=!isManager v-model="selectedAssign.callAppType" ></v-text-field></v-col>
              <v-col sm="6"><v-text-field label="Skype/ Zoom"             :readonly=!isManager v-model="selectedAssign.skypeId" background-color="text_background"  color="text"></v-text-field></v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="3" v-if="!selectedAssign.assignId"><v-btn color="red darken-4"  dark rounded label="Class End" @click="createAssign()">수업 생성</v-btn></v-col>
            </v-row>
            <v-row>
              <v-col sm="12"><v-textarea label="Registered Comment" :readonly=!isManager v-model="selectedAssign.registerMention" height="150px"></v-textarea></v-col>
            </v-row>
          </slot>
        </v-card-text>
      </v-col>
      <v-col v-if="selectedAssign.assignId" cols="12" lg="7">
        <v-card-text height="50vh">
          <v-row>
            <v-col>
              <v-text-field label="Attended Count"          :readonly=!isManager v-model="selectedAssign.countAttended"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Postpone Count"          :readonly=!isManager v-model="selectedAssign.countPostponed"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="3"><v-btn color="green darken-4"  dark rounded label="Payment Receipt" @click="linkReceipt()">영수증</v-btn></v-col>
            <v-col cols="6" sm="3" v-if="selectedAssign.assignId"><v-btn color="gray darken-2"  dark rounded  label="Attendance Sheet" @click="sendAttendanceSheet(false)">출석증</v-btn></v-col>
            <v-col cols="6" sm="3" v-if="selectedAssign.assignId"><v-btn color="gray darken-2"  dark rounded  label="Attendance Sheet" @click="sendAttendanceSheet(true)">출석증(개근)</v-btn></v-col>
            <v-col cols="6" sm="3" v-if="selectedAssign.assignId && isManager"><v-btn color="red darken-4"  dark rounded label="Class End" @click="completeAssignClass()">수업 완료</v-btn></v-col>
            <v-col cols="6" sm="3" v-if="selectedAssign.assignId && isOwner"><v-btn color="red darken-4"  dark rounded label="Class End" @click="quitAssignClass()">수업 중단</v-btn></v-col>
            <v-col cols="6" sm="3" v-if="selectedAssign.assignId && isManager"><v-btn color="red darken-4"  dark rounded label="Teacher Changed" @click="noticeTeacherChanged()">Teacher Changed</v-btn></v-col>
          </v-row>
          <v-row v-if="selectedAssign.assignId">
            <GridAttend class="agGrid"
                        :attendList="selectedAssign.attendList"
                        :is-show-button="true"
                        :is-dialog="true"
            />
          </v-row>
          <v-row>
            <v-col sm="12"><v-textarea label="Assign Comment" :readonly=!isManager v-model="selectedAssign.assignMention" height="100px"></v-textarea></v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-actions class="justify-end mr-2 pb-4">
      <v-btn color="orange darken-4" dark rounded small @click="saveAssign">Save(저장)</v-btn>
      <v-btn color="blue darken-4" dark rounded small @click="$emit('hide')">Close(닫기)</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import GridAttend from "@/components/Grid/grid-attend";
import apiPayment from "@/api/modules/api-payment";
import apiStudent from "@/api/modules/api-student";
import apiManager from "@/api/modules/api-manager";
import apiAssign from "@/api/modules/api-assign";

export default {
  name: 'DialogAssign',
  components: { GridAttend },
  props: {
    selectedAssign: {type: Object, default: [],}
  },
  data(){
    return {
      datePickerMenu: false,
      timePickerMenu: false,
      attendList: [],
      listLoading: true
    }
  },
  computed: {
    ...mapGetters(['app','user','isOwner', 'isManager','teacherList']),
    teacherName: function (){
      if (this.selectedAssign.teacher != null) {
        return this.selectedAssign.teacher.username
      }else {
        return ''
      }
    }
  },
  created() {  },
  beforeMount() {  },
  mounted() {
    this.fetchClassStartTime()
  },
  methods: {
    ...mapActions(['fetchClassStartTime']),
    allowedStep: m => m % 10 === 0,

    saveAssign(){
      this.$emit('updateData', this.selectedAssign)

    },
    linkReceipt(){
      apiPayment.receiptUrl(this.selectedAssign.orderId)
        .then(receiptLink => this.$openWindow(receiptLink, 'book', 0, 0))
    },
    sendAttendanceSheet(isFake){
      apiManager.getAttendanceSheet(this.selectedAssign.assignId, isFake)
          .then(() => this.$dialog.notify.success('출석확인증 이메일로 발송되었습니다.', {position: 'top-right', timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right', timeout: 1000}))
    },
    createAssign(){
      apiManager.createAssign(this.selectedAssign)
          .then(() => this.$dialog.notify.info('Success', {position: 'top-right',timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right',timeout: 1000}))
    },
    completeAssignClass(){
      apiManager.completeAssign(this.selectedAssign)
          .then(() => this.$dialog.notify.success('Update Successfully', {position: 'top-right', timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right', timeout: 1000}))
    },
    quitAssignClass(){
      apiManager.quitAssignClass(this.selectedAssign)
          .then(() => this.$dialog.notify.success('Update Successfully', {position: 'top-right', timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right', timeout: 1000}))
          .finally(() =>this.$emit('quitAssignClass', this.selectedAssign))
    },
    noticeTeacherChanged(){
      apiManager.noticeTeacherChanged(this.selectedAssign)
          .then(() => this.$dialog.notify.success('Message Sent', {position: 'top-right', timeout: 1000}))
          .catch(err => this.$dialog.notify.error(err.message, {position: 'top-right', timeout: 1000}))
    }
  },

}
</script>
