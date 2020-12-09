import './style.scss';
import Vue from 'vue'
import App from '../project.blocks/app/App.vue'

const app = new Vue({
  el: '.app',
  render: h => h(App)
})
