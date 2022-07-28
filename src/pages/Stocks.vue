<template>
  <q-page>
    <q-layout class="row justify-center">
      <Stock v-for="stock in stocks" :key="stock.id"></Stock>
    </q-layout>
  </q-page>
</template>

<script>
import Stock from '../components/stock/Stock.vue'

export default {
  components: {
    Stock,
  },
  data() {
    return {
      stocks: [
        { id:1, name: 'BMW', price: 150 },
        { id:2, name: 'Google', price: 200 },
        { id:3, name: 'Apple', price: 250 },
        { id:4, name: 'Twitter', price: 83 },
      ]
    }
  }
};
</script>

<style>

</style>
