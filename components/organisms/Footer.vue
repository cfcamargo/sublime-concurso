<template>
  <Container class="py-32 mt-20">
    <div class="grid grid-cols-2 items-center gap-32">
      <div class="flex flex-col gap-4">
        <h4 class="text-white">SUBLIME CONCURSOS</h4>

        <p class="text-gray-text">
          Somos uma equipe dedicada a realizar sonhos. Acreditamos no potencial de todos
          para alcançar seus objetivos, seja na carreira pública ou em outras aspirações.
          Oferecemos uma assessoria completa, com orientação personalizada e recursos de
          qualidade, para guiar você em direção ao sucesso. Sua conquista é nossa maior
          recompensa, e estamos aqui para ajudá-lo a realizar seus sonhos.
        </p>

        <SocialMediaLinks />
      </div>

      <div class="h-full">
        <h4 class="text-white font-bold text-2xl pl-2">Receba Nossas Novidades</h4>

        <div class="flex gap-4 w-full mt-4">
          <div class="px-4 py-2 border border-gray-text rounded-full flex-1">
            <input type="text" placeholder="Digite seu e-mail" class="bg-transparent" />
          </div>
          <button class="bg-primary-blue px-4 py-2 text-white rounded-full">
            Inscrever-se
          </button>
        </div>
      </div>
    </div>

    <div class="mt-20 border-t border-gray-text py-10 flex justify-center">
      <span class="text-xs text-gray-text">
        © Sublime Concursos — Todos os direitos reservados
      </span>
    </div>
  </Container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
