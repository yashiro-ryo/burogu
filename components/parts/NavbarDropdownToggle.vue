<template>
  <button class="dropdown-toggle-button" @click="onClickToggle">
    <Cross v-if="isDropdownOpen" />
    <Bars v-else />
  </button>
  <Transition>
    <div class="dropdown" v-if="isDropdownOpen">
      <ul class="list-group">
        <li class="list-group-item">
          <NuxtLink href="/"><span class="link-item">Home</span></NuxtLink>
        </li>
        <li class="list-group-item">
          <NuxtLink href="/aboutme"
            ><span class="link-item">About Me</span></NuxtLink
          >
        </li>
        <li class="list-group-item">
          <NuxtLink href="/articles"
            ><span class="link-item">Articles</span></NuxtLink
          >
        </li>
        <li class="list-group-item">
          <NuxtLink href="/works"
            ><span class="link-item">Works</span></NuxtLink
          >
        </li>
        <li class="list-group-item">
          <NuxtLink href="/contact"
            ><span class="link-item">Contact</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </Transition>
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

<style lang="scss" scoped>
// dropdown animation
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dropdown-toggle-button {
  width: 3rem;
  height: 3rem;
}

.dropdown {
  width: calc(100% - 20px);
  position: absolute;
  top: 80px;
  left: 0px;
  background-color: var(--navbar-background-color);
  margin: 0 10px 0 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .list-group {
    list-style: none;
    padding: 10px 10px 5px 10px;
    margin-left: 15px;

    .list-group-item {
      margin-bottom: 15px;

      .link-item {
        height: 25px;
        padding: 10px;

        &:hover {
          background-color: var(--hover-background-color);
        }
      }
    }
  }
}
</style>
