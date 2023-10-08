<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="logo"><RouterLink to="/">Жилфонд</RouterLink></h1>
      <div class="">Пользователь</div>
    </div>
  </header>

  <div class="app__container container">
    <div class="app">
      <TheSidebar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding-top: 46px;
  padding-bottom: 30px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
}
.logo {
  color: #e31f24;
  font-size: 32px;
  font-weight: 700;
}

.app {
  display: flex;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &__container {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 58px;
  }
}
</style>
