<template>
  <div id="cross">
    <div id="bar1" class="bar"></div>
    <div id="bar2" class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
#cross {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;

  .bar {
    width: 0.4rem;
    height: 135%;
    background-color: var(--text-color);
    border-radius: 5px;
  }

  #bar1 {
    transform: rotate(45deg);
    position: relative;
    right: -0.8rem;
    top: -0.3rem;
  }

  #bar2 {
    transform: rotate(-45deg);
    position: relative;
    left: -0.8rem;
    top: -0.3rem;
  }
}
</style>
