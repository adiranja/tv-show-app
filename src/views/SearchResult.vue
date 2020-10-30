<template>
  <div>
    <b-container fluid class="result" style=" background : #01011d">
      <b-row>
        <b-button
          pill
          variant="primary"
          class="btn-circle mt-4"
          @click="$router.go(-1)"
        >
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
      </b-row>
      <br />
      <br />
      <template v-if="shows.length > 0">
        <b-row>
          <b-col
            lg="3"
            md="4"
            sm="6"
            class="gap-8"
            v-for="show in shows"
            :key="show.id"
          >
            <card v-bind:shows="show"> </card>
            <br />
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-row class="mt-4">
          <b-col lg="3" md="4" v-for="i in 10" :key="i">
            <content-placeholders :rounded="true">
              <content-placeholders-img
                style="height:295px ;width:210px ; "
              />
              <content-placeholders-text :lines="2" />
            </content-placeholders>
            <br />
          </b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>
<script>
import { searchMovie } from "../service/api";
import Card from "../views/Card";
export default {
  name: "SearchShows",
  components: {
    Card
  },
  data() {
    return {
      shows: []
    };
  },
  created() {
    this.getSearchedShows();
  },
  methods: {
    getSearchedShows() {
      searchMovie(this.$route.params.query)
        .then(response => {
          this.shows = response.data;
          this.shows = this.shows.map(show => show.show);
          if (this.shows.length == 0)
            this.$router.push({
              name: "PageNotFound"
            });
        })
        .catch(err => console.log(err));
    }
  },
  watch: {
    $route(to) {
      this.getSearchedShows(to.params.query);
    }
  }
};
</script>
<style scoped>
.result {
  padding-left: 70px;
}
</style>