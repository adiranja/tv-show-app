<template>
  <div class="header" >
    <b-navbar  style="background:#020235">     
      <b-navbar-brand class="mt-1" style="font-family:Snell Roundhand, cursive; color:white" href="#"
        >Movie</b-navbar-brand
      >
      <b-navbar-nav>
        <b-nav-item class="mt-2" ><router-link to="/" style="color:white" >Home</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 input"
            placeholder="Search"
            v-model="searchQuery"
             @keydown.enter.native="search()"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 btn-search" @click="search()"
            ><b-icon icon="search"></b-icon> </b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },

  methods: {
    search() {
      this.$router.push({
        name: "SearchResult",
        params: {
          query: this.searchQuery
        }
      });
      this.searchQuery = "";
    }
  }
};
</script>
