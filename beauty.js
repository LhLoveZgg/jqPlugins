// 1.面向jQuery本身使用的插件,常用的两种方式
	$.fnName = function(){};

	$.extend({
		fnName:function(){}
	});
// 2.面向jQuery对象使用的插件
	$.fn.beauty = function(opt){
		var defaults  = {
			"color":"red",
			"fontSize":"16px"
		};
		//使用$.extend来进行传递进来的参数和插件默认值进行合并，以此来保护插件的默认值
		var  setting = $.extend({},defaults,opt);
		return this.css({
			"color":setting.color,
			"fontSize":setting.fontSize
		});
	}