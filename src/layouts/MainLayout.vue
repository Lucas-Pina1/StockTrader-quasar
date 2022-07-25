<template>
  <q-layout view="hhh Lpr fff">
    <q-header class="bg-green-1 fixed-top" elevated>
      <div class="q-pa-md">
        <q-toolbar>
          <q-btn flat to="/home">
            <span class="text-dark">Stock</span>
            <span class="text-weight-light text-green-7">Trader</span>
          </q-btn>

          <div class="row q-ml-sm">
            <q-btn flat class="text-dark" to="/home">Inicio</q-btn>
            <q-btn flat class="text-dark" to="/portfolio">portfólio</q-btn>
            <q-btn flat class="text-dark" to="/stocks">Ações</q-btn>
          </div>

          <q-space />

          <div class="row">
            <q-btn flat class="text-dark">Finalizar Dia</q-btn>
            <q-btn flat class="text-dark" label="Salvar & Carregar">
              <q-menu fit>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Salvar Dados</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Carregar Dados</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>
