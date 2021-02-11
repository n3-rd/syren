<template>
  <q-dialog
    v-model="searchArtistDialog"
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

        <div class="text-weight-bold text-center">Search Artist</div>
        <q-space />
   </div>
        <q-input
          dark
          dense
          filled
          v-model="artistInput"
          input-class="text-center"
          placeholder="search artist"
          class="q-ml-md"
          @keyup.enter="getArtist"
        >
          <template v-slot:append>
            <q-icon v-if="artistInput === ''" name="ion-search" />
            <q-icon
              v-else
              name="ion-close"
              class="cursor-pointer"
              @click="artistInput = ''"
            />
          </template>
        </q-input>
      </q-bar>

      <q-card-section>
   <div class="gt-sm q-px-lg">
        
        <div id="start-area">
          <h3 class="text-center q-py-xl heading-text">
            Discover your favourite artist
          </h3>

          <input
            type="search"
            class="main-input"
            v-model="artistInput"
            @keyup.enter="getArtist"
          />
        </div>
   </div>

<div class="main-area">

<!-- Desktop -->
   <div class="gt-sm q-px-lg">
      <div class="row">
        <div
          class="col-4 q-px-md q-pb-xl"
          v-for="artistInfo in artistData"
          :key="artistInfo.title"
        >
          <q-popup-proxy>
          <IndividualSong
              :trackTitle="artistInfo.title"
              :trackArtist="artistInfo.artist.name"
              :trackCoverSmall="artistInfo.album.cover_small"
              :trackCoverBig="artistInfo.album.cover_big"
              :trackPreview="artistInfo.preview"
            />
          </q-popup-proxy>
          <q-img
            :src="artistInfo.album.cover_big"
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
            <div v-show="artistInfo.explicit_lyrics">
              <div
                class="absolute-top-left text-weight-bold text-center relative-position"
              >
                E<q-tooltip>May contain explicit lyrics</q-tooltip>
              </div>
            </div>
            <!-- track details overlay -->
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ artistInfo.title }}
              <div class="text-weight-light">{{ artistInfo.album.title }}</div>
            </div>
          </q-img>
          <q-item-section side top v-show="artistInfo.preview">
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

<!-- mobile -->
      <q-list class="lt-md">
    
 <q-item v-for="artistInfo in artistData"
          :key="artistInfo.title" v-ripple>
          <q-popup-proxy style="padding: 0 !important">
            <IndividualSong
              :trackTitle="artistInfo.title"
              :trackArtist="artistInfo.artist.name"
              :trackCoverSmall="artistInfo.album.cover_small"
              :trackCoverBig="artistInfo.album.cover_big"
              :trackPreview="artistInfo.preview"
            />
          </q-popup-proxy>

          <q-item-section top avatar>
            <q-avatar square rounded>
              <img
                :src="artistInfo.album.cover_small"
                alt="danny-lines-dwjfdde-DBZs-unsplash"
                border="0"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ artistInfo.title }}</q-item-label>
            <q-item-label caption>{{ artistInfo.artist.name }}</q-item-label>
          </q-item-section>

          <q-item-section side top v-show="artistInfo.preview">
            <q-icon class="mobile-preview-icon" name="ion-play-circle" />
            <q-item-label
              @click="playSong(artistInfo.preview)"
              class="text-weight-light"
              caption
              >Preview</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator spaced inset="item" />

      </q-list>



</div>



      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { Howl, Howler } from "howler";
import IndividualSong from '../IndividualSong'
export default {
  components: {
IndividualSong
  },
  data() {
    return {
      searchArtistDialog: false,
      artistInput: "",
      artistData: [],
    };
  },
  methods: {
    getArtist: function () {
      document.getElementById("start-area").style.display = "none";
      this.axios
        .get(`https://api.deezer.com/search?q=artist:"${this.artistInput}"`)
        .then((response) => {
         
          this.artistData = response.data.data;
          console.log(response.data.data)
        });
    },
      playSong: function (songPreview) {
      this.previewPlaying = true;
      Howler.stop();
      var sound = new Howl({
        src: songPreview,
      });

      sound.play();
    },
  },
};
</script>
<style lang="scss">
.heading-text {
  letter-spacing: 3px;
}
.main-input {
  width: 100%;
  padding: 18px 19px;
  border-radius: 20px;
  box-shadow: none;
  background: #171717;
  border: none;
  outline: none;
  margin-bottom: 22px;
}
</style>