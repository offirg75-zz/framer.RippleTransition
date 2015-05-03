# Import the ripple transition module
rippleModule = require "rippleModule"

# Define the animationOptions object
animOps = {
	curve:"cubic-bezier(0.75, 0, 1, 1)"
	time:0.3
}

# Create the 2 layers to switch between
wallpaper1 = new Layer 
	x:0, y:0, width:1080, height:1920, backgroundColor:"blue"
wallpaper2 = new Layer 
	x:0, y:0, width:1080, height:1920, image:"images/HomeWallpaper.png"

# Create the button layer that activates the animation
button = new Layer
	width:300, height:300, backgroundColor:"white", borderRadius:"50%", shadowX:10, shadowY:8, shadowBlur:40, shadowColor:"black"
Utils.labelLayer(button, "Ripple")
button.style = {"font-size":"60px", "color":"black"}
button.center()

# Call module to create the ripple object
ripl = rippleModule.ripple wallpaper1, wallpaper2, button.midX, button.midY, animOps

# On button tap, toggle the ripple's states: fill, empty
wallpaper1.on Events.TouchEnd, (event, layer) ->
	ripl.states.next "fill", "empty"