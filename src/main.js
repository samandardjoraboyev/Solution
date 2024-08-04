import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n, useI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { defaultLocale, languages } from './localeLanguage'

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages
})


const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

app.use(i18n)


app.use(createPinia())
app.use(router)

app.mount('#app')
