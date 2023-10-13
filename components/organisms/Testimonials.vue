<template>
  <Container class="flex flex-col py-20 gap-10">
    <div>
      <div
        class="border rounded border-gray-text w-36 flex justify-center items-center px-2 py-1"
      >
        <span class="text-gray-text text-xs">Depoimentos</span>
      </div>
      <h4 class="text-white xs:text-3xl md:text-5xl max-w-[700px] mt-4 font-bold">
        Veja o que nossos alunos tem a dizer sobre nossa acessoria
      </h4>
    </div>
    <div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="slidesPerView"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="image in images" :key="image">
          <img :src="image" alt="" class="w-[90%]" />
        </SwiperSlide>
      </Swiper>
    </div>
  </Container>
</template>

<script setup lang="ts">
const images = [
  "/testimonials/1.JPG",
  "/testimonials/2.JPG",
  "/testimonials/3.JPG",
  "/testimonials/4.JPG",
  "/testimonials/5.JPG",
  "/testimonials/6.JPG",
  "/testimonials/7.JPG",
];

const slidesPerView = ref(3);

onMounted(() => {
  if (window.innerWidth < 430) {
    slidesPerView.value = 1;
  }
});
</script>
