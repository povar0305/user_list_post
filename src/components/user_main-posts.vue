<template>
<v-main>
<!--
<div v-for="(posts,index) in posts">

{{posts}}
</div>-->
</v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "User_mainPosts",
  data: () => ({
    posts: [],

  }),

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.posts = response.data);
  }
}
</script>

<style scoped>

</style>

