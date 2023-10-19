<template>
  <div class="w-full h-[calc(100vh_-_80px)] px-2 xs:py-10 md:py-0">
    <Container>
      <div
        class="flex xs:gap-6 md:gap-0 xs:flex-col md:flex-row items-center h-[calc(100vh_-_80px)]"
      >
        <div class="flex-1 flex flex-col xs:items-center md:items-start gap-10">
          <h2 class="text-white xs:text-2xl md:text-4xl font-bold relative">
            O planejamento, a organização, a disciplina e o diferencial para passar em
            qualquer concurso você encontrará aqui.
            <Circles class="absolute -top-6 -left-6" />
          </h2>

          <p class="text-gray-text">
            Transforme sua preparação para concursos com nossa assessoria especializada.
            Nossos métodos comprovados e suporte personalizado vão revolucionar seus
            estudos e aumentar suas chances de sucesso.
          </p>
        </div>

        <div class="flex-1 flex justify-end">
          <img src="/cover.png" alt="" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts"></script>
