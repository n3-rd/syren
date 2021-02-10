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
        <div class="text-weight-bold text-center">Search Artist</div>
        <q-space />
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

<div class="main-area">

   <div class="gt-sm q-px-lg">
      <div class="row">
        <div
          class="col-4 q-px-md q-pb-xl"
          v-for="artistInfo in artistData"
          :key="artistInfo.title"
        >
          <!-- <q-popup-proxy>
            <IndividualAlbum
              :albumRecordType="album.record_type"
              :AlbumCoverBig="album.cover_big"
              :AlbumTitle="album.title"
              :AlbumArtist="album.artist.name"
            />
          </q-popup-proxy> -->
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
        </div>
      </div>
    </div>



</div>



      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
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