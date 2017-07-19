var $elem = $('#main-panel');
var $content = $elem.find('div.contents');
var $ctrl = $elem.find('div.control');

//clone the first and the last item;
var $firstElem = $elem.find('div.contents div:first-child');
var $lastElem = $elem.find('div.contents div:last-child');

$firstElem.before($lastElem.clone());
$lastElem.after($firstElem.clone());
var $items = $content.find('div.item');

//set the content and items width
var itemTotal = $content.find('.item').length;
$content.css('width',itemTotal*100+'%');
$items.css('width',100/itemTotal+'%');

$content.css('transform','translateX('+-1*(100/itemTotal)+'%)');

var timer = null;
var index = 1;

$ctrl.on('click','.prov',function(){
	if(index<=1){

		index = itemTotal - 2;
	}else{
		index --;
	}
	update();
	clearInterval(timer);
	start();
})
$ctrl.on('click','.next',function(){
	if(index<itemTotal-2){
		index ++;
	}else{
		index = 1;
	}
	update();
	clearInterval(timer);
	start();
})

var start = function(){
	clearInterval(timer);
	timer = setInterval(function(){
		if(index<itemTotal-1){
			index ++;
			update();
		}else{
			index = 1;
			setPosition(0,update);
		}
		console.log(index);
	},1000)
}


var update = function(){
	$content.css('transition','all .5s ease');
	$content.css('transform','translateX('+-index*(100/itemTotal)+'%)');
}

var setPosition = function(i,callback){
	$content.css('transition','');
	$content.css('transform','translateX('+-i*(100/itemTotal)+'%)');
	alert();
	callback();
}

start();