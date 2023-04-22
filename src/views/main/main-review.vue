<template>
  <v-container fluid>
    <v-row justify="center" class=" row g-3" >
      <div class="text-h4 text-center font-weight-bold section-heading text-uppercase">
        수강 후기
      </div>
      <v-carousel
          ref="reviewCarousel"
          height="280"
          hide-delimiters :touchless="true"
          show-arrows-on-hover
          cycle
          continuous
      >

        <v-carousel-item v-for="(review, i) in reviewList" :key="i"
                         reverse-transition="fade-transition"
                         transition="fade-transition"
        >
          <v-card class="mx-auto" color=""
                  outlined
                  elevation="5"
                  rounded
                  raised
                  height="270"
                  style="padding: 20px"
          >
            <v-row>
              <v-col cols="6">
                <strong>고객명 : {{ review.studentName }}</strong>
                <p class="text-body-2">수강일자 : {{ review.startDate }}</p>
              </v-col>
              <v-col cols="6">
                <v-row class="row g-3">
                  <v-col cols="5">
                    <v-row>
                      <v-rating
                          empty-icon="$mdiStarOutline"
                          full-icon="$mdiStar"
                          half-icon="$mdiStarHalfFull"
                          readonly
                          half-increments
                          dense
                          size="17"
                          hover
                          length="5"
                          v-model="review.rating"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                      > </v-rating>
                    </v-row>
                  </v-col>
                  <v-col class="text-right">
                    <v-row class="row g-1">
                      <div class="text-body-2">{{review.rating }} / 5.0</div>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="text-right">

                </v-row>
              </v-col>
            </v-row>
            <v-row class="row" style="height: 70%">
              <Markdown :markdown="review.reviewText" style="height: 100%"/>
            </v-row>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script>
// import Markdown from '@/components/Markdown'
import apiReview from "@/api/modules/api-review";

export default {
  name: 'MainReview',
  components: {
    // Markdown
  },
  data(){
    return {
      reviewList: [],
      listLoading: true,
      move: [],
      drag: false,
      touch: false,
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.getReviews(),
    // For touch devices
    this.$refs['reviewCarousel'].$el.addEventListener("touchmove", (e) => {
      this.drag = false;
      this.touch = true;
      this.logic(e);
    });
    window.addEventListener("touchend", (e) => {
      this.move = [];
    });

    // For non-touch devices

    this.$refs['reviewCarousel'].$el.addEventListener("mousedown", (e) => {
      this.drag = true;
      this.touch = false;
      this.logic(e);
    });
    this.$refs['reviewCarousel'].$el.addEventListener("mousemove", (e) => {
      this.drag ? this.logic(e) : null;
    });
    window.addEventListener("mouseup", (e) => {
      this.drag = false;
      this.touch = false;
      this.move = [];
    });
  },
  methods: {
    getReviews(){
      apiReview.getReviews()
        .then(res => {
          res.map(review => {
            review.studentName = review.studentName.substring(0,2) + '*'
            return review
          })
          return res
        })
        .then(res => this.reviewList = res)
    },
    logic(e) {
      let currentMove = this.touch ? e.touches[0].clientX : e.clientX;
      if (this.move.length == 0) {
        this.move.push(currentMove);
      }
      if (this.move[this.move.length - 1] - currentMove < -100) {
        this.$refs['reviewCarousel'].$el
            .querySelector(".v-window__prev")
            .querySelector(".v-btn")
            .click();
        this.drag = false;
        this.touch = false;
      }
      if (this.move[this.move.length - 1] - currentMove > 100) {
        this.$refs['reviewCarousel'].$el
            .querySelector(".v-window__next")
            .querySelector(".v-btn")
            .click();
        this.drag = false;
        this.touch = false;
      }
    }
  }
}
</script>
