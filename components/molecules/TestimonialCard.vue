<template>
  <div class="bg-gray-light rounded-xl max-w-[390px] px-6 py-20 flex flex-col gap-10">
    <div class="flex items-center gap-6">
      <div
        class="rounded-tr-full rounded-br-full rounded-bl-full bg-white w-20 h-20"
      ></div>

      <span class="text-xl text-white">Jhon Doe</span>
    </div>

    <div class="flex flex-col gap-8">
      <h4 class="text-3xl text-white font-bold">Lorem Ipsum</h4>

      <p class="text-gray-text leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
        in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
        interdum nulla, ut commodo diam libero.
      </p>

      <div class="flex items-center gap-2">
        <Star v-for="item in 5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
