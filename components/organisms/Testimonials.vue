<template>
  <Container class="flex flex-col py-20 gap-10">
    <div>
      <div
        class="border rounded border-gray-text w-36 flex justify-center items-center px-2 py-1"
      >
        <span class="text-gray-text text-xs">Depoimentos</span>
      </div>
      <h4 class="text-white text-5xl max-w-[700px] mt-4 font-bold">
        Veja o que nossos alunos tem a dizer sobre nossa acessoria
      </h4>
    </div>
    <div class="flex justify-between">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  </Container>
</template>

<script setup lang="ts"></script>
