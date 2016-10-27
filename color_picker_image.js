// Plugin
$.fn.color_picker_image = function(options, color_set) {
	// опции по умолчанию
    var settings = $.extend({
        // These are the defaults.
        panels: [{
        	"active":true, 
        	"image": true, 
        	"color-set":true,
        	"color-find":true,
        	"color-table":true
        }],

    }, options);
    var res="";
    var rand=Math.floor((Math.random() * 10000) + 1);
    var color_picker_image=$('<div/>', {
	    id: 'color_picker_image'+rand	
	});
	
    
 //    document.createElement("div");  
 //    color_picker_image.
 //    // интерактивная панель подборки
 //   	res=res+'\
	// 	<div class="row">\
	// 	    <div class="col-xs-2" style="padding-right: 4px;">\
	// 	        <span id="canavas_color_'+rand+'"></span>\
	// 	    </div>\
	// 	    <div class="col-xs-10" style="padding-left: 0px;">\
	// 	        <span id="canavas_name_'+rand+'"></span>\
	// 	    </div>\
	// 	</div>\
	// ';
	// canavas_color=$('#pro_canavas_color_'+rand);
	// var t=this.offset().top;
	// var l=this.offset().left;
	// var w=this.outerWidth();
	// var h=this.outerHeight();



	
};
  
