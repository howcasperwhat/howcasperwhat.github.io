

# Flex In CSS  
## Flex 布局结构  

<Flex1 />  

## 主轴和侧轴  
1. 主轴默认水平向右
2. 侧轴默认垂直向下
3. 主轴和侧轴方向可以设置

## Flex Container 属性  
> 需要先在Flex Container设置 `display: flex;`

### `flex-direction` 设置主轴的方向
``` css
#app {
  display: flex;
  flex-direction: row;  // 主轴向右 侧轴向下
  flex-direction: row-reverse;  // 主轴向左 侧轴向下
  flex-direction: column;  // 主轴向下 侧轴向右
  flex-direction: column-reverse;  // 主轴向上 侧轴向右
}
```

### `justify-content` 设置主轴上的Flex Item的排列方式  
> 主轴为row时：头 ---> 尾  

1. flex-start 局头 (default)
2. flex-end 局尾
3. center 居中
4. space-around 平分剩余空间

> 每个Flex Item的 `margin-left`和 `margin-right`相同

<flex-2 />

> 所有Flex Item不设置宽度时，剩余宽度为Flex Container的宽度

1. space-between 两边贴边后再平分剩余空间

> 主轴👉时，最左边Flex Item的 `margin-left` 和 最右边Flex Item的 `margin-right`都为0

### `flex-wrap` 设置Flex Item是否**换行**

1. `nowrap` 不换行，如果装不下就修改每个Flex Item的宽度到刚刚好挤满，margin不会变 (default)
2. `wrap` 换行，装不下就换行

### `align-content` 设置侧轴上的子元素排列方式（多行）

> - 多行即出现了换行
> - 设置后就能解决 `flex-wrap: wrap;`换行后间距过大的问题
> - 对单行无效

1. flex-start 居头
2. flex-end 局尾
3. center 居中
4. space-around 平分所有剩余空间（即margin相同）
5. space-between 一行贴着侧轴头，另一行贴着侧轴尾
6. stretch 拉伸

### `align-items` 设置侧轴上子元素排列方式（单行）

> 单行即未出现换行

1. flex-start 局头
2. flex-end 局尾
3. center 居中
4. stretch 拉伸

> - 不能设置Flex Item侧轴上的长度
> - Flex Item的侧轴上的长度会被拉伸到和Flex Container对应方向上的长度一致，margin不会变

### `flex-flow` 复合属性

> 分别设置 `flex-direction`和 `flex-wrap`
> e.g. `flex-flow: column wrap;`

### Flex Container属性总结

|       属性        | 描述             |
| :---------------: | ---------------- |
| `flex-direction`  | 主轴方向         |
|    `flex-wrap`    | 换行             |
|    `flex-flow`    | 主轴方向+换行    |
| `justify-content` | 主轴排列         |
|  `align-content`  | 侧轴排列（多行） |
|   `align-items`   | 侧轴排列（单行） |

## Flex Item 属性

### `flex：<number>;` 分配Flex Item的**剩余空间**，定义某个Flex Item占几份

> - 默认值为0
> - 假设Flex Container的宽度为w，所有Flex Item的flex属性和为fs，则对于flex属性为f的Flex Item的宽度为w×f÷fs，

可以让左右两边的元素大小固定，中间的元素自适应大小

### `align-self` 控制Flex Item自己在**侧轴**上的**排列方式**

`align-items/align-content` 为Flex Container中的全部Flex Item的排列方式

因此 `align-self`的属性值与 `align-items`是类似的

### `order` 定义Flex Item的**排列顺序**

> - 数值越小，排列越靠前
> - 可以是负数
> - z-index是数值越大，越靠上

### Flex Item 属性总结

| 属性         | 描述     |
| ------------ | -------- |
| `flex`       | 大小占比 |
| `align-self` | 排列方式 |
| `order`      | 排列顺序 |

## Flex缺点
1. 兼容性较差（例如Safiri不支持flex-gap）
2. 可以尝试使用Grid布局代替Flex布局