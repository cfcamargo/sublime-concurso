<template>
  <div class="flex gap-4">
    <a
      href="https://www.instagram.com/profxandioliveira/"
      target="_blank"
      class="rounded-full w-9 h-9 flex justify-center items-center border border-[#75757F]"
    >
      <Instagram color="#75757F" />
    </a>

    <a
      href="https://www.youtube.com/@xandioliveira"
      target="_blank"
      class="rounded-full w-9 h-9 flex justify-center items-center border border-[#75757F]"
    >
      <Youtube color="#75757F" />
    </a>

    <a
      href="https://api.whatsapp.com/send?phone=5545999059507"
      target="_blank"
      class="rounded-full w-9 h-9 flex justify-center items-center border border-[#75757F]"
    >
      <WhatsIcon />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Instagram, Youtube } from "lucide-vue-next";
</script>

<style scoped></style>
