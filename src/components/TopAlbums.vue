<template>
  <div>


    <!--mobile top albums -->
    <h5 class="q-my-sm q-pl-md q-mt-xl">Top Albums</h5>

    <q-list class="lt-md">
      <q-item v-for="album in topAlbumsData" :key="album.title">

        <q-popup-proxy>
          
  <div class="lt-md">
      <q-card class="bg-dark text-white" style="width: 80vw">
        <q-bar>
          <div class="text-center">
{{album.record_type}}
          </div>
           </q-bar>

        <q-card-section>
          <div>
            <q-img :src="album.cover_big"/>
          </div>
          <div class="text-h6 text-center">{{ album.title }}</div>
          <div class="text-h6 text-weight-light text-center">
            {{ album.artist.name }}
          </div>
        </q-card-section>
      </q-card>
    </div>

        </q-popup-proxy>


        <q-item-section top avatar>
          <q-avatar square rounded>
            <img
              :src="album.cover_small"
              alt="danny-lines-dwjfdde-DBZs-unsplash"
              border="0"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ album.title }}</q-item-label>
          <q-item-label caption>{{ album.artist.name }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon class="mobile-preview-icon" name="ion-arrow-forward" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />
    </q-list>


    <!-- desktop top albums -->



<div class="gt-sm q-px-lg">
        <div class="row">

          <div
            class="col-4 q-px-md q-pb-xl"
             v-for="album in topAlbumsData"
              :key="album.title"
          >
            <q-popup-proxy>
    <div class="gt-sm">
      <q-card
        class="bg-dark text-white fixed-top-right"
        style="width: 30%; z-index: 999"
      >
        <q-bar> </q-bar>
        <q-scroll-area style="height: 100vh">
          <q-card-section>
            <div class="q-my-lg">
              <div class="text-h6 text-center">{{album.title}}</div>
              <div class="text-h6 text-weight-light text-center">
                {{ album.artist.name }}
              </div>
            </div>
            <div>
                         <q-img :src="album.cover_big"/>

               
            </div>
          </q-card-section>
        </q-scroll-area>
      </q-card>
    </div>
            </q-popup-proxy>
            <q-img
              :src="album.cover_big"
              :img-style="{ borderRadius: '15px' }"
              spinner-color="white"
              class="rounded cursor-pointer"
              width="100%"
              v-ripple
            >
              <!-- error if image fails to load -->
              <template v-slot:error>
                <div
                  class="absolute-full flex flex-center bg-negative text-white"
                >
                  Cannot load image
                </div>
              </template>
              <!-- music indicator overlay -->
              <div v-show="album.explicit_lyrics">
                <div
                  class="absolute-top-left text-weight-bold text-center relative-position"
                >
                  E<q-tooltip>May contain explicit lyrics</q-tooltip>
                </div>
              </div>
              <!-- track details overlay -->
              <div class="absolute-bottom text-subtitle1 text-center">
                {{ album.artist.name }}
                <div class="text-weight-light">{{ album.title }}</div>
              </div>
            </q-img>
          </div>
        </div>
      </div>





  </div>
</template>

<script>
export default {
  data() {
    return {
      topAlbumsData: [],
    };
  },
  methods: {},
  mounted() {
    // get top albums
    this.axios
      .get("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart")
      .then((response) => (this.topAlbumsData = response.data.albums.data));
  },
};
</script>

<style lang="scss">
</style>