# Installation

## Direct Download / CDN

https://unpkg.com/vue-panzoom/dist/vue-panzoom 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-panzoom@{{ $version }}/dist/vue-panzoom.js
 
Include vue-panzoom after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-panzoom/dist/vue-panzoom.js"></script>
```

## NPM

```sh
$ npm install vue-panzoom
```

## Yarn

```sh
$ yarn add vue-panzoom
```

When used with a module system, you must explicitly install the `vue-panzoom` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-panzoom from 'vue-panzoom'

Vue.use(vue-panzoom)
```

You don't need to do this when using global script tags.

