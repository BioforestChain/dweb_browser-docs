<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { VPButton } from "vitepress/theme";
import { useData } from "vitepress";
import { currentActions2 } from "./current-download";

interface HeroAction {
  theme?: "brand" | "alt";
  text: string;
  link: string;
  target?: string;
  rel?: string;
}

const { lang } = useData();
const actionsRef = ref<HeroAction[]>([]);
watchEffect(async() => {
  console.log("qaq lang", lang.value);
  const actions :HeroAction[] = []
  switch (lang.value) {
    case "en-US":
      actions.push({ theme: "brand", text: "Intro", link: "/en/intro" });
      break;
    default:
      actions.push({ theme: "brand", text: "介绍", link: "/intro" });
      break;
  }

  actions.push(await currentActions2(lang.value));
  actionsRef.value = actions
});

</script>

<template>
  <div v-if="actionsRef" class="actions">
    <div v-for="action in actionsRef" :key="action.link" class="action">
      <VPButton
        tag="a"
        size="medium"
        :theme="action.theme"
        :text="action.text"
        :href="action.link"
        :target="action.target"
        :rel="action.rel"
      />
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}

.action {
  flex-shrink: 0;
  padding: 6px;
}
</style>
