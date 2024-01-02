<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__wrap">
          <div class="footer__company">
            <logo />
            <p>Инвестируйте в недвижимость вашей мечты вместе с нами</p>
          </div>
          <div class="footer__details">
            <div>
              <h3>Наши контакты</h3>
              <ul>
                <li>+90 534 111 11 11</li>
                <li>info@investestate.com</li>
              </ul>
            </div>
            <div>
              <h3>Мы в соцсетях</h3>
              <ul>
                <li>
                  <router-link to="/">
                    <img src="../../assets/images/instagram.svg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="../../assets/images/whatsapp.svg" alt="" />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="safety">© 2023 “ComponyName”. Все права защищены.</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style Logo></style>
