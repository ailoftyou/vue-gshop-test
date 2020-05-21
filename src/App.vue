<template>
  <div id="app">
    <router-view />
    <FootGuider v-show="$route.meta.showFooter"></FootGuider>
  </div>
</template>

<script>

import FootGuider from './components/footGuider/FootGuider'

export default {
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
