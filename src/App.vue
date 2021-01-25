<template>
  <div class="body">
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <q-toolbar class="bg-dark">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="ion-menu"
          />

          <q-toolbar-title> Syren </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
        class="bg-black"
      >
        <Drawer />
      </q-drawer>

      <q-page-container>
       

        <div class="headphones-bg q-py-lg q-mx-lg q-my-lg">
          <div class="q-px-lg q-pt-xl q-mb-md">
            <div class="text-h4">Learn.Explore.</div>
            <div class="text-h4">Find.</div>
            <div class="text-subtitle1">{{ todaysDate }}</div>
          </div>
        </div>

        <TopSongs />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import TopSongs from "./components/TopSongs.vue";
import Drawer from "./components/Drawer";
import { date } from "quasar";

export default {
  name: "LayoutDefault",

  components: {
    TopSongs,
    Drawer,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    },
  },
};
</script>

<style lang="scss">
.body {
  background: #000;
  color: #fff;
}
.bg-black {
  background: #000 !important;
}
.header-image {
  //height: 100%;
  z-index: -1;
  opacity: 0.99;
  filter: grayscale(100%);
}

* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.intro-text {
  h2 {
    font-weight: bold;
    font-size: 36px;
  }
}
.headphones-bg {
  background: url("https://cdn.pixabay.com/photo/2015/03/26/09/58/headphones-690685__340.jpg");
  border-radius: 25px;
  background-size: cover;
}
body > div.body > div > div.q-drawer-container.bg-black > aside > div {
  background: black;
  color: #fff !important;
}
</style>
