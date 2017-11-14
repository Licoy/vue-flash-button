import FlashButton from './flash-button.vue';

const component = { FlashButton }

const install = function(Vue, opts = {}) {

    Object.keys(component).forEach(key => {
        console.log(key)
        Vue.component(key, component[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
}

export default install;