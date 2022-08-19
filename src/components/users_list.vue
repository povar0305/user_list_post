<template class="d-flex ">
  <v-content >
    <div v-for="(users, id) in this.Api " :key="id" class="users_list__item">
      <router-link :to="{name:'user_main',params:{users:users}}">
        <v-main class="d-flex mt-3 align-center users_list__item-row"  >
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
  </v-content>
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

<style scoped>

</style>