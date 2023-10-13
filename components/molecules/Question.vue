<template>
  <div class="rounded-3xl w-full p-8 bg-gray-light cursor-pointer" @click="show = !show">
    <div class="flex justify-between items-center">
      <span class="text-white font-bold text-xl">{{ props.question }}</span>
      <div
        class="transform transition-all ease-in-out"
        :class="show ? 'rotate-180' : 'rotate-0'"
      >
        <ArrowDownCircle color="white" />
      </div>
    </div>

    <div class="mt-4 w-full" v-if="show">
      <p class="text-gray-text">
        {{ props.awnser }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownCircle } from "lucide-vue-next";
const props = defineProps<{
  question: string;
  awnser: string;
}>();

const show = ref(false);
</script>
