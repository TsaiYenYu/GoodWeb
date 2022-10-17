<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>
        <div>Vue</div>
        <div>Sidebar</div>
      </span>
    </h1>
<!--    <div>V</div>-->
    <SidebarLink class="sidebar-SidebarLink" to="/Home"      icon="fas fa-home">Home</SidebarLink>
    <SidebarLink class="sidebar-SidebarLink" to="/Contact"   icon="fas fa-columns">Contact</SidebarLink>
    <SidebarLink class="sidebar-SidebarLink" to="/About"     icon="fas fa-chart-bar">About</SidebarLink>
    <SidebarLink class="sidebar-SidebarLink" to="/friends"   icon="fas fa-users">Friends</SidebarLink>
    <SidebarLink class="sidebar-SidebarLink" to="/image"     icon="fas fa-image">Images</SidebarLink>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  min-height: 600px;
  /*height: 90%;*/
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  /*position: fixed;*/

  z-index: 1;
  top: 2px;
  left: 2px;
  bottom: 0;
  padding: 0.4em;

  transition: 0.3s ease;
  border-radius: 5px;
  /* display: flex; */
  flex-direction: column;
}

.sidebar h1 {
  height: 5em;
  left: 10px;
}

.sidebar-SidebarLink {
  /*left: 12px;*/
  height: 3em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  .sidebar {
    width: 50px;
  }
}
</style>
