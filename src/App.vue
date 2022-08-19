<template>
  <v-app>
    <h1>
      Тестовое задание для компании СВЦ ПОЛИС
    </h1>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({}),

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap');
$main_color:white;
$second_color:#F2B705;
body{
  padding: 2rem;
}
*{
  font-family: 'Montserrat', sans-serif;
  color: black;
}
.v-avatar{
  background-color:$second_color!important;
}
h1{
  text-align: center;
}
a {
  text-decoration: none;
}

</style>