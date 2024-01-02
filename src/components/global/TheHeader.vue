<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__wrap">
          <router-link to="/" class="logo">
            <logo />
          </router-link>
          <ul class="header__nav">
            <li
              v-for="(item, i) in menu"
              :key="i"
              :class="route.path == item.link ? 'active' : ''"
              @click="redirect(item.link)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="header__wrap">
          <div
            class="language"
            @mouseover="openDropdownLang"
            @mouseleave="closeDropdownLang"
          >
            <div class="language-wrap">
              <svg
                class="flag"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <g clip-path="url(#clip0_358_4405)">
                  <mask
                    id="mask0_358_4405"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="14"
                  >
                    <path
                      d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_358_4405)">
                    <path
                      d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                      fill="#0034A9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 9.33325H20V13.9999H0V9.33325Z"
                      fill="#D7280F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H20V4.66667H0V0Z"
                      fill="white"
                    />
                    <path
                      d="M18.0956 0.466553H1.90513C1.11616 0.466553 0.476562 1.09335 0.476562 1.86655V12.1332C0.476562 12.9064 1.11616 13.5332 1.90513 13.5332H18.0956C18.8846 13.5332 19.5242 12.9064 19.5242 12.1332V1.86655C19.5242 1.09335 18.8846 0.466553 18.0956 0.466553Z"
                      stroke="black"
                      stroke-opacity="0.1"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_358_4405">
                    <rect width="20" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Рус</span>
              <svg
                class="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#555555"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul class="language-list" v-show="isDropdownOpenLang">
              <li v-for="lang in availableLanguages" :key="lang">
                <span v-if="lang == 'Рус'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_358_10021)">
                      <mask
                        id="mask0_358_10021"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <path
                          d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_358_10021)">
                        <path
                          d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                          fill="#0034A9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 9.33331H20V14H0V9.33331Z"
                          fill="#D7280F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 0H20V4.66667H0V0Z"
                          fill="white"
                        />
                        <path
                          d="M18.0956 0.466675H1.90513C1.11616 0.466675 0.476562 1.09348 0.476562 1.86667V12.1333C0.476562 12.9065 1.11616 13.5333 1.90513 13.5333H18.0956C18.8846 13.5333 19.5242 12.9065 19.5242 12.1333V1.86667C19.5242 1.09348 18.8846 0.466675 18.0956 0.466675Z"
                          stroke="black"
                          stroke-opacity="0.1"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_358_10021">
                        <rect width="20" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span v-else-if="lang == 'En'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_358_10030)">
                      <mask
                        id="mask0_358_10030"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <path
                          d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_358_10030)">
                        <path
                          d="M18.0952 0H1.90476C0.852791 0 0 0.835735 0 1.86667V12.1333C0 13.1643 0.852791 14 1.90476 14H18.0952C19.1472 14 20 13.1643 20 12.1333V1.86667C20 0.835735 19.1472 0 18.0952 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 0H8.57143V6.53333H0V0Z"
                          fill="#444379"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.952148 0.93335V1.86668H1.90453V0.93335H0.952148ZM2.85691 0.93335V1.86668H3.80929V0.93335H2.85691ZM4.76167 0.93335V1.86668H5.71405V0.93335H4.76167ZM6.66643 0.93335V1.86668H7.61881V0.93335H6.66643ZM5.71405 1.86668V2.80002H6.66643V1.86668H5.71405ZM3.80929 1.86668V2.80002H4.76167V1.86668H3.80929ZM1.90453 1.86668V2.80002H2.85691V1.86668H1.90453ZM0.952148 2.80002V3.73335H1.90453V2.80002H0.952148ZM2.85691 2.80002V3.73335H3.80929V2.80002H2.85691ZM4.76167 2.80002V3.73335H5.71405V2.80002H4.76167ZM6.66643 2.80002V3.73335H7.61881V2.80002H6.66643ZM0.952148 4.66668V5.60002H1.90453V4.66668H0.952148ZM2.85691 4.66668V5.60002H3.80929V4.66668H2.85691ZM4.76167 4.66668V5.60002H5.71405V4.66668H4.76167ZM6.66643 4.66668V5.60002H7.61881V4.66668H6.66643ZM5.71405 3.73335V4.66668H6.66643V3.73335H5.71405ZM3.80929 3.73335V4.66668H4.76167V3.73335H3.80929ZM1.90453 3.73335V4.66668H2.85691V3.73335H1.90453Z"
                          fill="#A7B6E7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.57143 0V0.933333H20V0H8.57143ZM8.57143 1.86667V2.8H20V1.86667H8.57143ZM8.57143 3.73333V4.66667H20V3.73333H8.57143ZM8.57143 5.6V6.53333H20V5.6H8.57143ZM0 7.46667V8.4H20V7.46667H0ZM0 9.33333V10.2667H20V9.33333H0ZM0 11.2V12.1333H20V11.2H0ZM0 13.0667V14H20V13.0667H0Z"
                          fill="#ED4C49"
                        />
                        <path
                          d="M18.0956 0.466675H1.90513C1.11616 0.466675 0.476562 1.09348 0.476562 1.86667V12.1333C0.476562 12.9065 1.11616 13.5333 1.90513 13.5333H18.0956C18.8846 13.5333 19.5242 12.9065 19.5242 12.1333V1.86667C19.5242 1.09348 18.8846 0.466675 18.0956 0.466675Z"
                          stroke="black"
                          stroke-opacity="0.1"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_358_10030">
                        <rect width="20" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span v-else-if="lang == 'Tr'">
                  <img src="../../assets/images/tr.svg" alt="" />
                </span>
                {{ lang }}
              </li>
            </ul>
          </div>
          <button class="button-outline" @click="signIn = !signIn">
            Войти
          </button>
        </div>
      </div>
    </div>
  </header>
  <authorization v-if="signIn" @close="signIn = false" />
</template>

<script>
import { ref } from "vue";
import Logo from "./Logo.vue";
import { useRoute, useRouter } from "vue-router";
import Authorization from "../partials/Authorization.vue";

export default {
  components: { Logo, Authorization },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isDropdownOpenLang = ref(false);
    const availableLanguages = ["Рус", "En", "Tr"];

    const signIn = ref(false);

    const menu = ref([
      {
        name: "Каталог",
        link: "/",
      },
      // {
      //   name: "О Нас",
      //   link: "/about",
      // },
      {
        name: "Полезные статьи",
        link: "/articles",
      },
    ]);

    const redirect = (event) => {
      router.push({ path: event });
    };

    const openDropdownLang = () => {
      isDropdownOpenLang.value = true;
    };

    const closeDropdownLang = () => {
      isDropdownOpenLang.value = false;
    };

    return {
      menu,
      router,
      route,
      redirect,
      signIn,
      openDropdownLang,
      closeDropdownLang,
      availableLanguages,
      isDropdownOpenLang,
    };
  },
};
</script>

<style></style>
