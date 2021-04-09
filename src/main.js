import panZoom from 'panzoom';
import PanZoomComponent from './components/pan-zoom/component.vue';

const PanZoomPlugin = {
    install(app, options) {
        var _name = options && options.componentName ? options.componentName : PanZoomComponent.name;
        app.component(_name, PanZoomComponent);
        if (app.hasOwnProperty('config') && app.config.hasOwnProperty('globalProperties')) {
            app.config.globalProperties.$panZoom = panZoom;
        }
        else {
            app.prototype.$panZoom = panZoom;
        }
    }
};

export default PanZoomPlugin;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PanZoomPlugin);
}