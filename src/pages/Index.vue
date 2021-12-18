<template>
  <q-page class="row items-start justify-evenly">
    <q-card flat class="q-py-sm" :class="{ 'q-py-md q-ma-md': !mobile }"
      ><q-list dense>
        <ListItem
          v-for="item in items"
          :list-item="item"
          :key="item.id"
        /> </q-list
    ></q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch, computed, ref } from 'vue'
import ListItem from '../components/ListItem.vue'
import { Item } from '../components/models'
import { useQuasar } from 'quasar'

export default defineComponent({
  components: {
    ListItem
  },
  setup() {
    const $q = useQuasar()

    const items = ref<Item[]>([
      {
        id: 0
      }
    ])

    const totalEmpty = computed(() => {
      return items.value.filter((i) => !i.name).length
    })

    watch(totalEmpty, (total) => {
      if (!total) {
        items.value.push({
          id: items.value.length
        })
      }
    })

    // watch(
    //   items,
    //   (newItems) => {
    //     if (!newItems.filter((i) => !i.name).length)
    //       items.value.push({
    //         id: newItems.length
    //       })
    //   },
    //   { deep: true }
    // )

    return {
      items,
      mobile: computed(() => $q.screen.lt.sm)
    }
  }
})
</script>

<style lang="sass" scoped>
.q-card
  max-height: 100%
  max-width: 100%
  width: 600px
</style>
