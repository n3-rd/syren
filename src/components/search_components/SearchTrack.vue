<template>
    
<div>
 <q-dialog
    v-model="searchTracksDialog"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-dark">
      <q-bar
        class="bg-main q-py-xl q-mb-xl"
        style="padding-top: 24px; padding-bottom: 24px; color: #ebecee"
      >
        <q-btn
          dense
          flat
          icon="ion-arrow-back"
          style="font-size: 19px"
          v-close-popup
        />
   <div class="gt-sm q-px-lg">

        <div class="text-weight-bold text-center">Search Track</div>
        <q-space />
   </div>
        <q-input
          dark
          dense
          filled
          v-model="trackInput"
          input-class="text-center"
          placeholder="search artist"
          class="q-ml-md"
          @keyup.enter="getTrack"
        >
          <template v-slot:append>
            <q-icon v-if="trackInput === ''" name="ion-search" />
            <q-icon
              v-else
              name="ion-close"
              class="cursor-pointer"
              @click="trackInput = ''"
            />
          </template>
        </q-input>
      </q-bar>

      <q-card-section>

   <div class="gt-sm q-px-lg">

 <div id="start-area">
          <h3 class="text-center q-py-xl heading-text">
            Discover your favourite Tracks
          </h3>

          <input
            type="search"
            class="main-input"
            v-model="trackInput"
            @keyup.enter="getTrack"
          />
        </div>
   </div>

        <!-- <li v-for="trackInfo in trackData" :key="trackInfo.id">
            {{trackInfo.title}}
        </li> -->


<!-- Desktop -->

 <div class="gt-sm q-px-lg">
      <div class="row">
        <div
          class="col-4 q-px-md q-pb-xl"
          v-for="trackInfo in trackData" :key="trackInfo.id"
        >
          <q-popup-proxy>
          <IndividualSong
              :trackTitle="trackInfo.title"
              :trackArtist="trackInfo.artist.name"
              :trackCoverSmall="trackInfo.album.cover_small"
              :trackCoverBig="trackInfo.album.cover_big"
              :trackPreview="trackInfo.preview"
            />
          </q-popup-proxy>
          <q-img
            :src="trackInfo.album.cover_big"
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
            <div v-show="trackInfo.explicit_lyrics">
              <div
                class="absolute-top-left text-weight-bold text-center relative-position"
              >
                E<q-tooltip>May contain explicit lyrics</q-tooltip>
              </div>
            </div>
            <!-- track details overlay -->
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ trackInfo.title }}
              <div class="text-weight-light">{{ trackInfo.artist.name }}</div>
            </div>
          </q-img>
          <q-item-section side top v-show="trackInfo.preview">
          <div
              class="text-center text-h6 text-weight-regular cursor-pointer"
              @click="playSong(track.preview)"
              v-ripple
            >
              preview <q-icon name="ion-play-circle" />
            </div>
          </q-item-section>
        </div>
      </div>
    </div>


      </q-card-section>
    </q-card>
 </q-dialog>
</div>

</template>

<script>
import IndividualSong from '../IndividualSong'
export default {
    components: {
IndividualSong
    },
    data(){
        return{
            searchTracksDialog: false,
            trackInput: '',
      trackData: [],

        }
    },
    methods:{
         getTrack: function () {
      document.getElementById("start-area").style.display = "none";
      this.axios
        .get(`https://api.deezer.com/search?q=track:"${this.trackInput}"`)
        .then((response) => {
         
          this.trackData = response.data.data;
          console.log(response.data.data)
        });
    },
    }
}
</script>
<style lang="scss">

</style>