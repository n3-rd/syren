<template>
    <div>
    <!-- mobile -->
 <div class="lt-md">
      <q-card class="bg-dark text-white" style="width: 80vw">
        <q-bar>
          <div class="text-center">
{{albumRecordType}}
          </div>
           </q-bar>

        <q-card-section>
          <div>
            <q-img :src="AlbumCoverBig"/>
          </div>
          <div class="text-h6 text-center">{{ AlbumTitle }}</div>
          <div class="text-h6 text-weight-light text-center">
            {{ AlbumArtist }}
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- desktop -->

  <div class="gt-sm">
      <q-card
        class="bg-dark text-white fixed-top-right"
        style="width: 30%; z-index: 999"
      >
        <q-bar> </q-bar>
        <q-scroll-area style="height: 100vh">
          <q-card-section>
            <div class="q-my-lg">
              <div class="text-h6 text-center">{{AlbumTitle}}</div>
              <div class="text-h6 text-weight-light text-center">
                {{ AlbumArtist }}
              </div>
            </div>
            <div>
                         <q-img :src="AlbumCoverBig"/>

               
            </div>
          </q-card-section>
        </q-scroll-area>
      </q-card>
    </div>

    </div>
</template>

<script>
export default {
    props: [

"albumRecordType",
 "AlbumCoverBig",
 "AlbumTitle",
 "AlbumArtist"

    ],
    data(){
        return{

        }
    }
}
</script>

<style lang="sass">

</style>