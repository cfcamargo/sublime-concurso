<template>
  <video-player
    src="/teste.mp4"
    controls
    :loop="false"
    :volume="0.6"
    :class="videoClasses"
  />
</template>

<script setup lang="ts">
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const width = ref(0);

const updateDimensions = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});

// Propriedade computada para as classes Tailwind CSS
const videoClasses = computed(() => {
  const wClass = width.value > 1280 ? "w-[1280px]" : "w-full";
  const hClass = `h-full`;
  return [wClass, hClass];
});
// poster="/your-path/poster.jpg"
</script>
