<script setup lang="ts">
import { onMounted, ref } from "vue";

const wallpaper = ref<HTMLElement>();
onMounted(async () => {
  const { DwebWallpaperElement } = await import("./wallpaper-canvas.ts");
  Object.assign(window, { wallpaper });
  window.addEventListener("click", () => {
    (wallpaper.value as InstanceType<typeof DwebWallpaperElement>).replay({ duration: 1000, startPlaybackRate: 2 });
  });
});
</script>

<template>
  <dweb-wallpaper ref="wallpaper">
    <pre>
    0: overlay #9c27b0 #e91e63
    1: overlay #3973e1 #c03074
    2: overlay #6b4dc8 #d4276c
    3: overlay #0899f9 #ab397d
    4: overlay #add07a #6349a2
    5: overlay #5ab4ba #874190
    6: overlay #ffeb3b #3f51b5
    7: overlay #55cca1 #178cdf
    8: overlay #aadb6e #2b6eca
    9: overlay #00bcd4 #03a9f4
    10: overlay #aadb6e #179cf3
    11: overlay #55cca1 #0da3f4
    12: overlay #ffeb3b #2196f3
    13: overlay #f6a940 #38b9e4
    14: overlay #faca3d #2da7eb
    15: overlay #f18842 #44cadc
    16: overlay #fa672d #c1a949
    17: overlay #f67837 #82b993
    18: overlay #ff5722 #ff9800
    19: overlay #ff7811 #ffc21e
    20: overlay #ff9800 #ffeb3b
    21: overlay #b54384 #ef5159
    22: overlay #ce6058 #f4854f
    23: overlay #e67c2c #fab845
  </pre
    >
  </dweb-wallpaper>
</template>

<style>
dweb-wallpaper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  top: 0;
  opacity: 0.1;
}
dweb-wallpaper pre {
  display: none;
}
body footer {
  background-color: transparent !important;
  border-top: 0 !important;
}
</style>
