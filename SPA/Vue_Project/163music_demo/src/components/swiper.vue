<style scoped lang='stylus'>
    img{
        width:100%;
        display:block;
    }
</style>
<template>
    <div>
        <swiper :options="swiperOption" >
           <!-- slides -->
           <swiper-slide v-for="item in swiperArr">
               <img :src="item.imagesSrc" alt="" />
           </swiper-slide>
           <!-- Optional controls -->
           <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        props:["swiperArr"],
        data(){
            return {
                swiperOption:{
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        }
    }
</script>