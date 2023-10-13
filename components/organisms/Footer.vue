<template>
  <Container class="py-32 mt-20">
    <div class="grid xs:grid-cols-1 md:grid-cols-2 items-center gap-32">
      <div class="flex flex-col gap-4">
        <div class="w-[250px]">
          <Logo />
        </div>

        <p class="text-gray-text">
          Somos uma equipe dedicada a realizar sonhos. Acreditamos no potencial de todos
          para alcançar seus objetivos, seja na carreira pública ou em outras aspirações.
          Oferecemos uma assessoria completa, com orientação personalizada e recursos de
          qualidade, para guiar você em direção ao sucesso. Sua conquista é nossa maior
          recompensa, e estamos aqui para ajudá-lo a realizar seus sonhos.
        </p>

        <SocialMediaLinks />
      </div>

      <form class="h-full">
        <h4 class="text-white font-bold text-2xl pl-2">Receba Nossas Novidades</h4>

        <form
          action="https://hotmail.us9.list-manage.com/subscribe/post?u=c84d7e56ba74cbb820dfd2a8c&amp;id=603cae3d4c&amp;f_id=00c91ae1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="flex xs:flex-col md:flex-row gap-4"
          target="_blank"
          cl
        >
          <div class="px-4 py-2 border border-gray-text rounded-full flex-1">
            <input
              type="email"
              name="EMAIL"
              class="bg-transparent w-full focus:outline-none focus:bg-transparent text-white flex-1"
              placeholder="Digite seu e-mail"
              id="mce-EMAIL"
              required="true"
            />
          </div>
          <button class="bg-primary-blue px-4 py-2 text-white rounded-full">
            Inscrever-se
          </button>
        </form>
      </form>
    </div>

    <div class="mt-20 border-t border-gray-text py-10 flex justify-center">
      <span class="text-xs text-gray-text">
        © Sublime Concursos — Todos os direitos reservados
      </span>
    </div>
  </Container>
</template>
