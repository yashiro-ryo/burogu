<template>
  <Cross v-if="isDropdownOpen" @click="onClickToggle" />
  <Bars v-else @click="onClickToggle" />
</template>

<script setup lang="ts">
import Bars from "../Icon/Bars.vue";
import Cross from "../Icon/Cross.vue";
const props = defineProps<{
  isDropdownOpen: boolean;
}>();

const emits = defineEmits<{
  (e: "onupdate-dropdown-toggle", isOpen: boolean): void;
}>();

const onClickToggle = () => {
  emits("onupdate-dropdown-toggle", !props.isDropdownOpen);
};
</script>
