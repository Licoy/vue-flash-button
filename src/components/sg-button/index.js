import SgButton from './sg-button.vue';

const component = { SgButton }

const install = function(Vue, opts = {}) {

    Object.keys(component).forEach(key => {
        Vue.component(key, component[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
}

export default {install};