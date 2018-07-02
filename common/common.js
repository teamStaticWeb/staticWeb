
/*
*
* describe: config
*
*/
var version = "1.0.0";
var webInfo = "/lzgl";


/*
*
* describe: 复写alert方法
* @param -> @msg: (type:string; des: 描述信息)
* @param -> @isSuccess:(type:boolean des: isSuccess 不传或传0 显示成功图标；传1显示失败图标；)
*
*/

window.alert = function (msg, isSuccess, callback) {

	var tipImg = "";

	!isSuccess ?  tipImg = IcoOk : tipImg = icoFalse;

    if ($('#selfAlert').length <= 0) {

        var elem = $(dialogHTML).get(0);//将html转为dom元素
        $(elem).attr("id","selfAlert");//$(elem) 将dom元素转为jquery元素
        $(elem).find(".modal-body").html(tipImg+'<span class= "msg">'+msg+'</span>');
        $(elem).find(".modal-footer").html(BtnConfirm);
        $('body').append($(elem).clone()); 
    }
    $('#selfAlert').on('hidden.bs.modal', function () {
        $('#selfAlert').remove();
        if (typeof callback == 'function') {
            callback();
        }
    }).modal('show');
}



/*
*
* describe: 向页面渲染dom元素
* @param -> @dom: (type:json; des: The elements contained in the page)
* @param -> @calback:(type:fuction des: user-defined function)
*
*/
function render(dom,callback){
	// console.log(typeof(dom),typeof callback);
	// var $Dom = dom || "";
	// $Dom.html(dom.html);

	if(typeof(dom) == 'object'){
		var $Dom = $(dom.element);
		$Dom.html(dom.html);
	}

	if (typeof(callback) == 'function'){
		callback();
	}
	
}


/*
*
* describe: 页面跳转
* @param -> @page: (type:string; des: 页面链接字符串)
*
*/
function jumpPage(page){
	if(window.location.href.split("p=")[1]!=page){
		window.location.href=webInfo+"/mvc/jump?p="+page;
	}
}


/*
*
* describe: 验证不能为空公共方法
*
*/
function emptyValidate(){
	var prompt = false;
	$.each($("input[required]"),function(index,item){
		if($(item).val().length == 0){
			alert($(item).attr("prompt")+"不能为空",1);
			prompt = false;
		}else{
			prompt = true;
		}
	});
	return prompt;
}


/*
*
* describe: 页面顶部注销
*
*/
function userOut(){

	ajax.postNoParam(webInfo+"/mvc/logout",function(){
		jumpPage("login/login");
	});

}

/*
*
* describe: 获取用户信息
*
*/

// function getUser(){
// 	if (geturl() == "login" || geturl() == "zhmm" || geturl(window.location.href.split("&")[0]) == "zhmm_cs"){
// 		return;
// 	}
// 	var dlr ="";
// 	ajax.postNoParam(webInfo+"/mvc/getUser",function(data){
// 		if(data.error=="nologin"){
//    			jumpPage("login/login");
//    		}else{
//    			setKey("ygh",data.result[0].YGH);
//    			setKey("name",data.result[0].XM);
//    			setKey("userid",data.result[0].USERID);
//    		}
//    		dlr = data;
// 	});

// 	return dlr;
// }



/*
*
* describe: 一级导航对应的方法
*
*/
// function setHeader(){
// 	var menu = $('nav>p>a');
// 	var yjcdm = getKey("yjcdm");
	
// 	if(yjcdm ==""){
// 		getmenu("lzda");
// 		$("a[data-name=lzda]").addClass("active");
// 	}else{
// 		getmenu(yjcdm);
// 		$("a[data-name="+yjcdm+"]").addClass("active");
// 	}
// 	$(".wellcome a span").html(getKey("name"));
	
// 	menu.click(function(){
// 		for(var i = 0;i< menu.length; i++){
// 			$(menu[i]).removeClass("active");
// 		};
// 		$(this).addClass("active");
// 		setKey("yjcdm",$(this).attr("data-name"));
// 		getmenu($(this).find("a").attr("data-name"));
// 	});
// }

// /*
// *
// * describe: 获取二级菜单
// *
// */

// function getmenu(parent){

// 	if (geturl() == "login" || geturl() == "zhmm" || geturl(window.location.href.split("&")[0]) == "zhmm_cs"){
// 		return;
// 	}
// 	var param = {
// 		"table":"menu",
// 		"coloum":"*",
// 		"where":"and YJCDM="+F.strConvert(parent)
// 	};

// 	// ajax.post(webInfo+"/mvc/getMenu",param,function(data){
// 	// 	console.log("data",data);
// 	// });
// }

/*
*
* describe: 设置session公共方法
*
*/
function setKey(key,value){
	var text = "";
	var param = {
		"key":key,
		"value":encodeURI(value)
	};
	// ajax.post(webInfo+"/mvc/setKey",param,function(data){
	// 	text = data;
	// });
	return text;
}

/*
*
* describe: 获取session的公共方法
*
*/
function getKey(key){
	var text = "";
	var param = {
		"key":key
	};
	// ajax.post(webInfo+"/mvc/getKey",param,function(data){
	// 	text = decodeURI(data[key]);
	// });
	return text;
}


console.log("common外面");
$(function(){

	// getUser();
	//setHeader();

	$("#jWellcomeName").click(function(){
		$("#jLogout").toggle();	
	})

	$("#jLogout").click(function(){
		userOut();
	})


})