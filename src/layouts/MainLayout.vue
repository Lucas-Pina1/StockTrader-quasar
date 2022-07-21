<template>
  <q-layout view="hhh Lpr fff">
    <QHeader/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import QHeader from "../components/header/Header.vue";

export default {
  components: {
    QHeader,
  },
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>
