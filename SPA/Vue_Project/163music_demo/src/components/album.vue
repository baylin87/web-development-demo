<style scoped lang='stylus' >
    .albumPage{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background:#fff;
        z-index:1;
        .header{
            height: 280px;
            header{
                position: relative;
                color:#fff;
                height: 50px;
                line-height: 50px;
                text-align: center;
                span.icon-houtui1{
                    position: absolute;
                    top:0px;
                    left:0px;
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 26px;
                    color:#111;
                }
            }
            .content{
                padding:5%;
                overflow:hidden;
                .albumImg{
                    width: 35%;
                    float: left;
                    img{
                        width: 100%;
                    }
                }
                .albumDetail{
                    width: 65%;
                    float: left;
                    padding-left:3%;
                    box-sizing:border-box;
                    color:#fff;
                    p.albumTitle{
                        height: 30px;
                        line-height: 30px;
                        margin:5px 0;
                    }
                    p.singer{
                        height: 30px;
                        img{
                            width: 30px;
                            border-radius:50%;
                            float: left;
                            margin-right:10px;
                            border: 1px solid #fff;
                        }
                        span{
                            float: left;
                            line-height: 30px;
                        }
                    }
                }
            }
            .setting{
                overflow:hidden;
                margin-top: 10px;
                li{
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    width: 25%;
                    text-align: center;
                    font-size: 36px;
                    color:#fff;
                }
            }
        }
        div.albumList{
            overflow-y:scroll;
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
    <div class="albumPage" v-if="player.isShowAlbum">
        <div class="header" :style="{background:`url(${player.album.albumbg}) 0 0/100% 100% no-repeat`}">
            <header>
                <span class="iconfont icon-houtui1" @click="hideAlbum"></span>
                {{player.album.albumTitle}}
            </header>
            <div class="content">
                <div class="albumImg">
                    <img :src="player.album.albumImg" alt="" />
                </div>
                <div class="albumDetail">
                    <p class="albumTitle">专辑：{{player.album.albumTitle}}</p>
                    <p class="singer">
                        <img :src="player.album.albumImg" alt="" />
                        <span>歌手：{{player.album.albumSinger}}</span>
                    </p>
                </div>
            </div>
            <ul class="setting">
                <li class="iconfont icon-addfile"></li>
                <li class="iconfont icon-BAI-pinglun"></li>
                <li class="iconfont icon-fenxiang1"></li>
                <li class="iconfont icon-icon--"></li>
            </ul>
        </div>
        <div class="albumList" v-height="280">
            <ul>
                <li v-for="(item,index) in player.album.albumList" :class="{cur: index == $store.state.audio.index && $store.state.audio.albumIndex == albumIndex}" @click="playAudio(player.album.albumList,index)">
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
    export default{
        props:["player"],
        data(){
            return{

            }
        },
        computed:{
            albumIndex(){
                // 得到当前播放的下标
                return this.$store.state.player.index;
            }
        },
        methods:{
            hideAlbum(){
                this.$store.commit("HIDEALBUM",{
                    isShowAlbum:false
                })
            },
            playAudio(itemList,index){
                // 点击显示 播放器 itemList 是专辑的数组， index是点击专辑的里面的第几首歌曲
                this.$store.commit("SHOWPLAYER",{
                    // 显示播放器
                    isShowAudio:true,
                    // 设置专辑的列表
                    album:itemList,
                    // 歌曲下标
                    index:index,
                    // 专辑的歌手的头像
                    albumImg:this.player.album.albumImg,
                    // 播放器的背景图
                    playerImg:this.player.album.playerbg,
                    // 设置播放的第几张专辑
                    albumIndex:this.albumIndex
                })
            }
        }
    }
</script>