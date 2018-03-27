var pretty  =function(el ,opt){
	this.$element = el,
	this.defaults  =  {
		"color":"red",
		"fontSize":"20px",
		"backgroundColor":"blue"
	};
	this.options  = $.extend({},this.defaults,opt);	
};
pretty.prototype  =  {
	 pty: function() {
	            return this.$element.css({
	                'color': this.options.color,
	                'fontSize': this.options.fontSize,
	                'backgroundColor': this.options.backgroundColor
	            });
        }
}