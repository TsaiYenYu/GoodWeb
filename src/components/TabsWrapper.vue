<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li v-for="title in tabTitles"
          :key="title"
          @click="selectTitle = title"
          :class="{ selected: title == selectTitle }"
      >
        {{ title }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue';
export default {
  name: "TabsWrapper",
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map( (tab) =>
        tab.props.title
        )
    );
    const selectTitle = ref(tabTitles.value[0]);
    provide('selectedTitle', selectTitle);
    return {
      selectTitle,
      tabTitles
    }
  }
}
</script>

<style scoped>

.tabs {
  max-width: 100%;
  min-width: 400px;
  padding-top: 20px;
  margin: 0 auto;
}

.tabs_header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs_header li {
  width: 25%;
  min-height: 40px;
  max-height: 60px;
  text-align: center;
  padding: 10px 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: wheat;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-in;
}

.tabs_header li.selected {
  background-color: cornflowerblue;
  color: white;
}

</style>