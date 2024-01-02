<template>
  <section class="similar-slides">
    <div class="container">
      <div class="similar-slides__inner">
        <p class="title">Похожие объекты</p>
        <div class="similar-slides__cards" v-if="cards">
          <Splide
            :options="{
              type: 'loop',
              interval: 3000,
              speed: 700,
              Infinity: false,
              pagination: false,
              arrows: true,
              autoWidth: true,
              focus: 0,
              omitEnd: true,
              breakpoints: {
                580: {
                  perPage: 1,
                  swipe: true,
                },
              },
            }"
          >
            <SplideSlide v-for="(item, index) in cards" :key="index">
              <div class="slide-inner">
                <card :data="item" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/partials/Card.vue";
import { ref } from "vue";

export default {
  components: {
    Card,
  },
  setup() {
    const cards = ref([
      {
        id: 1,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Апартамент в Аланье с 1+1 комфортом",
        location: "Аланье",
        room: "2+1",
        area: "120 м²",
        price: "$ 250 000",
      },
      {
        id: 2,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Современная вилла с панарамными окнами",
        location: "Измир",
        room: "4",
        area: "160 м²",
        price: "$ 250 000",
      },
      {
        id: 3,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Апартамент Бизнескласс в Стамбуле",
        location: "Стамбул",
        room: "2+1",
        area: "120 м²",
        price: "$ 250 000",
      },
      {
        id: 4,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Дом рядом с морем в Анталии",
        location: "Анталья",
        room: "2+1",
        area: "120 м²",
        price: "$ 250 000",
      },
      {
        id: 5,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Вилла с бассейном ",
        location: "Кайсери",
        room: "2+1",
        area: "120 м²",
        price: "$ 250 000",
      },
    ]);

    return {
      cards,
    };
  },
};
</script>

<style></style>
