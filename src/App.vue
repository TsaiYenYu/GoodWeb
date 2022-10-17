<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TabsWrapper from "./components/TabsWrapper.vue";
import Tab from "./components/Tab.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SimpleSwiper from '@/components/swiper/SimpleSwiper.vue';

onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
    console.log( 'window.screen.width');
    console.log( window.screen);
    console.log( window.screen.availWidth);
    console.log( window.innerWidth);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", function () {
    
  });
});

const getAssetsFile = (url: string) => {
  return new URL(`./assets/logo/${url}`, import.meta.url).href;
}
const resizeFont = ref("");
let windowWidth = ref(window.innerWidth);

const resize = computed(() => {
  return windowWidth;
});

</script>

<template>
  <main class="wrapper" 
        :style="{width: windowWidth}"
  >
    <div>
      <SimpleSwiper :imgPathList="['C.png', 'xd.png','C.png', 'xd.png','C.png', 'xd.png']" />
    </div>
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
  </main>
</template>

<style scoped>
.swiper-slide {
  text-align: center;
  background: #fff;
  justify-content: center;
  align-items: center;
}

.wrapper {
  /* padding: 8px; */
  background-color: rgb(141, 235, 251);
  min-width: 320px;
  width: auto;
}

/* @media screen and (min-width: 768px) {
    .wrapper {
        background-color: #ddd;
    }
} */


/* iphoneX */
@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  .wrapper {
    background-color: #0FF000;
  }
}

/* iphone6 7 8 plus */
@media screen and (min-width: 414px) {
  .wrapper {
    background-color: blue;
  }
}

/* ipad */
@media screen and (min-width: 768px) {
  .wrapper {
    background-color: green;
    width: 768px;
  }
}

/* ipad pro */
@media screen and (min-width: 1024px) {
  .wrapper {
    background-color: #FF00FF;
    min-width: 1024px;
  }
}

/* pc */
@media screen and (min-width: 1100px) {
  .wrapper {
    background-color: rgb(74, 3, 121);
    min-width: 1100px;
    width:1100px;
  }
}

@media screen and (min-width: 1200px) {
  .wrapper {
    background-color: rgb(74, 3, 121);
    min-width: 1200px;
    width:1200px;
  }
}

@media screen and (min-width: 1300px) {
  .wrapper {
    background-color: rgb(74, 3, 121);
    min-width: 1300px;
    width:1300px;
  }
}

@media screen and (min-width: 1400px) {
  .wrapper {
    background-color: rgb(74, 3, 121);
    min-width: 1400px;
    width:1400px;
  }
}

@media screen and (min-width: 1500px) {
  .wrapper {
    background-color: rgb(74, 3, 121);
    min-width: 1500px;
    width:1500px;
  }
}
</style>
