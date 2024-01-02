<template>
  <router-link class="back" :to="$props.link">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#7D4DE1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    Назад
  </router-link>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style></style>
