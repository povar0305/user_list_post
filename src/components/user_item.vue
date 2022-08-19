<template>
    <v-main>
      {{users}}
    </v-main>


<!--  <a href="#">
    <v-main class="d-flex mt-3 align-center">
      <v-avatar
          rounded
          size="52"

      >
        <span class="white&#45;&#45;text">
                  {{ users.name.substr(0, 2) }}

        </span>
      </v-avatar>
      <span class="ml-3">{{ users.name }}</span>
    </v-main>
  </a>-->

</template>

<script>
export default {
  name: "user_item",
  props: {
    users:Array,
  },
}
</script>

<style scoped>

</style>