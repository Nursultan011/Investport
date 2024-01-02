<template>
  <section class="authorization" @click.self="close">
    <div class="authorization__modal" v-if="step === 1">
      <div class="close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L19 19"
            stroke="#979797"
            stroke-width="2.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="title">Вход</p>
      <form action="">
        <div class="text-field">
          <label for="email"> Email </label>
          <input type="email" required placeholder="example@example.com" />
        </div>
        <div class="text-field">
          <label for="email"> Пароль </label>
          <input type="password" required placeholder="Введите пароль" />
        </div>
        <div class="forgot" @click="step = 3">Забыли пароль?</div>
        <button class="button" type="submit">Войти</button>
      </form>
      <div class="variant">
        Нет аккаунта?
        <span @click="step = 2"> Зарегистрироваться </span>
      </div>
    </div>
    <div class="authorization__modal" v-if="step === 2">
      <div class="close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L19 19"
            stroke="#979797"
            stroke-width="2.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="title">Регистрация</p>
      <form action="">
        <div class="text-field">
          <label for="email"> Выберите роль </label>
          <div class="radio">
            <span
              @click="selectRole(item)"
              v-for="(item, i) in roles"
              :key="i"
              :class="registrantionForm.type == item.type ? 'active' : ''"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
        <div class="text-field">
          <label for="email"> ФИО </label>
          <input type="text" required placeholder="ФИО" />
        </div>
        <div class="text-field">
          <label for="email"> Email </label>
          <input type="email" required placeholder="example@example.com" />
        </div>
        <div class="text-field">
          <label for="email"> Установите пароль </label>
          <input type="password" required placeholder="Введите пароль" />
        </div>
        <div class="text-field">
          <label for="email">Повторите пароль </label>
          <input type="password" required placeholder="Повторите пароль" />
        </div>
        <button class="button" type="submit">Зарегистрироваться</button>
      </form>
      <div class="variant">
        Есть аккаунт?
        <span @click="step = 1"> Войти </span>
      </div>
    </div>
    <div class="authorization__modal" v-if="step === 3">
      <div class="close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L19 19"
            stroke="#979797"
            stroke-width="2.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="title">Забыли пароль?</p>
      <p class="description">
        Мы отправим на Вашу почту ссылку для восстановления пароля. Введите свою
        почту.
      </p>
      <form action="">
        <div class="text-field">
          <label for="email"> Email </label>
          <input type="email" required placeholder="example@example.com" />
        </div>
        <button class="button" type="submit">Отправить</button>
      </form>
    </div>
    <div class="authorization__modal" v-if="step === 4">
      <div class="close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L19 19"
            stroke="#979797"
            stroke-width="2.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="title">Забыли пароль?</p>
      <p class="description">
        На Вашу почту отправили ссылку для восстановления пароля. Проверьте
        почту, перейдите по ссылке и восстановите свой пароль.
      </p>
      <form action="">
        <button class="button" type="submit">Отправить</button>
      </form>
    </div>
    <div class="authorization__modal" v-if="step === 5">
      <div class="close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5L5 19M5 5L19 19"
            stroke="#979797"
            stroke-width="2.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="title">Забыли пароль?</p>
      <form action="">
        <div class="text-field">
          <label for="email"> Установите пароль </label>
          <input type="password" required placeholder="Введите пароль" />
        </div>
        <div class="text-field">
          <label for="email">Повторите пароль </label>
          <input type="password" required placeholder="Повторите пароль" />
        </div>
        <button class="button" type="submit">Cохранить</button>
      </form>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const step = ref(1);

    const roles = ref([
      {
        title: "Покупатель",
        type: 1,
      },
      {
        title: "Риэлтор",
        type: 2,
      },
    ]);

    const registrantionForm = ref({
      type: 0,
      fio: "",
      email: "",
      password: "",
      password_repeat: "",
    });

    const close = () => {
      emit("close");
      step.value = 1;
    };

    const selectRole = (event) => {
      if (event) {
        registrantionForm.value.type = event.type;
      }
    };

    return { step, roles, close, selectRole, registrantionForm };
  },
});
</script>

<style></style>
