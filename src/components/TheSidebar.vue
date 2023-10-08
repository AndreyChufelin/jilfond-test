<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import VueSpinner from './VueSpinner.vue'
import SidebarSearch from './SidebarSearch.vue'
import SidebarResultItem from './SidebarResultItem.vue'

const store = useStore()
const users = computed(() => store.state.users.users)

store.dispatch('getUsers')

const state = ref({})
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__search">
      <h3 class="title">Поиск сотрудников</h3>
      <SidebarSearch @state="state = $event" />
    </div>
    <div class="sidebar__results">
      <h3 class="title">Результаты</h3>
      <template v-if="state.loading"> <VueSpinner /></template>
      <template v-else-if="state.error">{{ state.error }}</template>
      <template v-else-if="users.length === 0">Ничего не найдено</template>

      <template v-else>
        <SidebarResultItem
          v-for="user in users"
          :key="user.id"
          :username="user.username"
          :email="user.email"
          :id="user.id"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 290px;
  width: 100%;
  padding: 30px 20px;

  &__search {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__results {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 10px;
    margin: -10px;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
