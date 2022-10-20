import { createApp } from "vue";
import { createPinia } from "pinia";
import '@fortawesome/fontawesome-free/js/all'
import App from "./App.vue";
import router from "./router";
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import {
    // create naive ui
    create,
    // component
    NButton
  } from 'naive-ui'

import "./assets/main.css";
const naive = create({
    components: [NButton]  
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive)

app.mount("#app");

