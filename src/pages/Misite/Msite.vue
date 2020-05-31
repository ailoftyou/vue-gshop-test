<template>
    <section class="msite">
    <!--首页头部-->
    <HeadTop :title="address.name">
        <span class="header_search" slot="left">
            <router-link to="/search">
                <i class="iconfont icon-search"></i>
            </router-link>
        </span>

        <span class="header_login" slot="right">
            <router-link :to="userInfo._id ? '/userInfo' : '/login'" >
              <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
              <span class="header_login_text" v-else>
                  <i class="iconfont icon-icon-test"></i>
              </span>
            </router-link>
        </span>
    </HeadTop>
    <!--首页导航-->
    <nav class="msite_nav">
        <div class="swiper-container" v-if="footType.length">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="( foodTypes,index ) in foodTypesArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="( foodType,index ) in foodTypes" :key="index">
                    <div class="food_container">
                    <img :src="baseImg + foodType.image_url">
                    </div>
                    <span>{{ foodType.title }}</span>
                </a>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        </div>
        <img src="./img/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
    </div>
    <ShopList></ShopList>
    </section>

</template>

<script>
// 引入 HeadTop 组件
import HeadTop from '../../components/headTop/headTop'
// 引入 shopList 组件
import ShopList from '../../components/shopList/shopList'
// 引入 Swiper 轮播
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

import {mapState} from 'vuex'

export default {

  data() {
      return {
          baseImg:'https://fuss10.elemecdn.com'
      }
  },

  mounted() {
      this.$store.dispatch('getFoodType');
      this.$store.dispatch('getShops');
  },

  computed: {
    ...mapState(['address','footType','userInfo']),

      /*
      根据foodTypes一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
      foodTypesArr() {
        const {footType} = this;
        // 准备 2 个空的二维数组
        const arr = [];
        let arr2 = [];
        // 遍历 foodType
        footType.forEach(item => {
            if(arr2.length === 8) {
                arr2 = [];
            }
            if(arr2.length === 0) {
                arr.push(arr2);
            }
            arr2.push(item);
        });

        return arr;
      }

  },

  watch: {
      footType(value) { // footType 更新数据后
          this.$nextTick( () => { // 界面更新立刻创建 Swiper $nextTick 要写在数据更新之后
              new Swiper ( '.swiper-container' , {
                  // 循环轮播
                  loop : true,
                  // 如果需要分页器
                  pagination: {
                      el: '.swiper-pagination',
                  },
              } )
          } )
      }
  },

  components: {
    HeadTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>
