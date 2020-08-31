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
<loading-wrapper :loading="isLoading">Some dynamic content loaded</loading-wrapper>
```

## Props

| Prop              | Type      | Required | Default                       | Description                     |
| ----------------- | --------- | -------- | ----------------------------- | ------------------------------- |
| `loading`         | `Boolean` | `false`  | `false`                       | Toggle animation                |
| `pulse`           | `Boolean` | `false`  | `false`                       | Toggle progress pulse animation |
| `text`            | `String`  | `false`  | `"Loading"`                   | Text label                      |
| `tag`             | `String`  | `false`  | `"div"`                       | Root HTML element tag           |
| `containerClass`  | `String`  | `false`  | `"loading-wrapper"`           | Root CSS class                  |
| `barClass`        | `String`  | `false`  | `"loading-wrapper__bar"`      | Bar CSS class                   |
| `progressClass`   | `String`  | `false`  | `"loading-wrapper__progress"` | Progress CSS class              |
| `textClass`       | `String`  | `false`  | `"loading-wrapper__text"`     | Text label CSS class            |
| `barBgColor`      | `String`  | `false`  | `"rgba(0, 0, 0, 0.15)"`       | Bar background color            |
| `progressBgColor` | `String`  | `false`  | `"rgba(0, 0, 0, 0.5)"`        | Progress background color       |
| `textColor`       | `String`  | `false`  | `"rgba(rgba(0, 0, 0, 0.9))"`  | Text label color                |

## Slots

| Name           | Description                                               |
| -------------- | --------------------------------------------------------- |
| None (default) | Content that being displayed once loading flag is removed |
