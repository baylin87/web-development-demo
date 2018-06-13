import Vue from 'vue';
import App from './App.vue';
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios);

import directive from "./plugins/directives.js";
Vue.use(directive);
// swiper轮播图的插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import router from "./router";
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        mapList:[],
        player:{
            isShowAlbum:false,
            album:[],
            index:null
        },
        audio:{
            isShowAudio:false,
            // 播放的列表
            album:[],
            // 第几首歌
            index:null,
            // 专辑的图片，
            albumImg:null,
            // 播放器的背景图
            playerImg:null,
            // 专辑的index，
            // 若为null，表示播放的是单曲
            // 若是1，表示第一张专辑
            // 若是2，表示第二张专辑
            albumIndex:null
        }
    },
    mutations:{
        GETALL(state,payload){
            state.mapList = payload.mapList;
        },
        SHOWORHIDEALBUM(state,payload){
            // 点击显示专辑页面
            state.player.isShowAlbum = payload.isShowAlbum;
            // 给专辑页面传入整张专辑
            state.player.album = payload.album;
            // 专辑的下标
            state.player.index = payload.index;
        },
        HIDEALBUM(state,payload){
            // 控制关闭
            state.player.isShowAlbum = payload.isShowAlbum;
        },
        SHOWPLAYER(state,payload){
            // 显示播放器
            state.audio.isShowAudio = payload.isShowAudio;
            state.audio.album = payload.album;
            state.audio.index = payload.index;
            state.audio.albumImg = payload.albumImg;
            state.audio.playerImg = payload.playerImg;
            state.audio.albumIndex = payload.albumIndex;
        },
        SHOWORHIDEPLAYER(state,payload){
            state.audio.isShowAudio = payload.isShowAudio;
        },
        CHANGEMUSIC(state,payload){
            state.audio.index = payload.index;
            state.audio.albumImg = payload.albumbg;
            state.audio.playerImg = payload.playerbg;

        }
    },
    actions:{
        GETALL({commit},payload){
            Vue.axios.get("/assets/data.json").then(data=>{
                commit("GETALL",data.data)
            })
        }
    }

})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
