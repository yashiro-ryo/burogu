<template>
  <div class="bars">
    <div class="bar"></div>
    <div class="space"></div>
    <div class="bar"></div>
    <div class="space"></div>
    <div class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.bars {
  width: 2rem;
  height: 2rem;

  .bar {
    width: 100%;
    height: 20%;
    background-color: var(--text-color);
    border-radius: 10px;
  }

  .space {
    width: 100%;
    height: 20%;
  }
}
</style>
