import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import SearchResult from "../views/SearchResult";
import ShowDetail from "../views/ShowDetail";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Dashboard',
  component: Dashboard
},

{
  path: '/search/:query',
  name: 'SearchResult',
  component: SearchResult
},

{
  path: '/shows/:id',
  name: 'ShowDetail',
  component: ShowDetail
},

{
path: '*',
name: 'PageNotFound',
component: PageNotFound
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
