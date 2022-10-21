import { createApp } from "vue";
import { createPinia } from "pinia";
import "@fortawesome/fontawesome-free/js/all"
import App from "./App.vue";
import router from "./router";
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css"
import Vue3Lottie from "vue3-lottie"
import "vue3-lottie/dist/style.css"
import {
    // create naive ui
    create,
    // component
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NSpace,
    NGrid,
    
} from "naive-ui";

import "./assets/main.css";
const naive = create({
    components: [
      NButton,
      NLayout,
      NLayoutHeader,
      NLayoutContent,
      NLayoutFooter,
      NLayoutSider,
      NSpace,
      NGrid,
    ]  
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive)
app..use(Vue3Lottie)
app.mount("#app");

