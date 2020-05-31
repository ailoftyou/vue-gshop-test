
import Vue from 'vue'

import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS](state, {address})
    {
        state.address = address
    },
    [RECEIVE_FOODTYPE](state, {footType})
    {
        state.footType = footType
    },
    [RECEIVE_SHOPS](state, {shops})
    {
        state.shops = shops
    },

    [RECEIVE_USER_INFO](state, {userInfo})
    {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state)
    {
        state.userInfo = {}
    },

    [RECEIVE_GOODS](state , {goods})
    {
        state.goods = goods
    },
    [RECEIVE_RATINGS](state , {ratings})
    {
        state.ratings = ratings
    },
    [RECEIVE_INFO](state , {info})
    {
        state.info = info
    },
    [INCREMENT_FOOD_COUNT](state , {food})
    {
        if (!food.count) {
            // food.count = 1;
            Vue.set(food,'count',1); // 让新增的属性也有数据绑定
            state.cartFoods.push(food)
        }else {
            food.count ++;
        }
    },
    [DECREMENT_FOOD_COUNT](state , {food})
    {
        if (food.count) {
            food.count --;
            if (food.count === 0) {
                state.cartFoods.splice(state.food.indexOf(food,1))
            }
        }
    },
    [CLEAR_CART](state)
    {
        // 清除 food 中 count
        state.cartFoods.forEach( food => food.count = 0 );
        // 移除购物车中所有数据
        state.cartFoods = []
    },
    [RECEIVE_SEARCH_SHOPS](state,{ searchShops })
    {
        state.searchShops = searchShops
    },
}
