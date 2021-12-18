<template>
  <q-item dense>
    <q-item-section avatar>
      <q-checkbox v-model="item.checked" />
    </q-item-section>
    <q-item-section><q-input v-model="item.name" dense /></q-item-section>
    <q-item-section side>
      <q-item-label caption>{{ item.price }} €</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Item } from './models'
import { useProp } from '../hooks/useProp'

export default defineComponent({
  props: {
    listItem: {
      type: Object as PropType<Item>,
      required: true
    }
  },
  setup(props) {
    return { item: useProp<Item>(props, 'listItem') }
  }
})
</script>
