<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

const emits = defineEmits(['isLoading', 'state'])

const store = useStore()

let timeout = null

const state = ref({ loading: false, error: null })
const query = ref()
const queries = computed(() => {
  return query.value.split(',').map(q=>q.trim())
})

async function search() {
  clearTimeout(timeout)

  timeout = setTimeout(async () => {
    state.value.loading = true

    try {
      if (query.value) {
        await store.dispatch('searchUsers', queries.value)
      } else {
        store.dispatch('getUsers')
      }
    } catch {
      state.value.error = 'Непредвиденная ошибка'
    }

    state.value.loading = false
  }, 500)
}

watchEffect(() => {
  emits('state', state)
})
</script>

<template>
  <input v-model="query" @input="search" class="input" type="text" placeholder="Поиск" />
</template>

<style scoped lang="scss">
.input {
  padding: 16px 24px;
  font-weight: 400;
  color: #76787d;
  border-radius: 8px;
  border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
}
</style>
