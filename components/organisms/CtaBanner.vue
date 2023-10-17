<template>
  <Container>
    <div
      class="w-full grid xs:grid-cols-1 gap-6 md:grid-cols-2 bg-gray-light xs:p-6 md:p-14 rounded-3xl"
    >
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-2xl text-white">
          Você Está Pronto para Ser o Próximo Aprovado?
        </h4>

        <p class="text-gray-text">
          Aprovação ao seu alcance. Deixe a assessoria ser seu guia. Clique agora e comece
          sua jornada para o sucesso!
        </p>
      </div>

      <div class="w-full flex xs:flex-col md:flex-row items-center justify-center gap-4">
        <CtaButton
          href="https://api.whatsapp.com/send?phone=5544991439507&text=Olá, Professor Alexandre. Quero ser aluno do seu curso."
          text="Quero minha vaga"
        />
        <SecondaryButton
          href="https://api.whatsapp.com/send?phone=5544991439507&text=Olá, Professor Alexandre. Quero tirar algumas dúvidas sobre a assessoria."
          text="Mais Informações"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts"></script>
