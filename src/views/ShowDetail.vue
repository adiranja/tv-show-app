<template>
  <div style=" background : #01011d">
    <div>
      <b-button pill variant="primary" class="mt-4" @click="$router.go(-1)">
        <b-icon icon="arrow-left"></b-icon>
      </b-button>
    </div>
    <br />
    <b-container fluid style="min-height:80vh">
      <b-row align-h="center">
        <b-col lg="4" md="6" sm="6">
          <b-img
            v-if="show.image"
            left
            fluid
            width="300%"
            v-bind:src="show.image.medium || show.image.original"
            rounded
          ></b-img>
          <spinner
            v-bind:shows="show"
            v-else
            class="spin"
            style="color:white"
          />
        </b-col>
        <b-col lg="8" md="6" sm="6">
          <h2 class="show-name" style="color:#007bff">{{ show.name }}</h2>
          <div>
            <span>
              <b-icon icon="star-fill" style="color:yellow"></b-icon>
            </span>
            <span
              class="ml-2 show-average"
              style="color:white"
              v-if="show.rating"
              >{{ show.rating.average }}</span
            >
            <br />
            <span
              ><b-icon icon="calendar3" style="color:#0000CD"></b-icon>
            </span>
            <span
              class="show-premiered ml-2"
              style="color:white"
              v-if="show.premiered"
            >
              {{ show.premiered }}</span
            >
            <br />
            <span><b-icon icon="film" style="color:0000CD"></b-icon></span>
            <span
              class="show-genres ml-2 "
              style="color:white"
              v-if="show.genres"
            >
              {{ show.genres.join() }}</span
            >
          </div>
          <div class="mt-3" style="color:white">
            <p v-html="show.summary"></p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { getMovieDetails } from "../service/api";
import Spinner from "../spinner/Spinner";

export default {
  name: "ShowDetails",
  data() {
    return {
      show: {}
    };
  },
  components: {
    Spinner
  },
  created() {
    getMovieDetails(this.$route.params.id)
      .then(response => {
        this.show = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.spin {
  width: 6rem;
  height: 6rem;
  margin-top: 10%;
  margin-left: 10%;
}
</style>