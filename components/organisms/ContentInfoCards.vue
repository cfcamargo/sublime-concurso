<template>
  <section class="xs:mt-0 md:mt-20">
    <Container>
      <div class="grid xs:grid-cols-1 md:grid-cols-2 xs:py-10md:py-40 items-center">
        <div class="flex flex-col gap-6 py-10">
          <h4 class="xs:text-3xl md:text-5xl font-bold text-white">Esteja Pronto</h4>
          <p class="text-gray-text">
            Imagine ter acesso exclusivo a conteúdo de Raciocínio Lógico Matemático todos
            os dias no seu WhatsApp. Combine isso com uma plataforma de organização de
            estudos que está prestes a revolucionar sua jornada rumo à aprovação.
            Preparação, comprometimento e dedicação são essenciais para alcançar seus
            objetivos. Estamos aqui para ajudá-lo a enfrentar os desafios, aprender,
            crescer e superar obstáculos. Não perca a oportunidade de transformar sua
            preparação para concursos - junte-se a nós agora!
          </p>
          <CtaButton
            text="Fale conosco"
            href="https://api.whatsapp.com/send?phone=5544991439507&text=Olá, Professor Alexandre. Quero fazer parte do seu time e adquirir seu curso!"
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
              description="Conteudos dirários de RLM diretamente em seu WhatsApp"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts"></script>
