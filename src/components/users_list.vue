<template class="d-flex ">
  <v-main>
    <div v-for="(users, id) in this.Api " :key="id" class="users_list__item">
      <router-link :to="'/user/' + id">
        <!--
              <router-link :to="'/user/'+id">
        -->
        <v-main class="d-flex mt-3 align-center users_list__item-row">
          <v-avatar
              rounded
              size="52"

          >
        <span class="white--text">
                  {{ users.name.substr(0, 2) }}
        </span>
          </v-avatar>
          <span class="ml-3">{{ users.name }}</span>
        </v-main>
      </router-link>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "users_list",
  data: () => ({
    Api: []
  }),

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.Api = response.data)
  }
}
</script>

<style  lang="scss">

.users_list {
  & > div {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    @media(max-width: 768px) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      span.ml-3 {
        margin-left: 6px !important;
      }
      &-row > div {
        display: flex;
        align-items: center;
        justify-content: start;
      }
    }
  }


}
</style>