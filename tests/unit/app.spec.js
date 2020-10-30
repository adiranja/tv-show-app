import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import app from '@/App.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { routes } from "@/router/index.js";

describe('In App Component', () => {
  let appWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    appWrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes('id')).toBe('app');
  });

  describe('it should load Header component', () => {
    it('it should load the header', () => {
      expect(Header).toBeTruthy();
    });

    it('it should have a <header-stub></header-stub>', () => {
      expect(appWrapper.html()).toContain('<header-stub></header-stub>');
    });
  });

  describe('it should load Footer component', () => {
    it('it should load the footer', () => {
      expect(Footer).toBeTruthy();
    });

    it('it should have a <footer-stub></footer-stub>', () => {
      expect(appWrapper.html()).toContain('<footer-stub></footer-stub>');
    });
  });
});
