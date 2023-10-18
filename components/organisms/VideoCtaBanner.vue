<template>
  <Container>
    <div
      class="w-full grid xs:grid-cols-1 gap-6 md:grid-cols-2 bg-gray-light xs:p-6 md:p-14 rounded-3xl"
    >
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-2xl text-white">
          Conquiste o Sucesso com a Orientação Exclusiva do Professor Alexandre!
        </h4>

        <p class="text-gray-text">
          Ao se inscrever no curso, você terá esse bonus: ganhe um encontro exclusivo em
          videochamada com o Professor Alexandre. Esta é uma rara oportunidade de ter suas
          dúvidas esclarecidas, definir metas e planejar seus estudos de forma estratégica
          e personalizada. Não apenas aprenda, mas eleve seus estudos a um patamar
          superior com uma orientação direta e individualizada de um especialista renomado
          no campo. A sua jornada para o sucesso tem um aliado de peso.
        </p>
      </div>

      <div class="w-full flex xs:flex-col md:flex-row items-center justify-center gap-4">
        <CtaButton
          class="w-[200px]"
          text="Quero minha vaga"
          href="https://api.whatsapp.com/send?phone=5544991439507&text=Olá, Professor Alexandre. Quero fazer parte do seu time e adquirir seu curso!"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts"></script>
