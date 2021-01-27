<template>
  <div>
    <TopTracks />
    <TopAlbums />
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
import TopTracks from "./TopTracks";
import TopAlbums from "./TopAlbums";
export default {
  components: {
    TopTracks,
    TopAlbums,
  },
  data() {
    return {
      previewPlaying: false,
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
    // get basic user info
    this.axios
      .get("https://api.deezer.com/infos")
      .then((response) => (this.userInfo = response.data.country));
  },
};
</script>

<style lang="scss">
* {
  color: #fff !important;
}
</style>