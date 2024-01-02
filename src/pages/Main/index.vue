<template>
  <div>
    <section class="main">
      <div class="container">
        <div class="main__inner">
          <h1>
            Инвестируйте в <span>недвижимость</span> вашей мечты в Турции вместе
            с нами
          </h1>
          <filters />
          <div class="cards" v-if="cards">
            <card :data="item" v-for="(item, i) in cards" :key="i" />
          </div>
        </div>
      </div>
    </section>
    <about-us />
    <clients />
    <request />
  </div>
</template>

<script>
import Request from "@/components/partials/Main/Request.vue";
import Clients from "@/components/partials/Main/Clients.vue";
import AboutUs from "@/components/partials/Main/AboutUs.vue";
import Card from "@/components/partials/Card.vue";
import { ref } from "vue";
import Filters from "@/components/partials/Filters.vue";
export default {
  components: {
    Request,
    Clients,
    AboutUs,
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
