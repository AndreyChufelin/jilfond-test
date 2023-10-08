<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import VueSpinner from '../components/VueSpinner.vue'

const route = useRoute()

const loading = ref(false)
const store = useStore()
const user = computed(() => store.state.users.user)

watchEffect(async () => {
  loading.value = true
  await store.dispatch('getUser', route.params.id)
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="page loading">
    <VueSpinner />
  </div>
  <div v-else class="user page">
    <div class="user__left"><img class="user__image" src="../assets/img.png" alt="" /></div>
    <div class="user__info">
      <div class="user__contacts">
        <h2 class="title">{{ user.name }}</h2>
        <div class="user__contacts-item"><strong>email:</strong> {{ user.email }}</div>
        <div class="user__contacts-item"><strong>phone:</strong> {{ user.phone }}</div>
      </div>
      <div class="user__about">
        <h2 class="title">О себе</h2>
        <p class="user__about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user {
  display: flex;
  column-gap: 6.4%;

  @media (max-width: 1000px) {
    display: block;
  }

  &__left {
    flex: 1;
  }
  &__image {
    width: 100%;
  }

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 20px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  &__contacts-item {
    color: #76787d;

    & strong {
      color: #333;
      font-weight: 600;
    }
  }

  &__about {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
  &__about-text {
    color: #76787d;
  }
}
</style>
