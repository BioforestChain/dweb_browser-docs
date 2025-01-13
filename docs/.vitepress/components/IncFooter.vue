<script setup lang="ts">
import { getBeianCode } from "./IncFooterScript.vue";
const year = new Date().getFullYear();
const beian = getBeianCode();
</script>
<template>
  <footer>
    <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery">{{ beian }}</a>
    版权所有 © 2021-{{ year }}
    <a href="https://github.com/BioforestChain/dweb_browser">BioforestChain</a>
  </footer>
</template>
<style lang="scss">
footer {
  margin-top: 8em;
  font-size: 12px;
  text-align: center;
  a {
    color: var(--vp-c-brand-1);
  }
}
</style>
