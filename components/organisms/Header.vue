import { CtaButton } from '#build/components';
<template>
  <header class="w-full h-[80px] flex items-center justify-center px-2">
    <Container class="flex xs:justify-center md:justify-between items-center">
      <div class="w-[250px]">
        <Logo />
      </div>
      <CtaButton
        text="Contato"
        href="https://api.whatsapp.com/send?phone=5544991439507&text=Olá, Professor Alexandre. Quero ser aluno do seu curso."
        class="xs:hidden md:flex"
      />
    </Container>
  </header>
</template>

<script setup></script>
