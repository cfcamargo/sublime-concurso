<template>
  <Container class="py-20">
    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="xs:hidden md:flex">
        <img src="/juridic.png" class="xs:w-[70%] md:w-auto xs:mx-auto md:mx-0" />
      </div>

      <div class="flex flex-col gap-8">
        <h4 class="text-white xs:text-3xl md:text-5xl font-bold">
          Caminho para o Sucesso nos Concursos Mais Concorridos
        </h4>

        <p class="text-gray-text">
          Em uma corrida em que a vitória é disputada por milhares, a assessoria se
          apresenta como o diferencial absoluto. Imagine ter um guia personalizado,
          estratégias afiadas e suporte especializado ao seu lado, tudo isso direcionado
          para uma única meta: a aprovação. Seu lugar nos concursos de elite está ao
          alcance das mãos, e a assessoria é a chave para tornar esse sonho realidade.
        </p>

        <ul class="flex flex-col gap-4">
          <li v-for="item in list" class="flex items-center gap-4 text-gray-text">
            <Check />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
const list = [
  "Direcionamento Personalizado;",
  "Estratégias de Estudo Eficientes;",
  "Resolução de Dúvidas e Feedback Construtivo;",
  "Motivação e Foco;",
  "Acompanhamento Constante.",
];
</script>
