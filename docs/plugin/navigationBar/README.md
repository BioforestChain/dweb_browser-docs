# NavigationBar

控制系统底部导航栏。

## example

```vue

<script setup lang="ts">
import { onMounted } from 'vue';
import { DWebView } from '@bfsx/plugin';

let nav:DWebView;
onMounted(async () => {
  nav = document.querySelector<DWebView>('dweb-view')!
})

function hideNavigation() {
    nav.setNavigationBarVisible(false)
}
async function getNavigationVisible() {
  console.log("getNavigationBarVisible=>",await nav.getNavigationBarVisible())
  console.log("getNavigationBarOverlay=>",await nav.getNavigationBarOverlay())
}
function setNavigationBarColor() {
  nav.setNavigationBarColor("#ffb94f",true,false)
}
function setNavigationBarOverlay() {
  nav.setNavigationBarOverlay(true)
}
</script>
<template>
  <button @click="hideNavigation">点我隐藏系统navigation</button>
  <button  @click="getNavigationVisible">获取navigation颜色</button>
   <button  @click="setNavigationBarOverlay">设置navigation透明</button>
  <button  @click="setNavigationBarColor">设置系统navigation颜色</button>
<dweb-view></dweb-view>
</template>

```
## Methods​ 
### setNavigationBarVisible

设置系统导航栏的可见性。默认值false为隐藏导航栏。

| 参数类型 | 默认值 | 解释                        |
|----------|--------|---------------------------|
| boolean  | false  | 传递true为显示，false为隐藏。 |

### getNavigationBarVisible

获取导航栏是显示还是隐藏，返回false为隐藏，true为显示。

### setNavigationBarColor

设置系统导航栏的颜色。


| 参数类型 | 默认值  | 解释                                                                   |
|----------|---------|----------------------------------------------------------------------|
| string   | null    | 设置颜色。 （#ffb94f"rgba(100,100,100,0.5))                              |
| boolean  | boolean | 是否更期望使用深色效果                                                 |
| boolean  | boolean | 在系统背景高度透明的时候导航栏是否应该增强对比度，android仅支持：API 29+ |
 

 

 
