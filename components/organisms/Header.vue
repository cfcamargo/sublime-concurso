import { CtaButton } from '#build/components';
<template>
  <header class="w-full h-[80px] flex items-center justify-center px-2">
    <Container class="flex justify-between items-center">
      <div class="w-[250px]">
        <Logo />
      </div>
      <CtaButton
        text="Contato"
        href="https://api.whatsapp.com/send?phone=5545999059507&text=Quero Tirar algumas duvidas sobre a Acessoria"
      />
    </Container>
  </header>
</template>

<script setup></script>
