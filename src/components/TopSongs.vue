<template>
  <div>
    <!-- <h5 class="q-my-sm q-pl-md">Top Tracks</h5> -->
 


    <q-expansion-item expand-separator label="Top Tracks" default-opened>
      <!-- top tracks section (mobile) -->
      <q-list class="mobile-only">
        <q-item v-for="track in topTracksData" :key="track.title">
          <q-popup-proxy style="padding: 0 !important">
            <q-card class="bg-dark text-white" style="width: 100%">
              <q-bar> </q-bar>

              <q-card-section>
                <div>
                  <q-img :src="track.album.cover_big" width="100%" />
                </div>
                <div class="text-h6 text-center">{{ track.title }}</div>
                <div class="text-h6 text-weight-light text-center">
                  {{ track.artist.name }}
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </q-card-section>
            </q-card>
          </q-popup-proxy>

          <q-item-section top avatar>
            <q-avatar square rounded>
              <img
                :src="track.album.cover_small"
                alt="danny-lines-dwjfdde-DBZs-unsplash"
                border="0"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ track.title }}</q-item-label>
            <q-item-label caption>{{ track.artist.name }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-icon class="mobile-preview-icon" name="ion-play-circle" />
            <q-item-label
              @click="playSong(track.preview)"
              class="text-weight-light"
              caption
              >Preview</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator spaced inset="item" />
      </q-list>

      <!-- top tracks section (desktop) -->

      <div class="desktop-only q-px-lg">

        <div class="row">
        <div class="flex-center" v-show="!topTracksLoaded">
          <q-spinner
        color="primary"
        size="3em"
        :thickness="2"
      />
      </div>
         
          <div
            class="col-4 q-px-md q-pb-xl"
            v-for="track in topTracksData"
            :key="track.title"
          >
          <q-popup-proxy>

<IndividualSong :trackTitle="track.title" :trackArtist="track.artist.name"
:trackCover="track.album.cover_big"
:trackPreview="track.preview"
/>

          </q-popup-proxy>
            <q-img
              :src="track.album.cover_big"
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
              <div v-show="track.explicit_lyrics">
              <div class="absolute-top-left text-weight-bold text-center relative-position">E<q-tooltip>May contain explicit lyrics</q-tooltip></div>
              </div>
              <!-- track details overlay -->
              <div class="absolute-bottom text-subtitle1 text-center">
                {{ track.artist.name }}
                <div class="text-weight-light">{{ track.title }}</div>
              </div>
            </q-img>
            <div
              class="text-center text-h6 text-weight-regular cursor-pointer"
              @click="playSong(track.preview)"
              v-ripple
            >
              preview <q-icon name="ion-play-circle" />
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>



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
import IndividualSong from './IndividualSong'
export default {
  components: {
    IndividualSong
  },
  data() {
    return {
      hi: "wwww",
      previewPlaying: false,
      topTracksData: [],
      topAlbumsData: [],
      userInfo: [],
      songDialog: "",
      topTracksLoaded: false
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
    // get top tracks
    this.axios
      .get("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart")
      .then((response) => {
        this.topTracksData = response.data.tracks.data
        this.topTracksLoaded = true
        })

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