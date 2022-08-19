<template>
  <v-main>
    ertyui
    <User_mainPosts :userId="$route.params.userId"></User_mainPosts>
{{$route.params.userId}}
  </v-main>
</template>

<script>
import User_mainPosts from "@/components/user_main-posts";
import axios from "axios";
export default {
  name: "User-main",
  components: {User_mainPosts},
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