<template>
  <sidebar-component />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import LeftSideBar from "@/components/Sidebar/LeftSideBar.vue";
// import SidebarComponent from "@/components/Sidebar/SidebarComponent.vue";
import { sidebarWitdth } from "@/components/Sidebar/state";

export default {
  components: { LeftSideBar },
  setup() {
    return { sidebarWitdth };
  },
};
</script>

<style></style>
