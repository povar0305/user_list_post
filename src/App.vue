<template>
  <v-app>
    <v-container>
      <h1>
        Тестовое задание для компании СВЦ ПОЛИС
      </h1>
      <v-row>
        <v-col>
          Список пользователей
          <Users_list>

          </Users_list>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>

import Users_list from "@/components/users_list.vue";
export default {
  name: 'App',
  components: {Users_list},
  data: () => ({
     }),

};
</script>
<style lang="scss">
a{
  text-decoration: none;
}

</style>