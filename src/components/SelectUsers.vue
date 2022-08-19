<template>
<v-main><v-row>
  <v-col>
    Список пользователей
    <users_list>
    </users_list>
  </v-col>
</v-row></v-main>
</template>

<script>
import users_list from "@/components/users_list";
export default {
name: "SelectUsers",
  components:{
  users_list
  }
}
</script>

<style scoped>

</style>