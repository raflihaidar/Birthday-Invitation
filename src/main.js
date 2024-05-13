import './assets/main.css'
import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import App from './App.vue'

const app = createApp(App)
app.use(Particles, {
  init: async (engine) => await loadFull(engine)
})
app.AOS = new AOS.init()
app.use(AOS)
app.mount('#app')
