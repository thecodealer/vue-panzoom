const PanZoomComponent = {
    name: 'panZoom',
    props: {
        options: Object,
        selector: String,
    },
    data() {
        return {
            $panZoomInstance: null,
            instanceId: null,
            defaultOptions: {
                bounds: true,
                minZoom: 0.5,
                maxZoom: 2,
            }
        }
    },
    created() {
        this.instanceId = this.generateRandomId(20);
    },
    mounted() {
        if (this.scene) {
            var _options = Object.assign({}, this.defaultOptions, this.options);
            this.$panZoomInstance = this.$panZoom(this.scene, _options);
            this.$panZoomInstanceId = this.instanceId;
            this.attachEvents();
        }
    },
    computed: {
        scene() {
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
        generateRandomId(l) {
            l = l || 16;
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var charsLength = chars.length;
            var a = [];

            for(var i=0; i<l; i++) {
                a.push( chars.charAt(Math.floor(Math.random() * charsLength)) );
            }
            return a.join('');
        },
        attachEvents() {
            this.$emit('init', this.$panZoomInstance, this.$panZoomInstanceId);

            this.$panZoomInstance.on('panstart', (e) => {
                this.$emit('panstart', e);
            });

            this.$panZoomInstance.on('panend', (e) => {
                this.$emit('panend', e);
            });

            this.$panZoomInstance.on('pan', (e) => {
                this.$emit('pan', e);
            });

            this.$panZoomInstance.on('zoom', (e) => {
                this.$emit('zoom', e);
            });

            this.$panZoomInstance.on('transform', (e) => {
                this.$emit('transform', e);
            });

            this.$panZoomInstance.on('zoomend', (e) => {
                this.$emit('zoomend', e);
            });
        },
        isPaused() {
            return this.$panZoomInstance.isPaused();
        },
        pause() {
            this.$panZoomInstance.pause();
        },
        resume() {
            this.$panZoomInstance.resume();
        }
    }
}

export default PanZoomComponent;
