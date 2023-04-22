<template>
  <div></div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
import Cookies from "vue-cookies";

export default {
  created() {
    this.token = this.$route.query.token
  },
  mounted() {
    this.redirect()
  },
  methods: {
    ...mapActions(['fetchUser']),
    ...mapMutations(['SET_TOKEN']),
    redirect() {
      if (this.token) {
        this.SET_TOKEN(this.token)
        this.fetchUser()
            .then(() => {
              let redirect = Cookies.get('redirect')
                  ? Cookies.get('redirect')
                  : null;
              if(redirect) {
                this.$router.replace(redirect)
              }else {
                this.$router.replace('/')
              }
            })
      }
    }
  }
}
</script>
