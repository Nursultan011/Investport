<template>
  <section class="profile">
    <div class="container">
      <div class="profile__inner">
        <p class="title">Профиль</p>
        <div class="profile__wrap">
          <div class="profile__info">
            <p>Мои данные</p>
            <div class="profile__img">
              <img src="../../assets/images/client-1.png" alt="" />
            </div>
            <ul>
              <li>
                <label> ФИО </label>
                <span> Айгерим Сакенова </span>
              </li>
              <li>
                <label> Email </label>
                <span> sakenova.aigerim@gmail.com </span>
              </li>
            </ul>
            <button class="button-outline">Изменить пароль</button>
          </div>
          <div class="profile__content">
            <div class="profile__favourite">
              <p class="title">Избранные квартиры</p>
              <div class="profile__favourite-cards">
                <card :data="item" v-for="(item, i) in favourite" :key="i" />
              </div>
            </div>
            <apartments />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Apartments from "@/components/partials/Profile/Apartments.vue";
import Card from "@/components/partials/Card.vue";
import { ref } from "vue";
export default {
  components: {
    Apartments,
    Card,
  },
  setup() {
    const favourite = ref([
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
    ]);

    return {
      favourite,
    };
  },
};
</script>

<style></style>
