<template>
  <q-layout view="lHh Lpr lFf" container style="height: 400px">
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
