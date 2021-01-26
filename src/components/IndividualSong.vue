<template>
  <div>
    <!-- Desktop song popup -->
    <div class="gt-sm">
      <q-card
        class="bg-dark text-white fixed-top-right"
        style="width: 30%; z-index: 999"
      >
        <q-bar> </q-bar>
        <q-scroll-area style="height: 100vh">
          <q-card-section>
            <div class="q-my-lg">
              <div class="text-h6 text-center">{{ trackTitle }}</div>
              <div class="text-h6 text-weight-light text-center">
                {{ trackArtist }}
              </div>
            </div>
            <div>
              <q-img :src="trackCoverBig" width="100%">
                <div
                  class="absolute-top-left cursor-pointer"
                  @click="playSong(trackPreview)"
                >
                  <q-icon name="eva-volume-up-outline" />
                </div>
              </q-img>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none song-lyrics">
            {{ songLyrics }}
             <div v-show="lyricsNone = true">
oops,we didn't get that
          </div>
          </q-card-section>
        </q-scroll-area>
      </q-card>
    </div>

    <!-- mobile song popup -->
    <div class="lt-md">
      <q-card class="bg-dark text-white" style="width: 100%">
        <q-bar> </q-bar>

        <q-card-section>
          <div>
            <q-img :src="trackCoverBig" width="100%">
                <div
                  class="absolute-top-left cursor-pointer"
                  @click="playSong(trackPreview)"
                >
                  <q-icon name="eva-volume-up-outline" />
                </div>
              </q-img>
          </div>
          <div class="text-h6 text-center">{{ trackTitle }}</div>
          <div class="text-h6 text-weight-light text-center">
            {{ trackArtist }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none song-lyrics">
          {{ songLyrics }}
          <div v-show="lyricsNone = true">
oops,we didn't get that
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  props: [
    "trackTitle",
    "trackArtist",
    "trackCover",
    "trackCoverSmall",
    "trackCoverBig",
    "trackPreview",
  ],
  data() {
    return {
      songLyrics: "",
      lyricsNone: false,
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
  beforeUpdate(){
this.lyricsNone = false
  },
  created() {
    
    this.axios
      .get(
        "https://api.lyrics.ovh/v1/" +
          this.trackArtist +
          "/" +
          this.trackTitle +
          ""
      )
      .then((response) => {
        this.songLyrics = response.data.lyrics;
        if(this.songLyrics == null){
          setTimeout(function(){
            this.lyricsNone = true

          }, 3000)
        }
      });
  },
};
</script>

<style lang="scss">
.song-lyrics {
  text-align: center !important;
  white-space: break-spaces !important;
}
</style>