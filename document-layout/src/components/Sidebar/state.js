import { ref, computed } from "vue";

export const collasped = ref(false);
export const toggleSidebar = () => (collasped.value = !collasped.value);

export const sidebar_WITDTH = 180;
export const sidebar_WITDTH_COLLASPE = 38;
export const sidebarWitdth = computed(
  () => `${collasped.value ? sidebar_WITDTH_COLLASPE : sidebar_WITDTH}px`
);
