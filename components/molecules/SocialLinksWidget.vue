<template>
  <div class="w-full fixed bottom-0 left-0 right-0 z-50" id="widget">
    <Container class="flex justify-end py-6 relative px-2">
      <button
        class="rounded-full bg-primary-blue w-10 h-10 flex justify-center items-center shadow-sm"
        type="button"
        @click="toogleWidget"
      >
        <MessageCircle color="white" />
      </button>

      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
      >
        <div
          class="absolute -top-44 xs:right-2 md:-right-1 flex flex-col gap-4 focus:outline-none"
          v-if="show"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5544991439507"
            target="_blank"
            class="w-12 h-12 rounded full grid place-content-center"
          >
            <img src="/whatsapp.svg" alt="" class="w-10 h-10" />
          </a>

          <a
            href="https://www.instagram.com/profxandioliveira/"
            target="_blank"
            class="w-12 h-12 rounded full grid place-content-center"
          >
            <img src="/instagram.svg" alt="" class="w-10 h-10" />
          </a>

          <a
            href="https://www.youtube.com/@xandioliveira"
            target="_blank"
            class="w-12 h-12 rounded full grid place-content-center"
          >
            <img src="/youtube.svg" alt="" class="w-10 h-10" />
          </a>
        </div>
      </transition>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle } from "lucide-vue-next";

const show = ref(false);

function toogleWidget() {
  show.value = !show.value;
}

function closeWidgetOnOutsideClick(event: any) {
  const widgetElement = document.getElementById("widget");
  if (show.value && widgetElement && !widgetElement.contains(event.target)) {
    show.value = false;
  }
}

onMounted(() => {
  document.body.addEventListener("click", closeWidgetOnOutsideClick);
});

onBeforeUnmount(() => {
  document.body.removeEventListener("click", closeWidgetOnOutsideClick);
});
</script>
