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
  padding-left: 2rem;
  padding-right: 2rem;
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
h1{
  text-align: center;
  padding-bottom: 3rem;
}
a {
  text-decoration: none;
}
.users_list{
  & > div{
    display: flex!important;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__item{
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    @media(max-width: 768px){
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      span.ml-3{
        margin-left: 6px!important;
      }
      &-row>div{
        display: flex;
        align-items: center;
        justify-content: start;
      }
    }
  }


}
</style>