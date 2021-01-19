<template>
    <div>

<h5 class="q-my-sm q-pl-md">Top Tracks</h5>

 <q-list>
    <q-item v-for="track in chartsData" :key="track.title">
        <q-item-section top avatar>
          <q-avatar square rounded>
<img :src="track.album.cover_small" alt="danny-lines-dwjfdde-DBZs-unsplash" border="0">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{track.title}}</q-item-label>
          <q-item-label caption>{{track.artist.name}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon class="mobile-preview-icon" name="ion-play-circle" />
          <q-item-label @click="playSong(track.preview)" class="text-weight-light" caption>Preview</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />
 </q-list>


    </div>
</template>

<script>
import {Howl, Howler} from 'howler';
export default {

    data(){
        return{
            hi:'wwww',
chartsData: [],
userInfo: [],
        }
    },
    methods: {
    playSong: function (songPreview) {
      this.userInteracted = true
console.log(Howler)
      var sound = new Howl({
        src: (songPreview)
      });

      sound.play();
    }
    },
    mounted () {
    this.axios
        .get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
  .then(response => (this.chartsData = response.data.tracks.data));
  console.log(this.chartsData)


   this.axios
        .get('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/infos')
  .then(response => (this.userInfo = response.data.country));
  console.log(this.chartsData)
  },
}
</script>

<style lang="scss">
*{
    color: #fff!important;
}
.mobile-preview-icon{
        align-self: center;
}
</style>