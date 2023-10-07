<template>
  <div class="w-full h-[calc(100vh_-_80px)] px-2">
    <Container>
      <div class="flex items-center h-[calc(100vh_-_80px)]">
        <div class="w-[500px] flex flex-col gap-10">
          <h2 class="text-white text-5xl font-bold relative">
            Conquiste a Aprovação em Qualquer Concurso
            <Circles class="absolute -top-6 -left-6" />
          </h2>

          <p class="text-gray-text">
            Acesso Exclusivo a Conteúdo de Raciocínio Lógico e Matemático Todos os Dias no
            Seu WhatsApp! Desfrute de uma Plataforma de Organização de Estudos que Vai
            Revolucionar a Sua Preparação!
          </p>

          <CtaButton class="w-[200px]" text="Quero ser aprovado" href="#" />
        </div>

        <div class="flex-1 flex justify-end">
          <img src="/cover.png" alt="" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts"></script>
