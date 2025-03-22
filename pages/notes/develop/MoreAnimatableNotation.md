<script setup>
import WavyLine from './components/WavyLine.vue'
import Logo from '../../../src/components/Logo.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const highlight = ref(null)
const bracket = ref(null)
const box = ref(null)
const circle = ref(null)
const line = ref(null)

const n0 = ref(null)
const n1 = ref(null)
const n2 = ref(null)
const n3 = ref(null)
const n4 = ref(null)

onMounted(async () => {
  const notate = (await import('animate-notation')).notate
  n0.value = notate(box.value, 'box', { 
    color: '#2f81f7'
  })
  n1.value = notate(bracket.value, '[]', { 
    color: '#3fb950', 
  })
  n2.value = notate(highlight.value, '=', {
    opacity: 0.3,
    color: '#a371f7',
    zIndexOffset: -1, 
  })
  n3.value = notate(circle.value, 'o', {
    color: '#db6d28',
  })
  n4.value = notate(line.value, '_', {
    color: '#f85149'
  })
  n1.value.show(0)
  n2.value.onShowed(() => {
    setTimeout(() => {
      n2.value.hide(500)
    }, 1000)
  })
  n2.value.onHidden(() => {
    setTimeout(() => {
      n2.value.show(2000)
    }, 500)
  })
  n2.value.show(2000)
  n3.value.show(0)
  n4.value.show(0)
})
onUnmounted(() => {
  [n0, n1, n2, n3, n4].forEach(n => n.value.remove())
})
</script>

# More Animatable Notation

There are many link-tags in [the homepage of my website](https://howcasperwhat.github.io) used to introduce school, project, and other that related to me. In order to add some decorations to then, I firstly think about using some notation around the tags when hovering on them.

There are 2 challenges to deal with:
1. Handwriting-like notation is preferred.
2. The notation should be animatable when mouse moving in and leaving out.

## <span ref="bracket">Handwriting-like</span> style

I found it is easy to paint a rough notation using SVG after looking up [MDN: d](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d). As an example, I wants draw a static wavy line. Just using [Quadratic Bézier curve (`Q/q` command in path data)](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#quadratic_b%C3%A9zier_curve), imo, is enough to draw a wavy line. 

When `q` up and down with same `dx` and `dy`, we got a static wavy line:

<div flex-center>
   <WavyLine :dynamic="false" />
</div>

And adding some randomness to `dx` and `dy`:

<div flex-center>
   <WavyLine :dynamic="true" />
</div>

## <span ref="circle" p-x-2>Animation</span>

What about the second challenge? Take a look at the logo on the top left of this page. It is a SVG image with an animation which is inspired by [Animated SVG Logo](https://antfu.me/posts/animated-svg-logo). It use animation css keyframe of [`strokeDashArray`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) to realize the paint-animation of stroke, from `0 length` to `length 0`.

Inspired by [Animated line drawing in SVG](https://jakearchibald.com/2013/animated-line-drawing-svg/), I use pure Javascript to make it animate and use [`strokeDashOffset`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) to realize the animation as below:
1. Init `strokeDashArray` and `strokeOffset` both to `length`.
2. Transform `strokeOffset` from `length` to `0`.

Note that there are some bug of `strokeDashArray` in browser that it will display a small dot when dashLength is 0. Setting the opacity to 0 whenever dashLength is 0 can work, or just use the `strokeDashOffset` solution which is more elegant. 

Below are two examples of the animation using [`animate()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate):

::: tabbar
@ strokeDashArray
<div flex-center h-16>
   <WavyLine :dynamic="true" animate="array" />
</div>

@ strokeDashOffset
<div flex-center h-16>
   <WavyLine :dynamic="true" animate="offset" />
</div>
:::

> [!WARNING]
> Percentage value for `strokeDashArray` and `strokeOffset` is mentioned in [MDN Documents](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray#dasharray), but is unavailable for broswer now, thus [`getTotleLength()`](https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength) should be called to get the dashLength after create the [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement). We can also see from this that a pure Javascript implementation is necessary。

## Rough Notation
I'm surprised that [Slidev's v-mark](https://sli.dev/features/rough-marker#v-mark-directive) function accurs to me after completing the code above. It uses [Rough Notation](https://roughnotation.com/) as a solution to mark anything using [vue directive](https://vuejs.org/guide/reusability/custom-directives.html#custom-directives). And [Rough.js](https://roughjs.com/) it uses can generate handwrite-style path datas easyly.

## Barriers
It seems that the wavy lines above can animate while showing and hiding. But using `animate()` make it hard to record the `strokeDashArray` or `strokeOffset`. Back to the question I mentioned at the beginning, how to make the notation animatable when mouse moving in and leaving out? Just imagine that when I move the mouse out before the paint animation is completed, erase animation should be triggered begin with the current length of the stroke. Howerver, it is hard to get the current length of the stroke when using `animate()`, or maybe use [`Animation.currentTime`](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime) which is not supported greatly in current browsers.

I think it is a good idea to use [`requestAnimationFrame()`](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) to control the animation. It is a highly flexible api that can record anything by ourselves. The parameters of `requestAnimationFrame()` is as below, which make it available to control the duration.

``` ts
declare function requestAnimationFrame(
  callback: FrameRequestCallback): number;

interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}

type DOMHighResTimeStamp = number;
```

## [Animate Notation](https://www.npmjs.com/package/animate-notation)

Now you can use it in your project by installing package from npm:

``` bash
npm install animate-notation
```

### Basic Usage

``` js
import { notate } from 'animate-notation'
const foo = document.querySelector('.bar')
```

<span ref="box" @mouseover="n0.show(2000)" @mouseleave="n0.hide(500)" b-b="1px dashed">Toggle the notation by mouseover and mouseleave:</span>

``` js
const n = notate(foo, 'box', { color: '#2f81f7' })
foo.addEventListener('mouseover', () => n.show(2000))
foo.addEventListener('mouseleave', () => n.hide(500))
```

<span ref="highlight">Show and hide the notation Infinity times:</span>

``` js
const n = notate(foo, '=', { 
  color: '#a371f7'
  opacity: 0.3,
  zIndexOffset: -1,
})
n.onShowed(() => setTimeout(() => n.hide(500), 1000))
n.onHidden(() => setTimeout(() => n.show(2000), 500))
n.show(2000)
```

<span ref="line">Show the notation once immediately:</span>

``` js
const n = notate(foo, '_', { color: '#f85149' })
n.show(0)
```

### Custom Your Own Notation Path

The types of `paths` parameter is as below:

``` ts
export type Constructor<T> = (w: number, h: number) => T
export type Path = string | Drawable
export type OrArrayOf<T> = T | Array<T>
export type OrConstructorOf<T> = T | Constructor<T>
export type PathConstructor = OrConstructorOf<OrArrayOf<Path>>
```

You can pass a path data with type `string[]` or `Drawable[]`(see [Rough.js](https://roughjs.com/)) to the `paths` parameter of `notate()`. If path datas are depended on the size of the element, you can pass a function with `width` and `height` as parameters to `paths`.

``` js
import PathGenerator from 'animate-notation/path-generator'
import PathAnimator from 'animate-notation/path-animator'
// PathRoughOptions is a subset of RoughOptions
const pg = new PathGenerator({ maxRandomnessOffset: 0.4 })
const paths = (w, h) => [
  pg.line(0, 0, w, h),
  pg.arc(0, 0, w, h, Math.PI / 2, Math.PI),
]
const pa = new PathAnimator(foo, paths, { opacity: 0.8 })
pa.show(2000)
// onUnmounted(() => pa.remove())
```

## Known Issues

There also are some parts of stroke will showed when the length is zero. When I zoom in on the browser interface, the problem will disappear. Maybe it is a bug of browser.