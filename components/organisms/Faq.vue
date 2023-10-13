<template>
  <Container class="flex flex-col gap-8 py-20">
    <div>
      <div
        class="border rounded border-gray-text w-20 flex justify-center items-center px-2 py-1"
      >
        <span class="text-gray-text text-xs">Faq</span>
      </div>
      <h4 class="text-white xs:text-3xl md:text-4xl font-bold px-2 mt-2">
        Perguntas frequentes
      </h4>
    </div>

    <div class="flex flex-col gap-4">
      <Question
        v-for="question in questions"
        :key="question.question"
        :question="question.question"
        :awnser="question.awnser"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
const questions = [
  {
    question: "O curso serve para qualquer concurso?",
    awnser: "Sim. O Curso abrange qualquer edital, independente da área",
  },
  {
    question: "Como é feito o envio das questões comentadas?",
    awnser: "Por meio de listas de transmissão no Whatsapp",
  },
  {
    question: "Quanto tempo de acesso à plataforma e aos conteudos?",
    awnser: "São cinco meses de acesso, conteúdos e dicas de estudo",
  },
  {
    question:
      "Logo que finalizar a compra, terei uma chamada direta com o professor Alexandre?",
    awnser:
      "Sim, ao finalizar o seu pedido, terá o agendamento de uma vídeo chamada para alinhamento do plano e dúvidas",
  },
];
</script>
