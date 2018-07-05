var footerHtml = `<div class="footer">
    <div class="container-fluid bg-black-18">
      <div class="container footer-top">
        <div class="row">
          <div class="share col-md-5">
            <a href="javascript:window.open('http://twitter.com/home?status='+encodeURIComponent(document.location.href)+' '+encodeURIComponent(document.title));void(0)"><img src="../assets/img/foot/twitter.png"/></a>
            <a class="fav_facebook" rel="nofollow" href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&t='+encodeURIComponent(document.title));void(0)"><img src="../assets/img/foot/facebook.png"/></a>
            <a href="http://v.t.sina.com.cn/share/share.php?url=http://www.jb51.net&title='分享内容'" target="_blank"><img src="../assets/img/foot/sina.png"/></a> 
            <a href="http://connect.qq.com/widget/shareqq/index.html?title=qqhaoyou&url=http://www.jb51.net&desc=还不错哦&pics=&site=优酷" target="_blank"><img src="../assets/img/foot/qq.png"/></a>
            <span id="weixin"><img src="../assets/img/foot/weixin.png"/></span>
            <div class="weixin">
              <span class="close">X</span>
              <div>
                <img src="../assets/img/foot/weixinCode.png">
                <p>扫码分享</p>
              </div>
            </div>
          </div>

          <div class="f-email col-md-7">
            <span>SUBCRIBLE  NEWSLETTER</span>
            <input type="text" name="" placeholder="Enter your email address">
            <img src="../assets/img/foot/f-email.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-black-21">
      <div class="container footer-middle">
        <div class="row">
          <div class="f-left col-md-4 col-sm-3">
            <img src="../assets/img/foot/f-logo.jpg" />
            <h4>
              微信公众号
            </h4>
            <img src="../assets/img/foot/f-ma.jpg" />
          </div>
          <div class="f-right col-md-8 col-sm-9">
            <dl>
              <dt>会员服务</dt>
              <dd>
                <a href="#">联系我们</a>
                <a href="#">退换服务</a>
                <a href="#">网站地图</a>
              </dd>
            </dl>
            <dl>
              <dt>其他</dt>
              <dd>
                <a href="#">品牌专区</a>
                <a href="#">礼品券</a>
                <a href="#">注册会员</a>
                <a href="#">优惠商品</a>
              </dd>
            </dl>
            <dl>
              <dt>会员中心</dt>
              <dd>
                <a href="#">会员中心</a>
                <a href="#">历史订单</a>
                <a href="#">注册会员</a>
                <a href="#">优惠商品</a>
              </dd>
            </dl>
            <dl class="help">
              <dt>帮助中心</dt>
              <dd>
               <span>Hotline：400 - 671 - 1878</span>
               <span>Open - Close： 09:00 - 21:00</span>
               <span>Mail： <a href="mailto:yimijia@163.com">yimijia@163.com</a></span>
              </dd>
              <dt class="pay">付款接受</dt>
              <dd class="row">
                <div  class="col-md-6"><img src="../assets/img/foot/paypal.jpg" /></div>
                <div  class="col-md-6"><img src="../assets/img/foot/american.jpg" /></div>
                
                
                
              </dd>
              <dd class="row">
                <div  class="col-md-6">
                <img src="../assets/img/foot/amazon.jpg" />
              </div>
              <div  class="col-md-6">
                <img src="../assets/img/foot/visa.jpg" />
              </div>
                
              </dd>
              
            </dl>
          </div>
        </div>
        <div class="row footer-bottom">
          <p class="col-md-7">津ICP备15003667号    快递查询 天津尚柏电子商务有限公司©2016</p>
          <div class="col-md-5">
            <a href="#">关于我们</a>
            <a href="#">配送信息</a>
            <a href="#">如何选购</a>
            <a href="#">购物须知</a>
          </div>
        </div>
      </div>
      https://www.jb51.net/html5/603468.html
    </div>
  </div>`;

/*
*
* describe: 获取当前url
* author: wxl
*
*/

function geturl(url){
	var myUrl = url;
	if(url == undefined){
		myUrl = window.location.href;
	}
	var urlname= myUrl.substring(myUrl.lastIndexOf("/")+1,myUrl.length);
	return urlname;
}

/*
*
* describe: 判断注册，登录，修改密码不加载头部 侧边栏
* author: wxl
*
*/

//头部
document.write(footerHtml);


