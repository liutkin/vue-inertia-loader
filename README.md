# vue-loading-wrapper

![showcase](showcase.gif "showcase")

Data loading animation component for VueJS, inspired by video games loading screens.

🎥 [Demo](https://liutkin.github.io/vue-loading-wrapper/)

## Install

```bash
npm i vue-loading-wrapper
```

```js
import LoadingWrapper from "vue-loading-wrapper";

export default {
  name: "LoadingWrapper",
  components: {
    LoadingWrapper,
  },
};
```

## Usage

```html
<loading-wrapper :loading="isLoading"
  >Some dynamic content loaded</loading-wrapper
>
```

## Props

| Prop           | Type      | Required | Default             | Description                     |
| -------------- | --------- | -------- | ------------------- | ------------------------------- |
| `loading`      | `Boolean` | `false`  | `false`             | Toggle animation                |
| `pulse`        | `Boolean` | `false`  | `false`             | Toggle progress pulse animation |
| `text`         | `String`  | `false`  | `"Loading"`         | Text label                      |
| `tag`          | `String`  | `false`  | `"div"`             | Root HTML element tag           |
| `baseClass`    | `String`  | `false`  | `"loading-wrapper"` | Base CSS class                  |
| `contentClass` | `String`  | `false`  | `""`                | Content CSS class               |

## Slots

| Name           | Description                                               |
| -------------- | --------------------------------------------------------- |
| None (default) | Content that being displayed once loading flag is removed |
