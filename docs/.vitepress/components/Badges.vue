<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <p flex="~ gap-2" h-5>
    <a :href="`https://www.npmjs.com/package/${name}`" target="_blank"><img :src="`https://img.shields.io/npm/v/${name}?color=32A9C3&amp;labelColor=1B3C4A&amp;label=npm`" alt="NPM version"></a>
  </p>
</template>