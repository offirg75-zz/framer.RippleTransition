# RippleTransition.framer
Framer JS Module for a Material design like ripple transition

![Animated GIF Sample](https://raw.githubusercontent.com/offirg75/framer.RippleTransition/master/RippleTransition.gif)

## Example
[Framer Prototype](http://share.framerjs.com/jzaf459ldxnu/)

## Installation
Put rippleModule.coffee in the modules folder.

## Instructions

1. Require the module:
````
module = require("rippleModule")
````

2. Create the ripple layer by calling the module function ripple(layerA, layerB, originX, originY, animationOptions)
````
ripl = rippleModule.ripple layer1, layer2, 50, 50, animationOptions
````

3. Change the ripple state ("fill", "empty") by using the states Framer js API
````
ripl.states.switch "fill"
ripl.states.switch "empty"
````
