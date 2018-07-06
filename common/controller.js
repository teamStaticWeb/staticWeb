console.log("controller外面");
$(function(){
	console.log("controller");
	// 分享
    $('#weixin').click(function(){
      $(this).next().show()
    })
    $('.close').click(function(){
      $(this).parent().hide()
    })
})
