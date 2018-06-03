$(document).ready(function($){
	
/*登录链接*/
$("#loginLink").click(function(){
	var loginHtml=$("#loginHtml").html();
	showLayer(loginHtml,400,300,closeCallback);
	
/*登录表单校验*/
	$("#loginSubmitBtn").click(function(){
		var username=$("input[name='username']").val();
		var password =$("input[name='password']").val();
		if(username==='imooc'&&password==='imooc'){
			alert("登录成功");}
			else{
				$(".error-msg").html("账号或密码输入错误");
		}
	});
});

/*注册链接事件*/
$("#regeLink").click(function(){
	var regeHtml=$("#regeHtml").html();
	showLayer(regeHtml,400,350,closeCallback);
	
	/*注册表单校验*/
	$("#regeSubmitBtn").click(function(){
		var username=$("input[name='username']").val();
		var password=$("input[name='password']").val();
		var repassword=$("input[name='repassword']").val();
		if(username==='imooc'&&password==='imooc'&&repassword===password){
			alert("注册成功");
			}else{
				$(".error-msg").html("账号或密码输入错误");
		}
	});
	});

/*弹出层关闭回调函数*/
function closeCallback(){
	$(".error-msg").html("");
}
/*显示弹出层*/
function showLayer(html,width,height,closeCallback){
	$("#layer-mask").show();
	$("#layer-pop").show();
	$("#layer-pop").css({
		width:width,
		height:height
	});
	$("#layer-content").html(html);
	$("#layer-close").click(function(){
		hideLayer();
		closeCallback();
	});
};
/*隐藏弹出层*/
 function hideLayer(){
 	$("#layer-mask").hide();
 	$("#layer-pop").hide();
 	
 };

});
