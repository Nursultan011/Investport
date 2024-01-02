<template>
  <section class="apartment">
    <div class="container">
      <div class="apartment__inner">
        <div class="apartment__header">
          <back-btn link="/search" />
          <p class="title">Апартамент в Аланье с 1+1 комфортом</p>
          <div class="flex">
            <span> Аланья, Каргыджак </span>
            <span>
              <b>ID объекта</b>
              <span>12466</span>
            </span>
          </div>
        </div>
        <div class="apartment__wrap">
          <div class="apartment__left">
            <div class="apartment__images" v-if="apartment && apartment.images">
              <img
                v-if="currentImg"
                :src="require(`@/assets/images/${currentImg}`)"
                alt=""
              />
              <div class="apartment__images-list">
                <img
                  v-for="(img, i) in apartment.images"
                  :src="require(`@/assets/images/${img}`)"
                  alt=""
                  :key="i"
                  @click="selectedImg(img)"
                />
              </div>
            </div>
            <div
              class="apartment__details"
              v-if="apartment && apartment.details"
            >
              <h4>Детали</h4>
              <ul>
                <li v-for="(item, i) in apartment.details" :key="i">
                  <label v-if="item.name">{{ item.name }}</label>
                  <span v-if="item.value">{{ item.value }}</span>
                </li>
              </ul>
            </div>
            <div
              class="apartment__details"
              v-if="apartment && apartment.distances"
            >
              <h4>Расстояния</h4>
              <ul>
                <li v-for="(item, i) in apartment.distances" :key="i">
                  <label v-if="item.name">{{ item.name }}</label>
                  <span v-if="item.value">{{ item.value }}</span>
                </li>
              </ul>
            </div>
            <div
              class="apartment__details"
              v-if="apartment && apartment.infastructure"
            >
              <h4>Инфраструктура</h4>
              <ul>
                <li v-for="(item, i) in apartment.infastructure" :key="i">
                  <div class="flex">
                    <img
                      v-if="item.icon"
                      :src="require(`@/assets/images/${item.icon}`)"
                      alt=""
                    />
                    <span>{{ item.value }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="apartment__details">
              <p>Карта</p>
              <iframe
                class="maps"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=almaty&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              >
              </iframe>
            </div>
          </div>
          <div class="apartment__right">
            <div class="apartment__details">
              <div class="up">
                <p class="price">$ 250 000</p>
                <p class="rent"><b>$ 600</b> / месяц</p>
              </div>
              <p>
                Недвижимость в Каргыджак оптимально подходит и для отдыха, и для
                постоянного проживания в Аланье, особенно для семей с детьми.
                Ведь район находится всего в 2 км от центра города и располагает
                самой разнообразной инфраструктурой.
              </p>
            </div>
            <div class="apartment__sticky apartment__details">
              <h4>Оставьте заявку</h4>
              <p class="description">
                Чтобы получить обратную связь, оставьте свои данные.
              </p>
              <form action="" class="form">
                <div class="text-field">
                  <label for=""> Ваше имя </label>
                  <input type="text" required placeholder="Введите свое имя" />
                </div>
                <div class="text-field">
                  <label for=""> Email </label>
                  <input
                    type="text"
                    required
                    placeholder="example@example.com"
                  />
                </div>
                <div class="text-field">
                  <label for=""> Номер телефона </label>
                  <input
                    type="text"
                    required
                    placeholder="+7 (700) 000-00-00"
                  />
                </div>
                <div class="text-field">
                  <label for=""> Цель заявки </label>
                  <div class="radio">
                    <span> Онлайн тур </span>
                    <span> Бесплатный тур </span>
                    <span> Обсудить скидку </span>
                  </div>
                </div>
                <div class="checkbox">
                  <input type="checkbox" required />
                  <span> Согласен (-на) делиться персональными данными </span>
                </div>
                <button class="button">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <similar-slides />
  <request />
</template>

<script>
import BackBtn from "@/components/global/BackBtn.vue";
import Request from "@/components/partials/Main/Request.vue";
import { computed, onMounted, ref } from "vue";
import SimilarSlides from "@/components/partials/SimilarCardSlides.vue";

export default {
  components: {
    Request,
    BackBtn,
    SimilarSlides,
  },
  setup() {
    const currentImg = ref("");

    const apartment = ref({
      images: [
        "card-1.jpg",
        "card-2.jpg",
        "card-3.jpg",
        "card-4.png",
        "card-5.png",
        "card-6.png",
        "card-7.png",
      ],
      details: [
        {
          name: "Площадь, м2",
          value: "140",
        },
        {
          name: "Комнатность ",
          value: "1 + 1",
        },
        {
          name: "Этаж",
          value: "2",
        },
        {
          name: "Тип объекта",
          value: "Квартира",
        },
        {
          name: "Тип обогрева ",
          value: "Природный газ",
        },
        {
          name: "Мебелирована",
          value: "полностью",
        },
        {
          name: "Дата постройки",
          value: "2022",
        },
        {
          name: "Тип владельца",
          value: "Owner",
        },
        {
          name: "Тип объекта?",
          value: "Вилла",
        },
      ],
      distances: [
        {
          name: "До магазина",
          value: "2 500 м",
        },
        {
          name: "До школы",
          value: "1 200 м",
        },
        {
          name: "До аэропорта",
          value: "1 500 м",
        },
        {
          name: "До побережья",
          value: "1 400 м",
        },
        {
          name: "До больницы",
          value: "1 300 м",
        },
        {
          name: "До аптеки",
          value: "1 100 м",
        },
      ],
      infastructure: [
        {
          icon: "inf-1.svg",
          value: "Вайфай",
        },
        {
          icon: "inf-2.svg",
          value: "Крытая парковка",
        },
        {
          icon: "inf-3.svg",
          value: "Сад",
        },
        {
          icon: "inf-4.svg",
          value: "Охрана",
        },
        {
          icon: "inf-5.svg",
          value: "24/7 видеонаблюдение",
        },
        {
          icon: "inf-6.svg",
          value: "Консьерж",
        },
        {
          icon: "inf-7.svg",
          value: "Лифт",
        },
        {
          icon: "inf-8.svg",
          value: "Детский бассен",
        },
        {
          icon: "inf-9.svg",
          value: "Открытый бассейн",
        },
        {
          icon: "inf-10.svg",
          value: "Автономный электрогенератор",
        },
        {
          icon: "inf-11.svg",
          value: "Спутниковое  ТВ",
        },
      ],
    });

    onMounted(() => {
      if (apartment.value.images && apartment.value.images[0]) {
        currentImg.value = apartment.value.images[0];
      }
    });

    const selectedImg = (img) => {
      currentImg.value = img;
    };

    return {
      apartment,
      currentImg,
      selectedImg,
    };
  },
};
</script>
