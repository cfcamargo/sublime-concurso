<template>
  <Container class="flex flex-col gap-8 py-20">
    <div>
      <div
        class="border rounded border-gray-text w-20 flex justify-center items-center px-2 py-1"
      >
        <span class="text-gray-text text-xs">Faq</span>
      </div>
      <h4 class="text-white text-4xl font-bold px-2 mt-2">Perguntas frequentes</h4>
    </div>

    <div class="flex flex-col gap-4">
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  </Container>
</template>

<script setup lang="ts"></script>
