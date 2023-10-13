<template>
  <section class="xs:mt-0 md:mt-20">
    <Container>
      <div class="grid xs:grid-cols-1 md:grid-cols-2 xs:py-10md:py-40 items-center">
        <div class="flex flex-col gap-6 py-10">
          <h4 class="text-5xl font-bold text-white">Esteja Pronto</h4>
          <p class="text-gray-text">
            A jornada rumo aos seus objetivos exige preparação, comprometimento e
            dedicação. Esteja pronto para enfrentar os desafios, aprender, crescer e
            superar obstáculos. Ao realizar a sua compra, você fará uma video chamada
            direta com o professor Alexandre, para tirar todas suas dúvidas e iniciar sua
            jornada de estudos.
          </p>
          <CtaButton
            text="Contato"
            href="https://api.whatsapp.com/send?phone=5545999059507&text=Quero tirar algumas dúvidas sobre a acessoria"
          />
        </div>

        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-10">
          <div class="flex flex-col gap-8 xs:mt-0 md:mt-8">
            <InfoCards
              icon="like"
              title="Plataforma Perfeita"
              description="Na nossa plataforma, oferecemos uma rotina de estudos personalizada para você, simplificando o caminho para o sucesso."
            />

            <InfoCards
              icon="mail"
              title="Suporte Especializado"
              description="Nosso suporte ao aluno está sempre à disposição. Estamos aqui para auxiliá-lo em sua jornada de estudos."
            />
          </div>

          <div class="flex flex-col gap-8 xs:mt-0 md:-mt-8">
            <InfoCards
              icon="cost"
              title="Preço Acessível"
              description="Oferecemos preços acessíveis, tornando a qualidade dos nossos serviços acessível a todos os alunos."
            />

            <InfoCards
              icon="whats"
              title="Conteúdo Diário"
              description="Nosso suporte ao aluno está sempre à disposição. Estamos aqui para auxiliá-lo em sua jornada de estudos."
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts"></script>
