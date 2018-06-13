<style scoped lang='stylus'>
    .audioplayerPage{
        position: fixed;
        top:0px;
        left:0px;
        background:#fff;
        width: 100%;
        height: 100%;
        z-index:1;
        header{
            width: 100%;
            height: 50px;
            position: relative;
            text-align: center;
            line-height: 50px;
            color:#fff;
            span{
                position: absolute;
                top:0px;
                left:0px;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 26px;
            }
        }
        .content{
            padding-top: 60px;
            position: relative;
            overflow:hidden;
            .cd{
                width: 80%;
                margin:0 auto;
                position: relative;
                img{
                    width: 100%;
                }
                .singerbg{
                    position: absolute;
                    width: 60%;
                    border-radius:50%;
                    overflow:hidden;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    animation:donghua 8s linear infinite paused;
                    img{
                        display:block;
                    }
                }
                @-webkit-keyframes donghua{
                    from{
                        transform:translate(-50%,-50%) rotate(0deg);
                    }
                    to{
                        transform:translate(-50%,-50%) rotate(360deg);
                    }
                }
                .singerbg.cur{
                    animation-play-state:running;
                }
            }
            .switch{
                position: absolute;
                width: 110px;
                height: 157px;
                top: -20px;
                left: 60%;
                transform:translateX(-50%) rotate(-20deg);
                transform-origin:15px 15px;
                transition:all 1s ease 0s;
                img{
                    width: 100%;
                    display: block;
                }
                &.cur{
                    transform:translateX(-50%) rotate(0deg);
                }
            }
        }
        .lyric{
            overflow:hidden;
            ul{
                position: relative;
                transition:all 1s ease 0s;
                li{
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    span.animationLyric_origin{
                        position: relative;
                        color:#fff;
                        height: 26px;
                        line-height: 26px;
                        display:inline-block;
                        span.animationLyric_current{
                            position: absolute;
                            top:0px;
                            left:0px;
                            display:inline-block;
                            overflow:hidden;
                            height: 26px;
                            white-space: nowrap;
                            line-height: 26px;
                            width: 0;
                            animation-play-state:paused;
                        }
                    }
                    &.cur{
                        span.animationLyric_current{
                            color:red;
                            animation:lyricdonghua 5s linear;
                            @-webkit-keyframes lyricdonghua{
                                from{
                                    width:0%;
                                }
                                to{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
        ul.setting{
            overflow:hidden;
            li{
                float: left;
                width: 25%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color:#fff;
                font-size: 38px;
                &:nth-child(1){
                    font-size: 30px;
                }
            }
        }
        .progressBar{
            overflow:hidden;
            padding:12px 3%;
            font-size: 14px;
            color:rgba(255,255,255,0.8);
            p{
                float: left;
            }
            p.start{
                width: 10%;
                height: 40px;
                line-height: 40px;
                text-align: right;
            }
            p.range{
                width: 80%;
                padding:0px 3%;
                box-sizing:border-box;
                margin:18px auto;
                span.duration{
                    width: 100%;
                    height: 2px;
                    background:rgba(255,255,255,0.5);
                    display: block;
                    position: relative;
                    span.currentTime{
                        width: 50%;
                        height: 2px;
                        background:#c00;
                        display:block;
                        position: absolute;
                        top:0px;
                        left:0px;
                    }
                }
            }
            p.end{
                width: 10%;
                height: 40px;
                line-height: 40px;
                text-align: left;
            }
        }
        .controller{
            height: 50px;
            line-height: 50px;
            color:rgba(255,255,255,0.5);
            position: relative;
            text-align: center;
            position: relative;
            top:10px;
            p{
                position: absolute;
                top:0;
            }
            p.playmodelbtn{
                color:#fff;
                font-size:  30px;
                left:3%;
            }
            p.playlistbtn{
                font-size:28px;
                right:3%;
                color:#fff;
            }
            ul{
                overflow:hidden;
                width: 70%;
                margin:0 auto;
                li{
                    width: 33.333%;
                    float: left;
                    font-size: 40px;
                }
                li.icon-pause-20,li.icon-bofang{
                    font-size: 52px;
                }
            }
        }
        .popwindow{
            width: 100%;
            height: 100%;
            position: fixed;
            top:0px;
            left:0px;
            background:rgba(0, 0, 0, 0.7);
            opacity: 0;
        }
        .popwindow.cur{
            opacity: 1;
            transition:all 0.8s ease 0s;
            z-index:1;
        }
        .playlist.cur{
            bottom:0;
            z-index: 2;
        }
        .playlist{
            position: absolute;
            width: 100%;
            height: 300px;
            background:#fff;
            bottom:-300px;
            transition:all 0.8s ease 0s;
            ul{
                height: 250px;
                overflow-y:scroll;
                li{
                    overflow:hidden;
                    span{
                        width:140px;
                        text-align: center;
                        font-size: 20px;
                        float: left;
                        line-height: 50px;
                        height: 50px;
                    }
                }
                li.cur{
                    color:#c00;
                }
            }
            footer{
                position: absolute;
                bottom:0px;
                height: 50px;
                width: 100%;
                text-align: center;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                span{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    font-size: 28px;
                }
            }
        }
    }
</style>
<template>
    <!--这个页面必须使用v-show 控制 因为v-if是控制dom的上下树， 下树了就不能后台播放了 -->
    <div class="audioplayerPage" :style="{background:`#123456 url(${audio.playerImg}) 0 0/100% 100% no-repeat`}">
        <div class="popwindow" :class="{cur:isShowPlayList}"></div>
        <header>
            <span class="iconfont icon-houtui1" @click="goback"></span>
            {{typeof audio.index == 'number' ? audio.album[audio.index].musicName : '播放器'}}
        </header>
        <span v-if="typeof audio.index == 'number'">
            <audio :src="audio.album[audio.index].musicUrl" autoplay @timeupdate="play"></audio>
        </span>
        <div class="content" v-if="!isShowLyric" @click="showLyric">
            <div class="cd">
                <img src="../../assets/img/cd.png"/>
                <div class="singerbg" :class="{cur:isPlay}">
                    <img :src="audio.albumImg"/>
                </div>
            </div>
            <div class="switch" :class="{cur:isPlay}">
                <img src="../../assets/img/swith.png" />
            </div>
        </div>
        <div class="lyric" v-if="isShowLyric" v-height="240" @click="hideLyric">
            <ul>
                <!-- 当前播放的时间 大于 当前歌词语句前的时间 加类  -->
                <!-- 到底什么添加类， 当前的时间 + 本句歌词的持续时间【下一行 减去 本行前的时间 】 但是下一行不能超过歌词总数 （index + 1 > lyric.length - 1 ? lyric.length - 1 : index + 1） ,而且不能小于0，index <= 0 ,就是0 -->
                <li v-for="(item,index) in lyric" :class="{cur: currentTime > lyric[index][0]&&currentTime+(lyric[index][0] - lyric[index <= 0 ? 0 : index + 1 > lyric.length - 1 ? lyric.length - 1 : index + 1][0])<lyric[index][0]}">
                    <span class="animationLyric_origin">
                        {{item[1]}}
                        <span
                        class="animationLyric_current"
                        :style="[
                            {'animation-duration': parseFloat(lyric[index+1 > lyric.length - 1 ? lyric.length - 1 : index+1][0] - parseFloat(lyric[index][0])) + 's'}
                            ,
                            {
                            'animation-play-state':isPlay ? 'running' :'paused'
                            }
                        ]">
                            {{item[1]}}
                        </span>
                    </span>
                </li>
            </ul>
        </div>
        <ul class="setting">
            <li class="iconfont icon-xin1"></li>
            <li class="iconfont icon-BAI-pinglun"></li>
            <li class="iconfont icon-icon--"></li>
            <li class="iconfont icon-more-vert"></li>
        </ul>
        <div class="progressBar">
            <p class="start">{{currentTime|zhuanhuan}}</p>
            <p class="range">
                <span class="duration" @click="gotoTime($event)">
                    <span class="currentTime" :style="{width:currentTime/ duration *100 + '%'}"></span>
                </span>
            </p>
            <p class="end">{{duration|zhuanhuan}}</p>
        </div>
        <div class="controller">
            <p class="iconfont playmodelbtn " :class="[{'icon-xunhuan':playState === 'all'},{'icon-singlecycle':playState === 'once'},{'icon-bofangye-caozuolan-suijibofang':playState === 'random'}]" @click="changeplayState"></p>
            <ul>
                <li class="iconfont icon-previous" @click="goprev"></li>
                <li class="iconfont" @click="paused_play" :class="[isPlay == true ? 'icon-pause-20' : 'icon-bofang' ]"></li>
                <li class="iconfont icon-next" @click="gonext"></li>
            </ul>
            <p class="playlistbtn iconfont icon-zhankaicaidan" @click="isShowPlayListBtn"></p>
        </div>
        <div class="playlist" :class="{cur:isShowPlayList}">
            <ul>
                <li v-for="(item,index) in audio.album" :class="{cur:index == audio.index}" @click="playList(index)">
                    <span class="iconfont" :style="{fontSize:index != audio.index ? '14px' : '28px'}" :class="{'icon-laba' : index == audio.index}">{{index != audio.index ? index+1 : ''}}</span>
                    <span>{{item.musicName}}</span>
                </li>
            </ul>
            <footer>
                <span class="iconfont icon-guanbi" @click="isShowPlayListBtn"></span>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        props:["audio"],
        data(){
            return{
                isShowLyric:false,
                isShowPlayList:false,
                duration:0,
                currentTime:0,
                isPlay:true,
                // 播放模式 all once random
                playState:"all",
                // 播放的歌词
                lyric:[]
            }
        },
        watch:{
            playerIndex(){
                var self = this;
                this.axios.get(this.audio.album[this.playerIndex].musicLyric).then(data=>{
                    self.lyric = self.parseLyric(data.data);
                })
            },
            '$store.state.audio.albumIndex'(){
                var self = this;
                this.axios.get(this.audio.album[this.playerIndex].musicLyric).then(data=>{
                    self.lyric = self.parseLyric(data.data);
                })
            }
        },
        computed:{
            playerIndex(){
                return this.$store.state.audio.index;
            }
        },
        methods:{
            goback(){
                this.$store.commit("SHOWORHIDEPLAYER",{
                    isShowAudio:false
                })
            },
            paused_play(){
                // 暂停和播放
                this.isPlay = !this.isPlay;
                if(this.isPlay != true){
                    document.querySelector("audio").pause();
                }else{
                    document.querySelector("audio").play();

                }
            },
            play(){
                this.duration = document.querySelector("audio").duration;
                this.currentTime = document.querySelector("audio").currentTime;

                if( document.querySelector("audio").ended){

                    if( this.playState === "all"){
                        if ( this.playerIndex === this.audio.album.length -1) {
                            this.changeMusic(0)
                        }else{
                            this.changeMusic(this.playerIndex+1)

                        };
                    }else if( this.playState === "once"){
                        this.changeMusic(this.playerIndex);
                        // 重新加载音频
                        document.querySelector("audio").load();

                    }else if( this.playState === "random"){

                        let index = ~~(Math.random() * this.audio.album.length)
                        this.changeMusic(index)

                    }
                };
                var lyricHeight = 0;
                if(document.querySelector(".lyric")){
                    lyricHeight = parseInt(getComputedStyle(document.querySelector(".lyric"))["height"]);
                    for (var i = 0; i < this.lyric.length -1; i++) {
                        // 当前的播放时间若 大于 循环到的那一条的歌词前的时间，
                        // 说明当前播放的就是该时间对应的歌词
                        if( this.currentTime > this.lyric[i][0]){
                            document.querySelector(".lyric ul").style.top = lyricHeight/2 - 26 *(i+1) + "px";
                        }
                    };
                }

            },
            gotoTime(e){
                // 点击跳转
                document.querySelector("audio").currentTime = e.offsetX / parseInt(getComputedStyle(document.querySelector(".duration")).width) * document.querySelector("audio").duration;
            },
            goprev(){
                // 上一首，当当音乐小于等于0的时候什么都不做，大于0达能到上一首
               if(  this.playerIndex <= 0 ){
                    return
               }else{
                this.changeMusic(this.playerIndex-1)
               }
            },
            gonext(){
                // 下一首
                if( this.playState === 'random'){
                    let index = ~~(Math.random() * this.audio.album.length);
                    this.changeMusic(index)
                }else{
                    if ( this.playerIndex >= this.audio.album.length -1) {
                        this.changeMusic(0)

                    }else{
                        this.changeMusic(this.playerIndex+1)

                    };
                }

            },
            changeMusic(index){
                this.isPlay = true;
                //单曲和专辑的数据结构不一样，只能分开写
                if( this.$store.state.audio.albumIndex == null){
                    // 换单曲的命令
                    this.$store.commit("CHANGEMUSIC",{
                        index:index,
                        playerbg:this.audio.album[index].playerbg,
                        albumbg:this.audio.album[index].singerImg
                    })
                }else if( typeof this.$store.state.audio.albumIndex == 'number'){
                    // 换专辑的命令
                    this.$store.commit("CHANGEMUSIC",{
                        index:index,
                        playerbg:this.audio.playerImg,
                        albumbg:this.audio.albumImg
                    })
                }
            },
            changeplayState(){
                // 点击切换模式
                if( this.playState === "all"){
                    this.playState = "once";
                }else if( this.playState === "once"){
                    this.playState = "random";
                }else if( this.playState === "random"){
                    this.playState = "all";
                }

            },
            isShowPlayListBtn(){
                // 显示抽屉
                this.isShowPlayList = !this.isShowPlayList;
            },
            playList(index){
                this.changeMusic(index);
            },
            showLyric(){
                this.isShowLyric = true;
                // 显示歌词
                // var self = this;
                // this.axios.get(this.audio.album[this.playerIndex].musicLyric).then(data=>{
                //     self.lyric = self.parseLyric(data.data);
                // })
            },
            parseLyric(lyric){
                var arr = [];
                // 换成一行，放到数组里
                var lines = lyric.split(/\n/);
                // 得到时间
                var getLyricTime = /\[\d{2}:\d{2}.\d{2}\]/g;
                // 使用while语句，得到有时间的歌词
                while(!getLyricTime.test(lines[0])){
                    lines = lines.splice(1)
                }
                // 去掉歌词后面的空行
                if(lines[lines.length-1].length === 0){
                    lines.pop();
                }
                // 遍历歌词数组将歌词的时间转换成秒
                lines.forEach(item=>{
                    // 得到时间和歌词的分界点
                    var index = item.indexOf("]");
                    // 得到时间
                    var time = item.substr(1,index-1);
                    // 将01:12.22 转换成秒
                    var timeArr = time.split(":");
                    // 得到歌词
                    var geci = item.substr(index+1);
                    arr.push([timeArr[0]*60 + parseFloat(timeArr[1]),geci]);
                })

                return arr;
            },
            hideLyric(){

                this.isShowLyric = !this.isShowLyric;
            }
        },
        filters:{
            zhuanhuan(time){
                var m = 0,
                    s = 0,
                    _m = '00',
                    _s = '00';
                time = Math.floor(time % 3600);
                m = Math.floor(time / 60);
                s = Math.floor(time % 60);
                _s = s < 10 ? '0' + s : s + '';
                _m = m < 10 ? '0' + m : m + '';
                return _m + ":" + _s;
            }
        }
    }
</script>

