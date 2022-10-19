<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { RouterLink, RouterView } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import TabsWrapper from "./components/TabsWrapper.vue";
import Tab from "./components/Tab.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SimpleSwiper from '@/components/swiper/SimpleSwiper.vue';
import { useCounterStore } from "./stores/counter.js";

const store = useCounterStore();

onMounted(() => {

});

onUnmounted(() => {

});

const getAssetsFile = (url: string) => {
  return new URL(`./assets/logo/${url}`, import.meta.url).href;
}

</script>

<template>
  <main class="wrapper" 
  >
     <div>
      <button @click="store.fetchApi">CliCK   sss</button>
    </div>
    <div>
      <SimpleSwiper :imgPathList="['C.png', 'xd.png','C.png', 'xd.png','C.png', 'xd.png']" />
    </div>
    <div class="tabLine">
      <TabsWrapper>
      <Tab title="Tab 1">
        <AboutView />
      </Tab>
      <Tab title="Tab 2">
        <HelloWorld msg="Hi" />
      </Tab>
      <Tab title="Tab 3">
        <HomeView />
      </Tab>
      <Tab title="Tab 4">
      </Tab>
    </TabsWrapper>
    </div>
  </main>
</template>

<style scoped>

.tabLine {
  /* background-color: rgb(171, 236, 21) */
}


.wrapper {
  /* padding: 8px; */
  background-color: white;
  min-width: 320px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

/* iphoneX */
@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  .wrapper {
    background-color: royalblue;
  }
}

/* iphone6 7 8 plus */
@media screen and (min-width: 414px) {
  .wrapper {
    /* background-color: blue; */
    min-width: 414px;
  }
}

/* ipad */
@media screen and (min-width: 768px) {
  .wrapper {
    /* background-color: green; */
    min-width: 768px;
    /* width: 768px; */
  }
}

/* ipad pro */
@media screen and (min-width: 1024px) {
  .wrapper {
    /* background-color: #FF00FF; */
    min-width: 970px;
    /* width: windowWidth; */
  }
}

/* pc */
@media screen and (min-width: 1100px) {
  .wrapper {
    /* background-color: rgb(74, 3, 121); */
    min-width: 200%;
    /* width: windowWidth; */
  }
}

@media screen and (min-width: 1200px) {
  .wrapper {
    /* background-color: rgb(74, 3, 121); */
    /* min-width: 1150px; */
        /* min-width: windowWidth; */
    /* width:1200px; */
  }
}

@media screen and (min-width: 1300px) {
  .wrapper {
    /* background-color: rgb(74, 3, 121); */
    /* min-width: windowWidth; */
    /* min-width: 1300px; */
    /* width:1300px; */
  }
}

@media screen and (min-width: 1400px) {
  .wrapper {
    /* background-color: rgb(74, 3, 121); */
    /* min-width: windowWidth; */
    /* min-width: 1400px; */
    /* width:1400px; */
  }
}

@media screen and (min-width: 1500px) {
  .wrapper {
    /* background-color: rgb(74, 3, 121); */
    /* min-width: 1500px; */
    /* width:1500px; */
  }
}
</style>
