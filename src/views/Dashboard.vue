<template>
  <b-container fluid class="home" style=" background:#01011d">
    <template v-if="popular.length > 0">
      <br />
      <h2>Popular</h2>
      <b-row class="mt-4">
        <b-col lg="3" md="4" v-for="p in popular" :key="p.id">
          <card v-bind:shows="p"></card>
          <br />
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row class="mt-4">
        <b-col lg="3" md="4" v-for="i in 10" :key="i">
          <content-placeholders :rounded="true">
            <content-placeholders-img
              style="height:295px ;width:210px  "
            />
            <content-placeholders-text :lines="2" />
          </content-placeholders>
          <br />
        </b-col>
      </b-row>
    </template>
    <br />
    <template v-if="categoriesShows.length > 0">
      <div v-for="genre in categoriesShows" :key="genre.id">
        <h2>{{ genre.name }}</h2>
        <br />
        <b-row>
          <b-col
            lg="3"
            md="4"
            class="gap-8"
            v-for="show in genre.shows"
            :key="show.id"
          >
            <card v-bind:shows="show"> </card>
            <br />
          </b-col>
        </b-row>
        <br />
      </div>
    </template>

    <template v-else>
      <b-row class="mt-4">
        <b-col lg="3" md="4" v-for="i in 10" :key="i">
          <content-placeholders :rounded="true">
            <content-placeholders-img
              style="height:295px !important;width:210px !important; "
            />
            <content-placeholders-text :lines="2" />
          </content-placeholders>
          <br />
        </b-col>
      </b-row>
    </template>
  </b-container>
</template>

<script>
import { getAllMovies } from "../service/api";
import Card from "../views/Card";
export default {
  name: "Dashboard",
  components: {
    Card
  },
  data() {
    return {
      shows: [],
      popular: [],
      categories: [],
      categoriesShows: []
    };
  },
  created() {
    getAllMovies()
      .then(response => {
        this.shows = response.data;
        this.popular = this.getPopularshow(this.shows);
        this.categories = Array.from(new Set(this.getCategories(this.shows)));
        this.categoriesShows = this.getCategoryShows(this.categories);
        
      })
      .catch(err => console.log(err));
  },
  methods: {
    getPopularshow(shows) {
      return shows
        .filter(show => show.rating.average)
        .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
        .slice(0, 8);
    },

    getCategories(shows) {
      return shows.flatMap(show => show.genres);
    },

    getCategoryShows(categories) {
      return categories.map(genre => {
        return {
          name: genre,
          shows: this.getPopularshow(
            this.shows.filter(show => show.genres.includes(genre))
          )
        };
      });
    }
  }
};
</script>
<style scoped>
h2 {
  color: #0000cd;
}

.home {
  padding-left: 70px;
}
</style>