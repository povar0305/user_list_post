<template>
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

</template>

<script>
import Users_list from "@/components/users_list.vue";

export default {
  components: {Users_list},

  name: "SelectUsers"
}
</script>

<style scoped>

</style>