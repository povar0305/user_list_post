<template>
  <v-content>
    <div v-for="(users, id) in this.Api " :key="id">
      <a href="#">
        <v-main class="d-flex mt-3 align-center">


          <v-avatar
              color="pink"
              rounded
              size="52"

          >
        <span class="white--text">
                  {{ users.name.substr(0, 2) }}

        </span>
          </v-avatar>
          <span class="ml-3">{{ users.name }}</span>
        </v-main>
      </a>
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