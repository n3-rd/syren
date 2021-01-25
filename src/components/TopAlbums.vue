<template>
  <div>
    <!-- top albums -->
    <h5 class="q-my-sm q-pl-md q-mt-xl">Top Albums</h5>

    <q-list>
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