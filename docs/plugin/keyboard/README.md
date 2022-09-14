# Keyboard

控制虚拟键盘。

## example

<CodeGroup>
  <CodeGroupItem title="vue3" active>

  ```vue
  <dweb-keyboard id="key_board" overlay hidden></dweb-keyboard>
  <ion-button expand="full" fill="outline" @click="onShowKeyboard">点击开启虚拟键盘</ion-button>
  ```

  </CodeGroupItem>
  <CodeGroupItem title="typescript" >

  ```typescript
    <script setup lang="ts">
    import { BfcsKeyboard } from '@bfsx/plugin';

    function onShowKeyboard() {
      //  const keyboard = document.querySelector<BfcsKeyboard>('dweb-keyboard')
      const keyboard = document.getElementById('key_board') as BfcsKeyboard
      keyboard?.showKeyboard()
    }
    </script>
  ```

  </CodeGroupItem>
</CodeGroup>

## dweb-keyboard

包含属性： `overlay`, `hidden`.

### `overlay`

如果指定此属性，则虚拟键盘会覆盖内容，不会把内容向上顶。

### `hidden`

布尔值，有写就是true，没写就是隐藏。

## Methods​

| API                   | return:Promise                                              | 解释                           |
|-----------------------|-------------------------------------------------------------|------------------------------|
| showKeyboard          | null                                                        | 显示键盘                       |
| hideKeyboard          | null                                                        | 隐藏键盘                       |
| getKeyboardSafeArea   | {"bottom":number,"left":number,"right":number,"top":number} | 键盘位置                       |
| getKeyboardHeight     | number                                                      | 获取键盘高度                   |
| getKeyboardOverlay    | booblean                                                    | 看看是否指定覆盖               |
| toggleKeyboardOverlay | null                                                        | 在覆盖内容和不覆盖内容之间切换 |
