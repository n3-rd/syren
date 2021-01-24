<template>
<div class="body">
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="ion-menu"
        />

        <q-toolbar-title>
          Syren App
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
      <div class="text-h4">Learn.Explore.</div>
       <div class="text-h4">Find.</div>
      <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
      src="https://cdn.pixabay.com/photo/2015/03/26/09/58/headphones-690685__340.jpg " width="100%" height="100%"
      class="header-image absolute-top" />
       
    </q-header>

  <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
      <Drawer/>
      </q-drawer>

    <q-page-container>
<div class="intro-text q-pl-md lt-sm">
<h2> Explore. Find. <br> Learn.</h2>
</div>

      <TopSongs />
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import TopSongs from './components/TopSongs.vue'
import Drawer from './components/Drawer'
import { date } from 'quasar'

export default {
  name: 'LayoutDefault',

  components: {
    TopSongs,
    Drawer
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>

<style lang="scss">
.body{
  background: #000;
  color: #fff;
}

.header-image{
  //height: 100%;
  z-index: -1;
  opacity: 0.99;
  filter: grayscale(100%);
}

* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.intro-text{
  h2{
  font-weight: bold;
  font-size: 36px;
  }

}
</style>
