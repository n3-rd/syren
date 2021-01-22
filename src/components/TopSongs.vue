<template>
  <div>
    <!-- <h5 class="q-my-sm q-pl-md">Top Tracks</h5> -->
 

<TopTracks/>
    



    <!-- top albums -->
    <h5 class="q-my-sm q-pl-md q-mt-xl">Top Albums</h5>

    <q-list>
      <q-item v-for="album in topAlbumsData" :key="album.title">
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
import { Howl, Howler } from "howler";
// import IndividualSong from './IndividualSong'
import TopTracks from './TopTracks'
export default {
  components: {
    // IndividualSong
    TopTracks
  },
  data() {
    return {
      previewPlaying: false,
      topAlbumsData: [],
      userInfo: [],
      songDialog: "",
    };
  },
  methods: {
    playSong: function (songPreview) {
      this.previewPlaying = true;
      Howler.stop();
      var sound = new Howl({
        src: songPreview,
      });

      sound.play();
    },
  },
  mounted() {
   
    // get top albums
    this.axios
      .get("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart")
      .then((response) => (this.topAlbumsData = response.data.albums.data));

    // get basic user info
    this.axios
      .get("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/infos")
      .then((response) => (this.userInfo = response.data.country));
  },
};
</script>

<style lang="scss">
* {
  color: #fff !important;
}
.mobile-preview-icon {
  align-self: center;
}
</style>