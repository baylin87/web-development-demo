<style lang='stylus' scoped>
    .indexmusic{
         overflow-y:scroll;
        h3{
            font-weight:normal;
            font-size: 18px;
            height: 40px;
            line-height: 40px;
            &::before{
                content: "|";
                color:#c00;
                font-size: 24px;
                margin:0px 6px;
                float: left;
                font-weight: bold;
            }
        }
        .album{
            ul{
                overflow:hidden;
                li{
                    float: left;
                    width: 33.3333%;
                    text-align: center;
                    img{
                        width: 96%;
                        display:block;
                        padding:4%;
                        box-shadow:0px 0px 5px rgba(0, 0, 0,0.3);
                        box-sizing:border-box;
                    }
                }
            }
        }
        .recommend{
            ul{
                li{
                    overflow:hidden;
                    padding-top:5px;
                    .index{
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        float: left;
                    }
                    div{
                        float: left;
                        p{
                            height: 25px;
                            line-height: 25px;
                            &:nth-child(1){
                                font-size: 16px;
                                color:#333;
                            }
                            &:nth-child(2){
                                font-size: 14px;
                                color:#888;
                            }
                        }
                    }
                    .icon-laba{
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        float: right;
                        font-size: 28px;
                    }
                    &.cur{
                        color:red;
                        div{
                            p{
                                color:red;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="indexmusic" v-height="50">
        <vueAwesomeSwiper :swiperArr="swiperArr"></vueAwesomeSwiper>
        <div class="album">
            <h3>推荐专辑</h3>
            <ul>
                <li v-for="(item,index) in album" @click=showAlbum(item,index)>
                    <img :src="item.albumImg" alt="" />
                    <p>{{item.albumTitle}}</p>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <h3>热歌推荐</h3>
            <ul>
                <li v-for="(item,index) in recommend" :class="{cur: index == $store.state.audio.index && $store.state.audio.albumIndex == null}" @click="playRecommend(recommend,index)">
                    <span class="index">{{index+1}} </span>
                    <div>
                        <p>{{item.musicName}}</p>
                        <p>{{item.musicSinger}}</p>
                    </div>
                    <span class="iconfont icon-laba"></span>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
import vueAwesomeSwiper from "../../components/swiper.vue";
    export default {
        data(){
            return{
                // 轮播图图片的数组
                swiperArr:[
                   {imagesSrc:"http://p1.music.126.net/tayomp6FIMrWZiAbtKIUhA==/109951163318751637.jpg"},
                   {imagesSrc:"http://p1.music.126.net/UVgsceyvLgIO4JjEoPSnRw==/109951163318410496.jpg"},
                   {imagesSrc:"http://p1.music.126.net/PfaotCGxjmVW_spkRV0ITQ==/109951163318752030.jpg"},
                   {imagesSrc:"http://p1.music.126.net/z1cjWtEx0vYxBnlgY8VFSQ==/109951163318744883.jpg"},
                   {imagesSrc:"http://p1.music.126.net/EUeRspHRVvl1M9pYgQo7vQ==/109951163318752048.jpg"},
                ]
            }
        },
        components:{
            vueAwesomeSwiper
        },
        created(){
            this.$store.dispatch("GETALL");
        },
        computed:{
            album(){
                // 得到所有专辑的列表
                return this.$store.state.mapList.album;
            },
            recommend(){
                // 得到所有的单曲列表
                return this.$store.state.mapList.recommend;
            }
        },
        methods:{
            showAlbum(item,index){
                // 点击传入item,它是整张专辑和点击的是第几张专辑
                this.$store.commit("SHOWORHIDEALBUM",{
                    isShowAlbum:true,
                    album:item,
                    index:index
                })
            },
            playRecommend(recommend,index){
                // 点击进入单曲列表，和index点击的是第几首歌曲
                this.$store.commit("SHOWPLAYER",{
                    // 显示播放器
                    isShowAudio:true,
                    // 设置专辑的列表
                    album:recommend,
                    // 歌曲下标
                    index:index,
                    // 专辑的歌手的头像
                    albumImg:recommend[index].singerImg,
                    // 播放器的背景图
                    playerImg:recommend[index].playerbg,
                    // 设置播放的第几张专辑,设置为null，表示播放的是单曲
                    albumIndex:null
                })
            }
        }
    }
</script>