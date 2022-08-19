<template>
  <v-app>
    <h3 class="title">
      Тестовое задание для компании СВЦ ПОЛИС
    </h3>
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
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  display: flex;
}
.v-application--wrap{
  min-height: 100%  ;
}
*{
  font-family: 'Montserrat', sans-serif;
  color: black;
}
.v-avatar{
  background-color:$second_color!important;
}
.title{
  text-align: center;
  padding-bottom: 3rem;}
a {
  text-decoration: none;
}
.w-100{
  width: 100% !important;

}
</style>