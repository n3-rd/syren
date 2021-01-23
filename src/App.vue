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
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="65px" class="q-mb-sm">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ0cFlRm0lEGOZVg9fHiTAMYmir2mQwatKQ&usqp=CAU">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
<div class="intro-text q-pl-md mobile-only">
<h2> Explore. Find. <br> Learn.</h2>
</div>

      <TopSongs />
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import TopSongs from './components/TopSongs.vue'
import { date } from 'quasar'

export default {
  name: 'LayoutDefault',

  components: {
    TopSongs
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
