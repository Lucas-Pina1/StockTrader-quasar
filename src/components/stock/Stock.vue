<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <q-card>
          <q-card-section class="bg-green-4 text-white">
            <div class="text-h5">
              <strong>NOME </strong><small>(Preço: PREÇO)</small>
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

          <q-separator />

          <q-card-actions align="right" class="bg-grey-1">
            <q-btn label="Comprar" type="submit" color="green-4"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
