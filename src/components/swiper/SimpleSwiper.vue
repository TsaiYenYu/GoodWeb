<script setup lang="ts">
import { ref, onMounted, type PropType, computed } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import  { Swiper, SwiperSlide } from 'swiper/vue';
  // core version + navigation, pagination modules:
import { Autoplay, Pagination, EffectFade } from 'swiper';
  // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const props = defineProps({
    imgPathList: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    imgTitleList: {
        type:  Array as PropType<string[]>,
        default: () => [],
    },
    imgWidth: {
      type: Number,
      default: 200,
    },
    imgHeight: {
      type: Number,
      default: 200,
    }
})


onMounted(() => {

})

const modules = [Autoplay, EffectFade];

const imgPathList = computed<Array<string>>(() => {
    return props.imgPathList
})

const onSwiper = (swiper: any) => {
    console.log('slide onSwiper');
};

const onSlideChange = () => {
  console.log('slide change');
}

const imgWidth = () => {
  return props.imgWidth;
}

const imgHeight = () => {
  return props.imgHeight;
}

const getAssetsFile = (url: string) => {
    return new URL(`../../assets/logo/${url}`, import.meta.url).href;
}
</script>


<template>
<div class="swiper-bg">
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :speed="2400"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
  >
    <swiper-slide
        v-for="(item,index) in imgPathList" :key="index"
    > 
       <img
       class="swiper-img" 
       :src="getAssetsFile(item)"
       :width="imgWidth()" 
       :height="imgHeight()"
       alt="index" 
        />
    </swiper-slide
    >
    </swiper>
</div>
</template>

<style scoped>

.swiper-bg {
    background-color: antiquewhite;
}

.swiper-slide { 
    text-align: center;
    /* display: flex; */
    justify-content: center;
    align-items: center;
}

.swiper-img {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
