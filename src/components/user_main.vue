<template>
<v-main>
  {{$route.params.users.email}}
  {{$route.params.users.name}}

</v-main>
</template>

<script>
export default {
  name: "User-main",
  data(){
    //
  }
}
</script>

<style scoped>

</style>