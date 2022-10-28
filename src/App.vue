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
import SunCloudJson from "./assets/lottieJson/sunCloud.json";
import ColumnLayout from './components/ColumnLayout.vue';
// import ColumnLayout from "./components/ColumnLayout.vue";

const store = useCounterStore();

onMounted(() => {

});

onUnmounted(() => {

});

const getAssetsFile = (url: string) => {
  return new URL(`./assets/logo/${url}`, import.meta.url).href;
}

const imageList = ['swift_icon.png', 'OC_icon.png', 'php.png', 'logo.svg', 'laravel_icon.png', 'js_icon.png'];

</script>

<template>
  <main class="wrapper">
    <!-- <div>
      <button @click="store.fetchApi">CliCK   sss</button>
    </div>
    <n-button type="primary">
      Primary
    </n-button> -->
    <div>
      <SimpleSwiper :imgPathList="imageList" />
    </div>
    <div class="tabLine">
      <TabsWrapper>
        <Tab title="Tab 1">
          <div>
            <SimpleSwiper :imgPathList="imageList" />
          </div>
          <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
            <n-grid-item v-for="item in imageList" align-items: center>
              <n-image 
                :width="200"
                :height="200" 
                :src="getAssetsFile(item)" />
              <div class="icon_text">
                {{item}}
              </div>
            </n-grid-item>
          </n-grid>

        </Tab>
        <Tab title="Tab 2">
          <Vue3Lottie :animationData="SunCloudJson" :height="200" :width="200" />
        </Tab>
        <Tab title="Tab 3">
          <HomeView />
        </Tab>
        <Tab title="Tab 4">
          <ColumnLayout />
        </Tab>
      </TabsWrapper>
    </div>
  </main>
</template>

<style scoped>
.layout {
  width: 90%;
  justify-content: center;
  align-items: center;
}

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

.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon_text {
  text-align: center;
    /* display: flex; */
    justify-content: center;
    align-items: center;
}
</style>
