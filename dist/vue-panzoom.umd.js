(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('panzoom'), require('vue')) :
    typeof define === 'function' && define.amd ? define(['panzoom', 'vue'], factory) :
    (global = global || self, global.VuePanZoom = factory(global.panZoom, global.vue));
}(this, (function (panZoom, vue) { 'use strict';

    panZoom = panZoom && Object.prototype.hasOwnProperty.call(panZoom, 'default') ? panZoom['default'] : panZoom;

    var PanZoomComponent = {
        name: 'panZoom',
        props: {
            options: Object,
            selector: String,
        },
        data: function data() {
            return {
                $panZoomInstance: null,
                instanceId: null,
                defaultOptions: {
                    autocenter: true,
                    bounds: true,
                    transformOrigin: {
                        x: 0.5,
                        y: 0.5,
                    }
                }
            }
        },
        created: function created() {
            this.instanceId = this.generateRandomId(20);
        },
        mounted: function mounted() {
            if (this.scene) {
                var _options = Object.assign({}, this.defaultOptions, this.options);
                this.$panZoomInstance = this.$panZoom(this.scene, _options);
                this.$panZoomInstanceId = this.instanceId;
                this.attachEvents();
            }
        },
        computed: {
            scene: function scene() {
                var el;
                var _wrapper = this.$el.querySelector('.vue-pan-zoom-scene');
                if (this.selector) {
                    el = _wrapper.querySelector(this.selector);
                }
                else {
                    el = _wrapper.querySelector('svg, object, embed');
                    if (!el) {
                        el = _wrapper.firstChild;
                    }
                }
                return el;
            },
        },
        methods: {
            generateRandomId: function generateRandomId(l) {
                l = l || 16;
                var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charsLength = chars.length;
                var a = [];

                for(var i=0; i<l; i++) {
                    a.push( chars.charAt(Math.floor(Math.random() * charsLength)) );
                }
                return a.join('');
            },
            attachEvents: function attachEvents() {
                var this$1 = this;

                this.$emit('init', this.$panZoomInstance, this.$panZoomInstanceId);

                this.$panZoomInstance.on('panstart', function (e) {
                    this$1.$emit('panstart', e);
                });

                this.$panZoomInstance.on('panend', function (e) {
                    this$1.$emit('panend', e);
                });

                this.$panZoomInstance.on('pan', function (e) {
                    this$1.$emit('pan', e);
                });

                this.$panZoomInstance.on('zoom', function (e) {
                    this$1.$emit('zoom', e);
                });

                this.$panZoomInstance.on('transform', function (e) {
                    this$1.$emit('transform', e);
                });

                this.$panZoomInstance.on('zoomend', function (e) {
                    this$1.$emit('zoomend', e);
                });
            },
            isPaused: function isPaused() {
                return this.$panZoomInstance.isPaused();
            },
            pause: function pause() {
                this.$panZoomInstance.pause();
            },
            resume: function resume() {
                this.$panZoomInstance.resume();
            }
        }
    };

    var _hoisted_1 = { class: "vue-pan-zoom-scene" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", {
        class: ["vue-pan-zoom-item", ['vue-pan-zoom-item-' + this.instanceId]]
      }, [
        vue.createVNode("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 2 /* CLASS */))
    }

    PanZoomComponent.render = render;
    PanZoomComponent.__file = "src/components/pan-zoom/component.vue";

    var PanZoomPlugin = {
        install: function install(Vue, options) {
            var _name = options && options.componentName ? options.componentName : PanZoomComponent.name;
            Vue.component(_name, PanZoomComponent);
            Vue.prototype.$panZoom = panZoom;
        }
    };

    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(PanZoomPlugin);
    }

    return PanZoomPlugin;

})));
