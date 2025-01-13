<script lang="ts">
export function getBeianCode(hostname = location.hostname) {
  if (
    hostname === "dweb-browser.com" ||
    hostname.endsWith("dweb-browser.com")
  ) {
    return "闽ICP备2022016659号-2";
  }

  if (hostname === "dweb-browser.bagen.info" || hostname === "localhost") {
    return "闽ICP备2022016659号";
  }
  return "";
}
</script>
<script setup lang="ts">
const hook = () => {
  const beian = document.getElementById("beian");
  if (beian) {
    beian.innerHTML = getBeianCode();
    return true;
  }
  return false;
};
document.addEventListener("DOMContentLoaded", hook);
if (!hook()) {
  requestAnimationFrame(hook);
}
</script>
<template></template>
<style lang="css"></style>
