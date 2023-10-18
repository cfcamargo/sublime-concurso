<template>
  <Header />
  <Banner />
  <div class="xs:flex flex-col md:hidden">
    <VideoSection />
    <VideoCtaBanner />
  </div>
  <BancasBanner />
  <ContentInfoCards />
  <div class="xs:hidden flex-col md:flex">
    <VideoSection />
    <VideoCtaBanner />
  </div>
  <ContentInfoList />
  <Testimonials />
  <Faq />
  <CtaBanner />
  <Footer />
  <SocialLinksWidget />
</template>

<script setup lang="ts"></script>
