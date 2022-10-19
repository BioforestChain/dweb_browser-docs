# icon

用于应用内图标展示，矢量图标。

## 代码示例

> 以vue3 为例,完整代码查看:[test-vue3](https://github.com/BioforestChain/plaoc/tree/main/test-vue3)

```html
<!-- type = NamedIcon -->
<dweb-icon type="NamedIcon" source="Filled.AddCircle"></dweb-icon>

<!-- type = AssetIcon -->
<dweb-icon type="AssetIcon" source="http://xxx/icon.svg" size="50"></dweb-icon>
```

## `dweb-icon`

包含属性：`type`, `description`, `size`, `source`。

### `type`

枚举类型，可取值：`NamedIcon` | `AssetIcon`,默认类型`NamedIcon`。

如果是系统资源使用：`NamedIcon`.

用户自定义资源使用：`AssetIcon`.

### `description`

无障碍提示内容。

### `size`

控制图标大小，

### `source`

矢量图标资源地址。

## 系统图标展示


