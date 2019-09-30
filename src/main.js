import panZoom from 'panzoom';
import PanZoomComponent from './components/pan-zoom/component.vue';

const PanZoomPlugin = {
    install(Vue, options) {
        var _name = options && options.componentName ? options.componentName : PanZoomComponent.name;
        Vue.component(_name, PanZoomComponent);
        Vue.prototype.$panZoom = panZoom;
    }
};

export default PanZoomPlugin;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PanZoomPlugin);
}