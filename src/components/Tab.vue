<template>
  <div class="tab-content"
       v-show="title == selectedTitle">
    <slot/>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: "Tab",
  props: ['title'],
  setup() {
    const selectedTitle = inject('selectedTitle')
    return {
      selectedTitle,
    }
  },
}
</script>



<style scoped>

.tab-content {
  min-height: 800px;
  width: 320px;
  padding: 0px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 5px rgb(0, 0, 0, 0.05);
}


/* iphoneX */
@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  .tab-content {
    width: 100%;
  }
}

/* iphone6 7 8 plus */
@media screen and (min-width: 414px) {
  .tab-content {
    width: 100%;
  }
}

/* ipad */
@media screen and (min-width: 768px) {
  .tab-content {
    width: 100%;
  }
}

/* ipad pro */
@media screen and (min-width: 1024px) {
  .tab-content {
    width: 100%;
  }
}
</style>