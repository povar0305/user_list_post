<template>
<v-content>
post

</v-content>
</template>

<script>
import axios from "axios";

export default {
  name: "User_mainPosts",
  data: () => ({
    posts: [],
/*
    this_posts:posts.filter(el => el.userId == $route.params.users.id)
*/
  }),

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.posts = response.data);
  }
}
</script>

<style scoped>

</style>

