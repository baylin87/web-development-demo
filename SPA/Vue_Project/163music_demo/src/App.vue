<style scoped lang='stylus'>
  .header{
    position: relative;
    color:#fff;
    .caidan,.icon-zhuanjiguangpan{
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 26px;
      position: absolute;
      text-align: center;
      top:0;
      left:0px;
    }
    .icon-zhuanjiguangpan{
      left:auto;
      right:0;
    }
    header{
      height: 50px;
      line-height: 50px;
      background:#C20C0C;
      ul{
        width: 70%;
        margin:0 auto;
        overflow:hidden;
        li{
          font-size: 26px;
          width: 33.3333%;
          float: left;
          text-align: center;
          &.cur{
            background:#600;
          }

        }
      }
    }
  }
</style>
<template>
  <div id="app">
    <div class="header">
      <span class="iconfont icon-caidan caidan"></span>
      <header>
        <ul>
          <li class="iconfont" v-for="item in tabNav" :class="[item.fontClass,{cur:$route.name == item.fontClass}]" @click="routerGo(item.url)"></li>
        </ul>
      </header>
      <span class="iconfont icon-zhuanjiguangpan" @click="showPlayer"></span>
    </div>
    <transition name="donghua">
        <router-view></router-view>
    </transition>
    <transition name="donghua">
        <album :player="player"></album>
    </transition>
    <transition name="donghua">
        <audioplayer :audio="audio" v-show="audio.isShowAudio"></audioplayer>
    </transition>
  </div>
</template>

<script>
import album from "./components/album.vue";
import audioplayer from "./components/audioplayer.vue";
export default {
  name: 'app',
  data () {
    return {
      tabNav:[
        {
          fontClass:"icon-music",
          url:"/indexmusic"
        },
        {
          fontClass:"icon-wangyiyunyinlezizhi-copy",
          url:"/faxianmusic"
        },
        {
          fontClass:"icon-diantai",
          url:"/radiomusic"
        }
      ]
    }
  },
  methods:{
    routerGo(url){
        this.$router.push({path:url})
    },
    showPlayer(){
      this.$store.commit("SHOWORHIDEPLAYER",{
        isShowAudio:true
      })
    }
  },
  components:{
    album,
    audioplayer
  },
  computed:{
    player(){
      return this.$store.state.player
    },
    audio(){
      return this.$store.state.audio
    }
  }
}
</script>
