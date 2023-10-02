<template>
  <div class="main">Main Page</div>
</template>

<style lang="scss">
@import "@/public/reset.scss";

:root {
  --background-color: #fff;
  --text-color: #000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #000;
    --text-color: #fff;
  }
}

.main {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
