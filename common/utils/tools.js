console.log("tool外面");
$(function(){
	console.log("tool");
})
var F = {
	strConvert: function(literal) {
		//console.log("literal",literal);
	    var result = literal.substring(0, literal.length);
	    result = $.trim(result.replace(/'/g, '\''));

	    return '\''+result+'\'';
	}
};
var ajax = {
	post: function(url,dataObj,successCallback,error){
		var postUrl = url || webInfo;
		var dataJson = JSON.stringify(dataObj);
		$.ajax({
			contentType: "application/json; charset=utf-8",  
		   	url: postUrl,
		   	type :"POST",
		   	dataType : "json",
		   	async:false,
		   	data: dataJson,
		   	success:function(data){
				if(data.length == 0){
		   			successCallback();
		   		}else{
		   			successCallback(data);
		   		}
		   	},
		   	error:function(error){
		   		var sError = "系统故障,请联系管理员";
				sError = error || sError;
				alert(sError,1);
		   	}
		});
	},
	postNoParam: function(url,successCallback){
		 $.ajax({
			contentType: "application/json; charset=utf-8",  
		   	url: url,
		   	type :"POST",
		   	async:false,
		   	success: function(data){
		   		if($.isEmptyObject(data) || data.length == 0){
		   			successCallback();
		   		}else{
		   			successCallback(data);
		   		}
		   	},
		   	error:function(error){
		   		var sError = "系统故障,请联系管理员";
				sError = error || sError;
				alert(sError,1);
		   	}
		});
	} 
}




