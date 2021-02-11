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

        <li v-for="trackInfo in trackData" :key="trackInfo.title">
            {{trackInfo.title}}
        </li>


      </q-card-section>
    </q-card>
 </q-dialog>
</div>

</template>

<script>
export default {
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