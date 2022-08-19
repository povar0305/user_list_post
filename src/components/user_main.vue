<template>
  <v-main class="user">
    <v-row v-for="(users, id) in this.Api " :key="id" class="w-100">
      <v-row v-if="id==$route.params.userId">

        <v-card
            class=" user_card"
            outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline ">
                {{ users.company.name }}
              </div>
              <div class="text-overline mb-4">
                {{ users.username }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ users.name }}
              </v-list-item-title>
              <v-list-item-subtitle v-for="(itemAddress, id) in users.address " :key="id">
                <span v-if="typeof(itemAddress)=='string'">
                  {{ itemAddress }}
                </span></v-list-item-subtitle>
            </v-list-item-content>

            <v-avatar
                rounded
                size="52"

            >
        <span class="white--text">
                  {{ users.name.substr(0, 2) }}
        </span>
            </v-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
                outlined
                rounded
                text
                :href="'mailto:'+users.email">Почта
            </v-btn>
            <v-btn
                outlined
                rounded
                text
                :href="'tel:'+users.phone">Телефон
            </v-btn>
            <v-btn
                outlined
                rounded
                text
                :href="'https://'+users.website">Сайт
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>

    </v-row>

    <User_mainPosts></User_mainPosts>

  </v-main>
</template>

<script>
import User_mainPosts from "@/components/user_main-posts";
import axios from "axios";

export default {
  name: "User-main",
  components: {User_mainPosts},
  data: () => ({
    Api: []
  }),

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.Api = response.data)
  }
}
</script>

<style scoped lang="scss">
.v-card__actions {
  justify-content: center;
}

.user {
  padding: 3rem;

  & .row {
    margin: 0 !important;
  }

  &_card {
    max-width: 500px !important;
    width: 50%;
    @media(max-width: 768px) {
      max-width: 100% !important;
      width: 100%;
    }
  }
}
</style>