<template>
    
<div>

<div class="desktop-only">
<q-card class="bg-dark text-white fixed-top-right" style="width: 30%;z-index: 999;">
              <q-bar> </q-bar>
                <q-scroll-area style="height: 80vh">

              <q-card-section>
                <div class="q-my-lg">
                <div class="text-h6 text-center">{{trackTitle}}</div>
                <div class="text-h6 text-weight-light text-center">
                {{trackArtist}}
                </div>
                </div>
                <div>
                  <q-img :src="trackCover" width="100%" >
              <div class="absolute-top-left cursor-pointer" @click="playSong(trackPreview)"><q-icon name="eva-volume-up-outline"/></div>

                  </q-img>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none song-lyrics">
            {{songLyrics}}
              </q-card-section>
                </q-scroll-area>
            </q-card>


</div>

<div class="mobile-only">
            <q-card class="bg-dark text-white" style="width: 100%">
              <q-bar> </q-bar>

              <q-card-section>
                <div>
                  <q-img :src="trackCoverSmall" width="100%" />
                </div>
                <div class="text-h6 text-center">{{ trackTitle }}</div>
                <div class="text-h6 text-weight-light text-center">
                  {{ trackArtist }}
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{songLyrics}}
              </q-card-section>
            </q-card>
</div>


</div>

</template>

<script>
import { Howl, Howler } from "howler";

export default {
    
   props: [
       'trackTitle',
       'trackArtist',
       'trackCover',
       'trackPreview',
       'trackCoverSmall',
   ],
   data(){
return{
    songLyrics: ''
}
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
   created(){
       this.axios
      .get("https://api.lyrics.ovh/v1/"+this.trackArtist+"/"+this.trackTitle+"")
      .then((response) => {
this.songLyrics = response.data.lyrics
        })
   }
}
</script>

<style lang="scss">
.song-lyrics{
        text-align: center!important;
    white-space: break-spaces!important;
}
</style>