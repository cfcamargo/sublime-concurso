<template>
  <div class="rounded-3xl w-full p-8 bg-gray-light cursor-pointer" @click="show = !show">
    <div class="flex justify-between items-center">
      <span class="text-white font-bold text-xl">Lorem ipsum dolor alguma coisa ?</span>
      <div
        class="transform transition-all ease-in-out"
        :class="show ? 'rotate-180' : 'rotate-0'"
      >
        <ArrowDownCircle color="white" />
      </div>
    </div>

    <div class="mt-4 w-full" v-if="show">
      <p class="text-gray-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
        in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
        interdum nulla, ut commodo diam libero.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ArrowDownCircle } from "lucide-vue-next";

const show = ref(false);
</script>
