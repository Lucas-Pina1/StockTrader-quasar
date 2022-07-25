<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-green-4 text-white">
      <q-card-section class="col-auto">
        <div class="text-h4">
          <strong>NOME </strong><small>(Preço: PREÇO)</small>
        </div>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section class="col-auto">
        <q-input
          type="number"
          filled
          style="max-width: 200px"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
