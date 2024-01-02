<template>
  <section class="main">
    <div class="container">
      <div class="main__inner">
        <h1>
          Инвестируйте в <span>недвижимость</span> вашей мечты в Турции вместе с
          нами
        </h1>
        <filters />
        <!-- Нужно убрать ! с !cards -->
        <div class="cards" v-if="!cards">
          <card :data="item" v-for="(item, i) in cards" :key="i" />
        </div>
        <div class="empty" v-else>
          <img src="../../assets/images/empty.png" alt="" />
          <h3>Результатов не найдено</h3>
          <p>По вашему запросу ничего не нашлось.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/partials/Card.vue";
import { ref } from "vue";
import Filters from "@/components/partials/Filters.vue";
export default {
  components: {
    Card,
    Filters,
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
        id: 3,
        images: ["card-1.jpg", "card-2.jpg"],
        title: "Дом рядом с морем в Анталии",
        location: "Анталья",
        room: "2+1",
        area: "120 м²",
        price: "$ 250 000",
      },
      {
        id: 4,
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
