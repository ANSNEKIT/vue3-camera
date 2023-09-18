import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import '@styles/main.scss'

const app = createApp(App)
app.use(PrimeVue)

app.mount('#app')
