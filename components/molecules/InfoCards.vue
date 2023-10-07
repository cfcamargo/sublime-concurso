<template>
  <div class="rounded-2xl bg-gray-light px-6 py-10 flex flex-col gap-3 min-h-[340px]">
    <img :src="`/icons/${icon}.png`" alt="" class="w-[75px]" />
    <h5 class="text-white text-xl">{{ title }}</h5>
    <p class="text-gray-text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import Like from "@/components/atoms/Like.vue";
import Cost from "@/components/atoms/Cost.vue";
import Mail from "@/components/atoms/Mail.vue";
import Whats from "@/components/atoms/Whats.vue";

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
}>();

const { icon, title, description } = props;
</script>
