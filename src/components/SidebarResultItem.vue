<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  username: String,
  email: String,
  id: Number
})
</script>

<template>
  <RouterLink class="item" :to="{name:'user',params: {id: id}}">
    <img class="image" src="../assets/img.png" alt="" />
    <div class="body">
      <div class="name">{{ username }}</div>
      <div class="email" :title="email">{{ email }}</div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.item {
  width: 100%;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.image {
  border-radius: 10px 0 0 10px;
  width: 70px;
  height: 70px;
  border-right: 1px solid #e0e0e0;
  object-fit: cover;
}
.body {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
  padding: 15px;
  border-radius: 0 10px 10px 0;
}
.name {
  color: #333;
  font-weight: 600;
}
.email {
  color: #76787d;
  overflow: hidden;
  text-overflow: ellipsis;
}
.router-link-active .body {
  background-color: #E0E0E0;
}
</style>
