<template>
  <a
    :href="href"
    class="px-4 py-2 font-light rounded-full text-white bg-primary-blue min-w-[160px] max-w-[200px] h-[52px] flex justify-center items-center transform hover:scale-105 transition-all ease-in duration-200"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  href: string;
}>();

const { text, href } = toRefs(props);
</script>
