<template>
    <div class="home">
      <div style="height:150px;width:100%;text-align:center;background:#dfdfdf;">
       <mt-swipe :auto="2000" :speed="1300">
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/avator.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/minyao.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img style="max-width:100%;max-height:100%;vertical-align: middle;" src="../assets/images/love.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
       </div>
       <div class="detail_box">
        <ul class="detail">
          <li style="border-bottom:1px solid #dfdfdf;height:60px;">
            <div class="head_img">
                <img style="width:100%;height:100%;" src="../assets/images/china.jpg" alt="我的头像">
            </div>
            <div style="float:left;width:75%;height:50px;">
                <div style="display:block;height:25px;line-height:25px;">
                    <span style="float:left;color:#4DB4D9;"> Mary </span>
                </div>
                <span style="display:block;">女神</span>
            </div>
          </li>
          <li style="border-bottom:1px solid #dfdfdf;padding-bottom:15px;">
           <p style="height:30px;line-height:30px;padding-left:10px;">11号线嘉定西</p>
           <p style="height:25px;line-height:25px;padding-left:10px;">3室2厅1卫</p>
           <p style="height:25px;line-height:25px;padding-left:10px;">￥1000</p>
           <p style="height:25px;line-height:25px;padding-left:10px;">微信：Paul12103232</p>
           <div style="height:30px;line-height:30px;">
             <span style="height:100%;min-width:60px;border:1px solid #4DB4D9;display:inline-block;text-align:center;color:#4DB4D9;border-radius:5px;margin:0px 5px;padding:0 2px;">单间</span>
             <span style="height:100%;min-width:60px;border:1px solid #4DB4D9;display:inline-block;text-align:center;color:#4DB4D9;border-radius:5px;margin:0px 5px;padding:0 2px;">限男</span>
           </div>
          </li>
          <li>
            <p style="text-indent:1em;padding:10px 3px;">
             一个人如果愿意放下自己的身段，去主动迁就你、包容你，这样的人，一定很爱你，好的感情没有公式，没有统一的密码，有的，只是用心。
            </p>
          </li>
        </ul>
       </div>
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
            tab:''
            };
         },
         methods:{
           handleChange(index) {
                
            }
         }
    }
</script>
<style>
.detail_box{
    margin:30px 0;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    display: block;
    color:#000;
}
.detail .head_img{
    width: 3.1rem;
    height: 3.1rem;
    float: left;
    background-color: #9e9e9e;
    border-radius: 50%;
    margin-right: 1rem;
    overflow: hidden;
    margin-left:10px;
}

</style>