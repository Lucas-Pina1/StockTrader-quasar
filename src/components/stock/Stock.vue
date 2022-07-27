<template>
  <div class="q-pa-md">
    <div class="row">
        <q-card class="col-xs-12 col-sm-6 col-md-4 my-card bg-green-4 text-white">
          <q-card-section>
            <div class="text-h5 row">
              <div class="col"><strong>NOME </strong></div>
              <div class="col"><small>(Preço: PREÇO)</small></div>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input
              dense
              class="bg-grey-1"
              type="number"
              min="0"
              filled
              style="max-width: 200px"
              placeholder="0"
            />
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right" class="bg-grey-1">
            <q-btn label="Comprar" type="submit" color="green-4"></q-btn>
          </q-card-actions>
        </q-card>

    </div>
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
