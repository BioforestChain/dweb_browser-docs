<script setup lang="ts">
defineProps<{
  supports: string
}>()
</script>

<template>
  <div class="flex gap-2"> <!-- flex 布局和 gap 间距 -->
    <p class="h-1" v-for="support in supports.split(',')"> <!-- 设置高度为 5 -->
      <img :src="`https://img.shields.io/badge/platform-${support}-green`" alt="Platform Support">
    </p>
  </div>
</template>