<script setup lang="ts">
import {ref} from 'vue';
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TabsWrapper from "./components/TabsWrapper.vue";
import Tab from "./components/Tab.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

import  { Swiper, SwiperSlide } from 'swiper/vue';
  // core version + navigation, pagination modules:
import { Autoplay, Pagination } from 'swiper';
  // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.'
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.'
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.'
  }
]

const onSwiper = (swiper: any) => {
  console.log(new URL('./assets/logo.svg', import.meta.url).href);     
};

const onSlideChange = () => {
  console.log('slide change');
}

const imageUrl = () => {
  const pathString: string = new URL('/logo.svg', import.meta.url).href;
  console.log(pathString);
  return pathString;
}
const imageUrl2 = 'src/assets/logo.svg';

const getAssetsFile = (url: string) => {
  const ss =  new URL(`./assets/${url}`, import.meta.url).href;
  console.log('getAssetsFile');
  console.log(ss);
  return new URL(`./assets/${url}`, import.meta.url).href;
}
const profilePic = ref('/src/assets/logo.svg');


</script>

<template>
<div class="home-card">
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @click=""
    @swiper="onSwiper"
    @slideChange=""
  >
    <swiper-slide> 
       <img :src="getAssetsFile('/logo.svg')"
            height="200"
            width="200" 
            alt="" />
    </swiper-slide>
    <swiper-slide> 
       <img :src="'src/assets/logo.svg'" 
            alt="" 
            height="200" 
            width="200" />
    </swiper-slide>
  </swiper>
</div>

  <div>
    <vueper-slides>
      <template #arrow-left>
        <i class="icon icon-arrow-left" />
      </template>
      <template #arrow-right>
        <i class="icon icon-arrow-right" />
      </template>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"
        :style="'background-color: ' + 'red'">
        >
      </vueper-slide>
    </vueper-slides>
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
      <!-- <Swiper
      :modules="modules"
      :space-between="20"
      :loop="true"
      :pagination="{clickable:true}"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      >
        <SwiperSlide
        v-for="(slide, i) in slides" :key="i"
        >
        <div>
          {{ slide.title }}
        </div>
        </SwiperSlide>
      </Swiper> -->

    </Tab>
  </TabsWrapper>
</template>

<style scoped>

.home-card {
  width: 100%;
  height: 200px;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
