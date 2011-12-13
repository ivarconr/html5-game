//Global and ugly...
speed = {
    dx: 2,
    dy: 2
};

$(function() {    
    //Das loop
    var t = setInterval(function() {
        var pos = $(".movable").position();
        var y = $(".board").height() - $(".movable").height()- 4;
        var x = $(".board").width() - $(".movable").width() - 4;
        //console.debug("pos.top=%s", "boundary.top=%s", pos.top, y);

        if(pos.top< 0 || pos.top > y) {
	    speed.dy = speed.dy > 0 ? Math.floor(Math.random()*6) : Math.floor(Math.random()*6)*-1;
            speed.dy = speed.dy*-1;
        } 
        if(pos.left < 0 || pos.left > x)  {         
	    speed.dx = speed.dx > 0 ? Math.floor(Math.random()*6) : Math.floor(Math.random()*6)*-1;
            speed.dx = speed.dx*-1;
        }
        $(".movable").css({"left": (pos.left + speed.dx) + "px", "top": (pos.top+speed.dy)+"px"});
    }, 10); 
});
