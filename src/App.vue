<template>
  <div id="app">
    <router-view />
    <FootGuider v-show="$route.meta.showFooter"></FootGuider>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import FootGuider from './components/footGuider/FootGuider'

export default {

  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress();
    this.getUserInfo();
  },

  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },

  components : {
    FootGuider
  }
}
</script>

<style lang="stylus" rel="styleshet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
