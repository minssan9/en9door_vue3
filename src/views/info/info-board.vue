<template>
  <v-container fluid>
      <h3>Board List</h3>
      <bulletin-board-lookup
      />



  </v-container>
</template>

<script>
import BulletinBoardLookup from '@/components/Board/BoardList.vue';
import {mapGetters} from "vuex";

export default {
  name: 'InfoBoard',
  components: {
    BulletinBoardLookup,
  },
  props: {

  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['app', 'user']),
  },
  methods:{
    handleFilter(){

    },
    hideDialog(){

    },
    updateData(){

    }
  }
};
</script>
