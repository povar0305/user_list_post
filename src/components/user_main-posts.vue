<template>
<v-main class="main">

<div  class="post flex-wrap" v-for="(post,index) in posts" :key='index'>
<div class="post_inner" v-if="post.userId==(Number($route.params.userId)+1)">
  <h3>  {{post.title }}</h3>
  <p>

    {{post.body }}
  </p>

</div>

</div>
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

<style lang="scss">
$second_color:#F2B705;
.post{
  display: flex;width: calc(50% - 1rem);
  justify-content: center;
  &_inner{

    margin-bottom: 1rem;
    border:1px solid  $second_color;
    border-radius: 4px;
    padding: 12px 16px;
    & p{
      text-align: justify;
    }
    & h3{
      margin-bottom: 10px;
    }
    &:hover{
      background-color: $second_color;
      color: white;
    }
  }

}
.v-main__wrap{
  display: flex;flex-wrap: wrap;justify-content: space-between;
}
</style>

