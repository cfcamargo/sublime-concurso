<template>
  <div class="w-full h-[calc(100vh_-_80px)] px-2 xs:py-10 md:py-0">
    <Container>
      <div
        class="flex xs:gap-6 md:gap-0 xs:flex-col md:flex-row items-center h-[calc(100vh_-_80px)]"
      >
        <div class="flex-1 flex flex-col xs:items-center md:items-start gap-10">
          <h2 class="text-white xs:text-3xl md:text-5xl font-bold relative">
            Conquiste a Aprovação em Qualquer Concurso
            <Circles class="absolute -top-6 -left-6" />
          </h2>

          <p class="text-gray-text">
            Acesso Exclusivo a Conteúdo de Raciocínio Lógico e Matemático Todos os Dias no
            Seu WhatsApp. Plataforma de organização dos estudos que revolucionará sua
            aprovação
          </p>

          <CtaButton
            class="w-[200px]"
            text="Quero minha vaga"
            href="https://api.whatsapp.com/send?phone=5545999059507&text=Quero Ser aluno da assessoria"
          />
        </div>

        <div class="flex-1 flex justify-end">
          <img src="/cover.png" alt="" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts"></script>
