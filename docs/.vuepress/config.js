module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePanzoom',
      description: 'VuePanzoom for Vue.js'
    }
  },
  themeConfig: {
    repo: 'Isa Frimpong &lt;mistabiggx@gmail.com&gt;/vue-panzoom',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/Isa Frimpong &lt;mistabiggx@gmail.com&gt;/vue-panzoom/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
