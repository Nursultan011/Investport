<template>
  <div class="filters">
    <div class="filters__wrap">
      <div class="text-field">
        <label for="">Город</label>
        <select name="" id="">
          <option value="">Выберите город</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Район</label>
        <select name="" id="">
          <option value="">Выберите район</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Цена</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field">
        <label for="">Количество комнат</label>
        <div class="toggles">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6+</span>
        </div>
      </div>
    </div>
    <div class="filters__advanced" v-if="advancedSearch">
      <div class="text-field">
        <label for="">Тип объекта</label>
        <select name="" id="">
          <option value="">Выберите тип</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Дата постройки</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field">
        <label for="">Этаж</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field">
        <label for="">Площадь, м²</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field">
        <label for="">Расстояние до моря, км</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field">
        <label for="">Расстояние до аэропорта, км</label>
        <div class="two">
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>
      </div>
      <div class="text-field text-field-4">
        <label for=""> Статус проекта </label>
        <div class="toggles status">
          <span>Завершенные</span>
          <span>Новостройка</span>
          <span>Вновь построенные</span>
          <span>Вторичная недвижимость</span>
        </div>
      </div>
    </div>
    <div class="filters__actions">
      <span class="showAll" @click="advancedSearch = !advancedSearch">
        Расширенный поиск
        <svg
          :class="advancedSearch == true ? 'active' : ''"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#262626"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <router-link to="/search" class="button">Показать результаты</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const advancedSearch = ref(false);

    return {
      advancedSearch,
    };
  },
};
</script>

<style></style>
