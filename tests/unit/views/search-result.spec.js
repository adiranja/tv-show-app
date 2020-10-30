import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue';
import VueContentPlaceholders from 'vue-content-placeholders'
import SearchResult from '@/views/SearchResult.vue';
import Card from '@/views/Card.vue';
import { routes } from '@/router/index';
import {searchShows} from '../testing-data.js'
import moxios from "moxios";

describe('In SearchResult Component', () => {
  let searchResultWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    moxios.install();
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    localVue.use(VueContentPlaceholders);
    searchResultWrapper = shallowMount(SearchResult, {
      localVue,
      router
    });
  });

  afterEach(() => {
    moxios.uninstall();
    searchResultWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(searchResultWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a <b-container> element', () => {
    expect(searchResultWrapper.findAll('b-container-stub').length).toBe(1);
  });
 
  it('it should load the card', () => {
      expect(Card).toBeTruthy();
   });  
  
  it("created assigns shows", () => {
    expect(searchResultWrapper.vm.shows).not.toBe(undefined);    
  });

  it("getting show list works", (done) => {
    expect(searchResultWrapper.vm.shows.length).toBe(0);
    
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: searchShows,
        })
        .then(function () {
          expect(searchResultWrapper.vm.shows.length).toBe(2);       
          done();
        });
    });
  });
});
