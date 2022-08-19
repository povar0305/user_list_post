<template>
  <v-main>
    <v-row>
      <v-col class="text-center my-3">
        <h3 class="my-2">        Список пользователей
        </h3>
        <users_list class="users_list">
        </users_list>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import users_list from "@/components/users_list";

export default {
  name: "SelectUsers",
  components: {
    users_list
  }
}
</script>

<style scoped>

</style>