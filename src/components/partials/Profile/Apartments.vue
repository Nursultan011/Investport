<template>
  <div class="apartments">
    <div class="apartments__header">
      <p class="title">Мои квартиры</p>
      <button class="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="#FEFEFE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Добавить объекты
      </button>
    </div>
    <div class="apartments__table">
      <table>
        <thead>
          <th>ID</th>
          <th>Название</th>
          <th>Город</th>
          <th>Плошадь</th>
          <th>Год</th>
          <th>Тип объекта</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(item, i) in apartments" :key="i">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.space }}</td>
            <td>{{ item.year }}</td>
            <td>{{ item.type }}</td>
            <td>
              <div class="details">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z"
                    fill="#7D4DE1"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const apartments = ref([
      {
        id: "10234",
        title: "Апартамент в Аланье с 1+1 комфортом",
        city: "Аланья",
        space: "120",
        year: "2022",
        type: "Квартира",
      },
      {
        id: "10234",
        title: "Апартамент в Аланье с 1+1 комфортом",
        city: "Аланья",
        space: "120",
        year: "2022",
        type: "Квартира",
      },
      {
        id: "10234",
        title: "Апартамент в Аланье с 1+1 комфортом",
        city: "Аланья",
        space: "120",
        year: "2022",
        type: "Квартира",
      },
      {
        id: "10234",
        title: "Апартамент в Аланье с 1+1 комфортом",
        city: "Аланья",
        space: "120",
        year: "2022",
        type: "Квартира",
      },
      {
        id: "10234",
        title: "Апартамент в Аланье с 1+1 комфортом",
        city: "Аланья",
        space: "120",
        year: "2022",
        type: "Квартира",
      },
    ]);

    return {
      apartments,
    };
  },
};
</script>

<style></style>
