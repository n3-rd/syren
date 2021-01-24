<template>
  <div>
    <q-scroll-area>
      <q-img
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="65px" class="q-mb-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ0cFlRm0lEGOZVg9fHiTAMYmir2mQwatKQ&usqp=CAU"
            />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="eva-home-outline" />
          </q-item-section>

          <q-item-section> Home </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="eva-person-outline" />
          </q-item-section>

          <q-item-section> Search Artist </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="eva-book-outline" />
          </q-item-section>

          <q-item-section> Search Album </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<style lang="scss">
.bg-black {
  background: #000 !important;
  color: #fff;
}
body
  > div.body
  > div
  > div.q-drawer-container.bg-black
  > aside
  > div
  > div
  > div
  > div.scroll.relative-position.fit.hide-scrollbar {
  position: static;
}
</style>
