<template>
  <v-content class="d-flex ">
    <div v-for="(users, id) in this.Api " :key="id" class="w-100">
        <v-main class="d-flex mt-3 align-center"  >
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