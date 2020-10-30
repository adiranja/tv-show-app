import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Header from '@/components/Header.vue';
import { routes } from '@/router/index';

describe('In Header Component', () => {
  let appHeaderWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    appHeaderWrapper = shallowMount(Header, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    expect(appHeaderWrapper.findAll('b-navbar-stub').length).toBe(1)
  });

  it('it should have a <b-navbar-brand> element', () => {
    expect(appHeaderWrapper.findAll('b-navbar-brand-stub').length).toBe(1);
  });

  it('it should have a <b-navbar-nav> element', () => {
    expect(appHeaderWrapper.findAll('b-navbar-nav-stub').length).toBe(2);
  });

  it('it should have a <b-nav-form> element', () => {
    expect(appHeaderWrapper.findAll('b-nav-form-stub').length).toBe(1);
  });

  it("has a search input", () => {
   let searchInput = appHeaderWrapper.find('.input');
   expect(searchInput.exists()).toBe(true);
  })

  it("has a search button", () => { 
    const button = appHeaderWrapper.find('.btn-search')
    expect(button.exists()).toBeTruthy();
  })    
});
