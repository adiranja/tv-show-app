import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueContentPlaceholders from 'vue-content-placeholders'
import Dashboard from '@/views/Dashboard.vue';
import Card from '@/views/Card.vue';
import {
  homeShows, showGenres, homeShowsByGenres, sortedHomeShows, homeShowsInRandom
} from '../testing-data.js'
import moxios from "moxios";

describe('In DashBoard Component', () => {
  let dashboardWrapper;
  beforeEach(() => {
    moxios.install();
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    localVue.use(VueContentPlaceholders);
    dashboardWrapper = shallowMount(Dashboard, {
      localVue,       
    });
  });

  afterEach(() => {
    moxios.uninstall();
    dashboardWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(dashboardWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a <b-container> element', () => {
    expect(dashboardWrapper.findAll('b-container-stub').length).toBe(1);
  });

   it('it should load the card', () => {
      expect(Card).toBeTruthy();
    });
  it("created assigns shows, popular", () => {
    expect(dashboardWrapper.vm.shows).not.toBe(undefined);
    expect(dashboardWrapper.vm.popular).not.toBe(undefined);
  });

  it("getting show list works", (done) => {
    expect(dashboardWrapper.vm.shows.length).toBe(0);
    expect(dashboardWrapper.vm.popular.length).toBe(0);
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200, 
          response: homeShows,
        })
        .then(function () {
          expect(dashboardWrapper.vm.shows.length).toBe(3);
          expect(dashboardWrapper.vm.popular.length).toBe(2);
          expect(dashboardWrapper.vm.categories).toStrictEqual(showGenres);
          expect(dashboardWrapper.vm.categoriesShows).toStrictEqual(homeShowsByGenres);
          done();
        });
    });
  });
  it('return mostly rated shows based on ratings', () => {
    let data = homeShows
    let sorted = dashboardWrapper.vm.getPopularshow(data)
    expect(sorted).toStrictEqual(sortedHomeShows)

    let dataInRandom = homeShowsInRandom
    sorted = dashboardWrapper.vm.getPopularshow(dataInRandom)
    expect(sorted).toStrictEqual(sortedHomeShows)
  })
});
