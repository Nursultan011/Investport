<template>
  <section class="request">
    <div class="container">
      <div class="request__inner">
        <p class="title">
          Не смогли подобрать недвижимость? Расскажите, что вы ищите. Мы готовы
          помочь!
        </p>
        <form action="">
          <div class="text-field">
            <label for=""> Ваше имя </label>
            <input type="text" required placeholder="Введите свое имя" />
          </div>
          <div class="text-field">
            <label for=""> Email </label>
            <input type="text" required placeholder="example@example.com" />
          </div>
          <div class="text-field">
            <label for=""> Номер телефона </label>
            <input type="text" required placeholder="+7 700 000 00 00" />
          </div>
          <button class="button" type="submit">Отправить</button>
          <div class="checkbox">
            <input type="checkbox" required />
            <span> Согласен (-на) делиться персональными данными </span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
