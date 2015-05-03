# Add the folowing line to your project in Framer Studio.
# module = require "module"
# Reference the contents by name, like module.myFunc() or module.myVar

defaultCurve = "cubic-bezier(0.75, 0, 1, 1)"
defaultTime = 0.2
defaultRepeat = 0
defaultAnimationOptions = {curve:defaultCurve, time:defaultTime, repeat:defaultRepeat}

exports.ripple = (layerA, layerB, originX, originY, animationOptions = defaultAnimationOptions)->
	animationOptions.curve ?= defaultCurve
	animationOptions.time ?= defaultTime
	animationOptions.repeat ?= defaultRepeat

	circleBoundingRad = Math.sqrt(Math.pow(layerA.width, 2) + (Math.pow layerA.height, 2))/2
	circleEndX = layerA.width/2-circleBoundingRad
	circleEndY = layerA.height/2-circleBoundingRad
	circle = new Layer x:originX, y:originY, width:0, height:0, backgroundColor:"transparent", borderRadius:"50%", superLayer:layerA
	circle.addSubLayer layerB
	layerB.force2d = true

	circle.states.add
		empty: {x:originX, y:originY, width:0, height:0}
		fill: {x:circleEndX, y:circleEndY, width:circleBoundingRad*2, height:circleBoundingRad*2}
	circle.states.animationOptions = animationOptions

	circle.on Events.StateWillSwitch, (oldState, newState)->
		# layerB.states.switch newState
		properties = {x:-originX, y:-originY}
		if newState is "fill" then properties = {x:-circleEndX, y:-circleEndY}
		layerB.animate
			properties: properties
			curve: animationOptions.curve
			time: animationOptions.time
			repeat: animationOptions.repeat

	circle.states.switchInstant "empty"
	return circle
