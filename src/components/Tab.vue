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
    const  selectedTitle = inject('selectedTitle')
    return {
      selectedTitle,
    }
  },
}
</script>



<style scoped>

.tab-content {
  /*max-height: 1200px;*/
  /*height: 90%;*/
  min-height: 800px;
  max-height: fit-content;
  min-width: 800px;
  max-width: fit-content;
  padding: 0px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 5px rgb(0, 0, 0, 0.05);
}

</style>