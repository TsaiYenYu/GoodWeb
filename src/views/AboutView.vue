<template>
  <Sidebar/>
  <div class="about">
    <HelloWorld/>
  </div>
</template>

<script setup>

import Sidebar from '../components/sidebar/Sidebar.vue';
import { collapsed, toggleSidebar, sidebarWidth } from '../components/sidebar/state'
import TheWelcome from "../components/TheWelcome.vue";
import HelloWorld from "../components/HelloWorld.vue";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

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

</script>


<style>
@media (min-width: 1024px) {
  .about {
    /*min-height: 100vh;*/
    position: relative;
    left: 8px;
    display: flex;
    /*align-items: center;*/
  }
}

.siderfix {
  position: relative;
  left: 180px;
}

</style>
