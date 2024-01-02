<template>
  <section class="clients">
    <div class="container">
      <div class="clients__inner">
        <p class="title">Что говорят наши клиенты?</p>
        <div class="clients__slides">
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
            <SplideSlide v-for="(slide, index) in slides" :key="index">
              <div class="slide-item">
                <img
                  v-if="slide.img"
                  :src="require(`@/assets/images/${slide.img}`)"
                  alt=""
                />
                <span>
                  {{ slide.name }}
                </span>
                <p>{{ slide.comment }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="clients__mobile">
          <div class="slide-item" v-for="(slide, index) in slides" :key="index">
            <img
              v-if="slide.img"
              :src="require(`@/assets/images/${slide.img}`)"
              alt=""
            />
            <span>
              {{ slide.name }}
            </span>
            <p>{{ slide.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const slides = ref([
      {
        img: "client-1.png",
        name: "Асель Баймуратова",
        comment:
          "Спасибо, Investport за то, что помогли найти идеальную недвижимость для инвестиций. Это отличный вариант если хотите получить пассивный доход",
      },
      {
        img: "client-2.png",
        name: "Марат Хасанов",
        comment:
          "Я не знал как правильно работать с вложением. Инвестиции в недвижимость - лучший способ вкладывать деньги! Спасибо, Investport.",
      },
      {
        img: "client-3.png",
        name: "Аскар Узабеков",
        comment:
          "Я нашел для себя Investport и работаю теперь только с ним. С их помощью я начал инвестировать напрямую в недвижимость ",
      },
      {
        img: "client-1.png",
        name: "Асель Баймуратова",
        comment:
          "Спасибо, Investport за то, что помогли найти идеальную недвижимость для инвестиций. Это отличный вариант если хотите получить пассивный доход",
      },
    ]);

    return {
      slides,
    };
  },
};
</script>

<style></style>
