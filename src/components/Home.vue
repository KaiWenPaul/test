<template>
    <div class="home">
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索地铁站">
        </mt-search>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">出租</mt-tab-item>
            <mt-tab-item id="2">求租</mt-tab-item>
        </mt-navbar>
       <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="lists" @click="goDetail()">    
                    <ul class="user">
                        <li class="user_info">
                            <div class="head_img">
                                <img style="width:100%;height:100%;" src="../assets/images/headPic.jpg" alt="我的头像">
                            </div>
                            <div style="float:left;width:75%;height:50px;">
                                <div style="display:block;height:25px;line-height:25px;">
                                    <span style="float:left;color:#4DB4D9;"> Paul </span>
                                    <span style="float:right"> ￥1000 </span>
                                </div>
                                <span style="display:block;">2018-03-05 17:25</span>
                            </div>
                        </li>
                        <li style="font-size:14px;height:25px;line-height:25px;padding-left:10px;padding-right:20px;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;">这里地理位置十分优越，适合上班。离地铁很近很近的5454545454545455454</li>
                        <li style="height:70px;width:100%;margin-top:10px;">
                            <div style="width:30%;height:70px;float:left;text-align:center;"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/avator.jpg" alt=""></div>
                            <div style="width:30%;height:70px;float:left;text-align:center;margin:0px 3.33%"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/minyao.jpg" alt=""></div>
                            <div style="width:30%;height:70px;float:left;text-align:center;"><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/love.jpg" alt=""></div>
                        </li> 
                    </ul>
                </div>
               
                   
            </mt-tab-container-item>
            <mt-tab-container-item id="2" style="font-size:12px;">
                <div class="lists">
                    <a href="#" class="messages">
                        <ul class="user">
                            <li class="user_info">
                                <div class="head_img">
                                    <img style="width:100%;height:100%;" src="../assets/images/china.jpg" alt="我的头像">
                                </div>
                                <div style="float:left;width:75%;height:50px;">
                                    <div style="display:block;height:25px;line-height:25px;">
                                        <span style="float:left;color:#4DB4D9;"> Mary </span>
                                        <span style="float:right"> ￥800 </span>
                                    </div>
                                    <span style="display:block;">2018-05-10 17:25</span>
                                </div>
                            </li>
                            <li style="font-size:14px;height:20px;line-height:20px;">这里地理位置十分优越，适合上班。离地铁很近很近的</li>
                            <li style="font-size:0.24rem;height:60px;width:100%;margin-top:5px;">
                              <div style="width:30%;height:60px;float:left;"><img style="width:100%;height:100%;" src="../assets/images/avator.jpg" alt=""></div>
                              <div style="width:30%;height:60px;float:left;margin:0px 3.33%"><img style="width:100%;height:100%;" src="../assets/images/minyao.jpg" alt=""></div>
                              <div style="width:30%;height:60px;float:left;"><img style="width:100%;height:100%;" src="../assets/images/love.jpg" alt=""></div>
                            </li>
                        </ul>
                    </a>
                 </div>

            </mt-tab-container-item>
        
        </mt-tab-container>
       <FooterBar :selected="tab"></FooterBar>
    </div>
</template>
<script>
    import axios from  'axios'
    import FooterBar from './Footer'
    export default{
         components: {
            FooterBar
        },
         data() {
         return {
            value:'',
            selected:'1',
            tab:'tab1'
            };
         },
         methods:{
             goDetail(){
                 this.$router.push({path:"/detail"})
             }
         }
    }
</script>
<style>
.mint-search{
    height: 8vh;
}
.mint-searchbar{
     background:#4DB4D9;
}
 .mint-navbar{
     background:#4DB4D9;
     padding-top:20px;
 } 
 .mint-searchbar-cancel{color:#fff;} 
 .mint-searchbar-inner .mintui-search{
     font-size:14px;
 }
 .mint-searchbar-inner{
     height:25px;
     border-radius:5px;
 }
 .mint-searchbar-core{
     font-size:14px;
 }
 .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #fff;
    color: #fff; 
 } 
 .mint-tabbar > .mint-tab-item.is-selected{
     background-color:#fff;
     color: #4DB4D9;
 }
 .mint-tabbar{
     background-color:#fff;
 }
 .mint-tab-item-label{font-size:14px;}
 .lists{
     margin:30px 0;
     padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: block;
    color:#000;
 }
 
 .lists .messages{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: block;
    color:#000;
 }
 .lists  .user{padding-bottom: 1rem;padding-top: 0.3rem; border-bottom: 1px solid #dfdfdf}
 .lists  .user .user_info{height:52px;font-size:14px;margin-bottom:5px;}
 .lists  .user .user_info .head_img{
    width: 55px;
    height: 55px;
    float: left;
    background-color: #9e9e9e;
    border-radius: 50%;
    margin-right: 1rem;
    overflow: hidden;
    margin-left:10px;
    }
 .lists .user .user_info .nackname{
    width: 4.9rem;
    height: 0.4rem;
    margin-top: 0.15rem;
    float: left;
    color: #4DB4D9;
    }
 .lists  .user .user_info .release_time{
    width: 4.9rem;
    height: 0.4rem;
    margin-top: 0.05rem;
    float: left;
    color: #C5C4C4; 
  }
 .lists  .user .user_title{color: #474646;font-size: 14px;margin-top: 0.1rem;margin-bottom: 0.1rem;}

</style>