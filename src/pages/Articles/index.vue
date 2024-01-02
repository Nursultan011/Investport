<template>
  <section class="articles">
    <div class="container">
      <div class="articles__inner">
        <h1 class="title">Полезные статьи</h1>
        <div class="articles__cards">
          <div
            class="articles__card"
            @click="redirect(item.id)"
            v-for="(item, i) in articles"
            :key="i"
          >
            <div class="articles__card-img">
              <img
                v-if="item.img"
                :src="require(`../../assets/images/${item.img}`)"
                alt=""
              />
            </div>
            <h3 v-if="item.title">{{ item.title }}</h3>
            <p v-if="item.description">{{ item.description }}</p>
            <router-link :to="'/articles/' + item.id">
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12L20 12M20 12L14 6M20 12L14 18"
                  stroke="#7D4DE1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
        <bread-crumb />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import BreadCrumb from "@/components/global/BreadCrumb.vue";
import { useRouter } from "vue-router";
export default {
  components: { BreadCrumb },
  setup() {
    const router = useRouter();
    const articles = ref([
      {
        id: 1,
        img: "articles-1.jpg",
        title: "Самые горячие рынки жилья в Турции",
        description:
          "По сравнению с 2021 годом, в 2022 году продажи недвижимости в Турции вырастут на 21,7%. По сравнению с европейскими",
      },
      {
        id: 2,
        img: "articles-2.jpg",
        title: "ВНЖ в Турции за покупку недвижимоcти",
        description:
          "По сравнению с 2021 годом, в 2022 году продажи недвижимости в Турции вырастут на 21,7%. По сравнению с европейскими",
      },
      {
        id: 3,
        img: "articles-3.jpg",
        title: "Традиции, культура и обычаи Турции",
        description:
          "Турция — такая, какую мы знаем её сегодня — образовалась сравнительно недавно. В разные времена она находилась под власть",
      },
      {
        id: 4,
        img: "articles-4.jpg",
        title: "Как оформить доверенность в Турции",
        description:
          "Покупка турецкой недвижимости — надежный способ сохранить и приумножить свои финансовые активы. Именно поэтому ежегод",
      },
      {
        id: 5,
        img: "articles-5.jpg",
        title: "Как получить ИНН в Турции",
        description:
          "Одно из самых первых действий, которое понадобится совершить иностранному гражданину при переезде в Турцию - получ",
      },
      {
        id: 6,
        img: "articles-6.jpg",
        title: "Гражданство Турции",
        description:
          "По сравнению с 2021 годом, в 2022 году продажи недвижимости в Турции вырастут на 21,7%. По сравнению с европейскими",
      },
      {
        id: 7,
        img: "articles-7.jpg",
        title: "Лучшие рестораны в Стамбуле",
        description:
          "По сравнению с 2021 годом, в 2022 году продажи недвижимости в Турции вырастут на 21,7%. По сравнению с европейскими ...",
      },
      {
        id: 8,
        img: "articles-8.jpg",
        title: "Необычный экстерьер Стамбула",
        description:
          "Турция — такая, какую мы знаем её сегодня — образовалась сравнительно недавно. В разные времена она находилась под власть...",
      },
      {
        id: 9,
        img: "articles-9.png",
        title: "Как арендовать авто в Турции?",
        description:
          "Покупка турецкой недвижимости — надежный способ сохранить и приумножить свои финансовые активы. Именно поэтому ежегод...",
      },
    ]);

    const redirect = (id) => {
      router.push({ path: "/articles/" + id });
    };

    return {
      router,
      articles,
      redirect,
    };
  },
};
</script>

<style></style>
