<template>
  <div v-if="loading || !isFinishAnimationEnded" :class="containerClass">
    <div :class="barClass" :style="{ backgroundColor: barBgColor }">
      <div
        :style="{
          width: `${progress}%`,
          backgroundColor: progressBgColor,
        }"
        :class="[progressClass, { 'animate-pulse': pulse }]"
      ></div>
    </div>
    <div :class="textClass" :style="{ color: textColor }">{{ text }}</div>
  </div>
  <component v-else :is="tag"><slot /></component>
</template>

<script>
export default {
  name: "InertiaLoader",
  props: {
    loading: Boolean,
    pulse: Boolean,
    text: {
      type: String,
      default: "Loading",
    },
    tag: {
      type: String,
      default: "div",
    },
    containerClass: {
      type: String,
      default: "inertia-loader",
    },
    barClass: {
      type: String,
      default: "inertia-loader__bar",
    },
    progressClass: {
      type: String,
      default: "inertia-loader__progress",
    },
    textClass: {
      type: String,
      default: "inertia-loader__text",
    },
    barBgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.15)",
    },
    progressBgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.5)",
    },
    textColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.9)",
    },
  },
  data: () => ({
    progress: 0,
    isFinishAnimationEnded: false,
    timeoutId: null,
  }),
  mounted() {
    this.randomlyFillProgress();
  },
  watch: {
    loading() {
      clearTimeout(this.timeoutId);
      this.progress = 100;
      setTimeout(() => {
        this.isFinishAnimationEnded = true;
      }, 500);
    },
  },
  methods: {
    randomlyFillProgress() {
      if (this.progress === 100) return;

      setTimeout(() => {
        const randomProgressDelta = Math.floor(Math.random() * 21) + 5;
        const nextRandomProgressDelta =
          this.progress + randomProgressDelta > 100
            ? 100 - this.progress
            : randomProgressDelta;
        this.progress += nextRandomProgressDelta;
        this.timeoutId = setTimeout(() => {
          this.randomlyFillProgress();
        }, 500);
      }, 0);
    },
  },
};
</script>

<style scoped>
.inertia-loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.inertia-loader__bar {
  position: relative;
  width: 10rem;
}

.inertia-loader__progress {
  height: 0.05rem;
  transition: width 0.25s linear;
}

.animate-pulse {
  animation: pulse 0.5s ease infinite;
}

.inertia-loader__text {
  font-family: sans-serif;
  font-size: 0.8rem;
}

@keyframes pulse {
  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0.25;
  }
}
</style>
