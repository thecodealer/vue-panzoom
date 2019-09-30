# vue-panzoom

This is a [Vue.js](https://vuejs.org/) port of [panzoom](https://github.com/anvaka/panzoom), an extensible, mobile friendly pan and zoom framework (supports DOM and SVG).

# Demo

 * [Regular DOM object](https://anvaka.github.io/panzoom/demo/dom.html)
 * [Standalone page](https://anvaka.github.io/panzoom/demo/index.html) - this repository
 * [YASIV](http://www.yasiv.com/#/Search?q=algorithms&category=Books&lang=US) - my hobby project
 * [SVG Tiger](https://jsfiddle.net/uwxcmbyg/609/) - js fiddle

# Installation

Using npm

```
npm install vue-panzoom --save
```

Using yarn

```
yarn add vue-panzoom
```

# Usage

*main.js*
``` js
// import Vuejs
import Vue from 'vue'
import App from './App.vue'

// import vue-panzoom
import panZoom from 'vue-panzoom'

// install plugin
Vue.use(panZoom);

new Vue({
  render: h => h(App),
}).$mount('#app')
```

*App.vue*
``` html
<template>
    <div id="app">
        <!-- apply to an image -->
        <panZoom>
            <img src="https://picsum.photos/300">
        </panZoom>

        <!-- apply to regular dom elements -->
        <panZoom>
            <p>You can zoom me</p>
        </panZoom>

        <!-- apply to svg -->
        <panZoom selector="#g1">
            <svg height="210" width="400">
                <g id="g1">
                    <path d="M150 0 L75 200 L225 200 Z" />
                </g>
            </svg>
        </panZoom>
    </div>
</template>
```

## Changing the component's name

If you wish to change the name of the vue component from the default panZoom, you pass an option to the plugin like so:
``` js
Vue.use(panZoom, {compoentName: 'yourPanZoom'});
```

and then use in your vue template like so:
``` html
<yourPanZoom></yourPanZoom>
```

# Attributes
### selector
Use this to specify an element within the scope of vue-panzoom component instance, to apply panZoom to. Default is the first root element of the vue-panzoom component. It accepts standard css selector specification.
``` html
<panZoom selector=".zoomable">
  <div class="not-zoomable">I cannot be zoomed and panned</div>
  <div class="zoomable">I can be zoomed and panned</div>
</panZoom>
```

# Options
The *options* prop is used to define [panzoom](https://github.com/anvaka/panzoom) options. All panzoom options are supported
``` html
<panZoom :options="{minZoom: 0.5, maxZoom: 5}"></panZoom>
```

# Events
You can listen to specific events in the lifecycle of a vue-panzoom instance. For example, in the code below the function *onPanStart* will be called when pan begins
``` html
<panZoom @panstart="onPanStart"></panZoom>
```

Another way to listen to events within the *init* event's callback, when you know for sure everything is ready and the panzoom instance is available. For example
``` html
<panZoom @init="onInit"></panZoom>
```
``` js
onInit: function(panzoomInstance, id) {
  panzoomInstance.on('panstart', function(e){
    console.log(e);
  });
}
```

## init event
This event is fired when the vue-panzoom instance has been initialized successfully. For example:
``` html
<panZoom @init="onInit"></panZoom>
```

## [panzoom](https://github.com/anvaka/panzoom) events
All events supported by [panzoom](https://github.com/anvaka/panzoom) are also supported here.
