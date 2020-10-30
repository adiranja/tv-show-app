import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import ShowDetail from '@/views/ShowDetail.vue';
import Card from '@/views/Card.vue';
import { routes } from '@/router/index';
import { showDetails } from '../testing-data.js'
import moxios from "moxios";

describe('In ShowDetail Component', () => {
    let showDetailWrapper;
    const router = new VueRouter({ routes });

    beforeEach(() => {
        moxios.install();
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        localVue.use(BootstrapVue);
        localVue.use(IconsPlugin);
        showDetailWrapper = shallowMount(ShowDetail, {
            localVue,
            router,
        });
    });

    afterEach(() => {
        moxios.uninstall();
        showDetailWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(showDetailWrapper.isVueInstance).toBeTruthy();
    });

    it('it should have a <b-container> element', () => {
        expect(showDetailWrapper.findAll('b-container-stub').length).toBe(1);
    });

    it('it should load the card', () => {
        expect(Card).toBeTruthy();
    });

    it("created assigns shows", () => {
        expect(showDetailWrapper.vm.show).not.toBe(undefined);
    });

    it("getting show list works", (done) => {
        moxios.wait(function () {
            let request = moxios.requests.mostRecent();
            request
                .respondWith({
                    status: 200,
                    response: showDetails,
                })
                .then(function () {
                    expect(showDetailWrapper.vm.show.id).toBe(240);
                    done();
                });
        });
    });
});
