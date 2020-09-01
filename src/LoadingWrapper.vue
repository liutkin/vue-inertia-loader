<template>
  <div v-if="loading || !isFinishAnimationEnded" :class="baseClass">
    <div :class="`${baseClass}__bar`">
      <div
        :style="{ width: `${progress}%` }"
        :class="[`${baseClass}__progress`, { 'animate-pulse': pulse }]"
      ></div>
    </div>
    <div :class="`${baseClass}__text`">
      {{ text }}
    </div>
  </div>
  <component v-else :is="tag" :class="contentClass"><slot /></component>
</template>

<script>
export default {
  name: "LoadingWrapper",
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
    baseClass: {
      type: String,
      default: "loading-wrapper",
    },
    contentClass: {
      type: String,
      default: "",
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
.loading-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.loading-wrapper__bar {
  position: relative;
  width: 10rem;
  background: rgba(0, 0, 0, 0.15);
}

.loading-wrapper__progress {
  height: 0.05rem;
  transition: width 0.25s linear;
  background-color: rgba(0, 0, 0, 0.5);
}

.animate-pulse {
  animation: pulse 0.5s ease infinite;
}

.loading-wrapper__text {
  font-family: sans-serif;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.9);
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
