rippleModule = require "rippleModule"
animOps = {
	curve:"cubic-bezier(0.75, 0, 1, 1)"
	time:0.3
}

wallpaper1 = new Layer 
	x:0, y:0, width:1080, height:1920, backgroundColor:"blue"
wallpaper2 = new Layer 
	x:0, y:0, width:1080, height:1920, image:"images/HomeWallpaper.png"
button = new Layer
	width:300, height:300, backgroundColor:"white", borderRadius:"50%", shadowX:10, shadowY:8, shadowBlur:40, shadowColor:"black"
Utils.labelLayer(button, "Ripple")
button.style = {"font-size":"60px", "color":"black"}
button.center()

ripl = rippleModule.ripple wallpaper1, wallpaper2, button.midX, button.midY, animOps

wallpaper1.on Events.TouchEnd, (event, layer) ->
	ripl.states.next "fill", "empty"