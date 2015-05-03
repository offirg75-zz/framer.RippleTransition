require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"rippleModule":[function(require,module,exports){
var defaultAnimationOptions, defaultCurve, defaultRepeat, defaultTime;

defaultCurve = "cubic-bezier(0.75, 0, 1, 1)";

defaultTime = 0.2;

defaultRepeat = 0;

defaultAnimationOptions = {
  curve: defaultCurve,
  time: defaultTime,
  repeat: defaultRepeat
};

exports.ripple = function(layerA, layerB, originX, originY, animationOptions) {
  var circle, circleBoundingRad, circleEndX, circleEndY;
  if (animationOptions == null) {
    animationOptions = defaultAnimationOptions;
  }
  if (animationOptions.curve == null) {
    animationOptions.curve = defaultCurve;
  }
  if (animationOptions.time == null) {
    animationOptions.time = defaultTime;
  }
  if (animationOptions.repeat == null) {
    animationOptions.repeat = defaultRepeat;
  }
  circleBoundingRad = Math.sqrt(Math.pow(layerA.width, 2) + (Math.pow(layerA.height, 2))) / 2;
  circleEndX = layerA.width / 2 - circleBoundingRad;
  circleEndY = layerA.height / 2 - circleBoundingRad;
  circle = new Layer({
    x: originX,
    y: originY,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderRadius: "50%",
    superLayer: layerA
  });
  circle.addSubLayer(layerB);
  layerB.force2d = true;
  circle.states.add({
    empty: {
      x: originX,
      y: originY,
      width: 0,
      height: 0
    },
    fill: {
      x: circleEndX,
      y: circleEndY,
      width: circleBoundingRad * 2,
      height: circleBoundingRad * 2
    }
  });
  circle.states.animationOptions = animationOptions;
  circle.on(Events.StateWillSwitch, function(oldState, newState) {
    var properties;
    properties = {
      x: -originX,
      y: -originY
    };
    if (newState === "fill") {
      properties = {
        x: -circleEndX,
        y: -circleEndY
      };
    }
    return layerB.animate({
      properties: properties,
      curve: animationOptions.curve,
      time: animationOptions.time,
      repeat: animationOptions.repeat
    });
  });
  circle.states.switchInstant("empty");
  return circle;
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2ZmaXJnNzUvRG9jdW1lbnRzL015X1N0dWZmL0NvZGUvZ2l0aHViL2ZyYW1lci5SaXBwbGVUcmFuc2l0aW9uL1JpcHBsZVRyYW5zaXRpb24uZnJhbWVyL21vZHVsZXMvcmlwcGxlTW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLElBQUEsaUVBQUE7O0FBQUEsWUFBQSxHQUFlLDZCQUFmLENBQUE7O0FBQUEsV0FDQSxHQUFjLEdBRGQsQ0FBQTs7QUFBQSxhQUVBLEdBQWdCLENBRmhCLENBQUE7O0FBQUEsdUJBR0EsR0FBMEI7QUFBQSxFQUFDLEtBQUEsRUFBTSxZQUFQO0FBQUEsRUFBcUIsSUFBQSxFQUFLLFdBQTFCO0FBQUEsRUFBdUMsTUFBQSxFQUFPLGFBQTlDO0NBSDFCLENBQUE7O0FBQUEsT0FLTyxDQUFDLE1BQVIsR0FBaUIsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixPQUExQixFQUFtQyxnQkFBbkMsR0FBQTtBQUNoQixNQUFBLGlEQUFBOztJQURtRCxtQkFBbUI7R0FDdEU7O0lBQUEsZ0JBQWdCLENBQUMsUUFBUztHQUExQjs7SUFDQSxnQkFBZ0IsQ0FBQyxPQUFRO0dBRHpCOztJQUVBLGdCQUFnQixDQUFDLFNBQVU7R0FGM0I7QUFBQSxFQUlBLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFNLENBQUMsS0FBaEIsRUFBdUIsQ0FBdkIsQ0FBQSxHQUE0QixDQUFDLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBTSxDQUFDLE1BQWhCLEVBQXdCLENBQXhCLENBQUQsQ0FBdEMsQ0FBQSxHQUFtRSxDQUp2RixDQUFBO0FBQUEsRUFLQSxVQUFBLEdBQWEsTUFBTSxDQUFDLEtBQVAsR0FBYSxDQUFiLEdBQWUsaUJBTDVCLENBQUE7QUFBQSxFQU1BLFVBQUEsR0FBYSxNQUFNLENBQUMsTUFBUCxHQUFjLENBQWQsR0FBZ0IsaUJBTjdCLENBQUE7QUFBQSxFQU9BLE1BQUEsR0FBYSxJQUFBLEtBQUEsQ0FBTTtBQUFBLElBQUEsQ0FBQSxFQUFFLE9BQUY7QUFBQSxJQUFXLENBQUEsRUFBRSxPQUFiO0FBQUEsSUFBc0IsS0FBQSxFQUFNLENBQTVCO0FBQUEsSUFBK0IsTUFBQSxFQUFPLENBQXRDO0FBQUEsSUFBeUMsZUFBQSxFQUFnQixhQUF6RDtBQUFBLElBQXdFLFlBQUEsRUFBYSxLQUFyRjtBQUFBLElBQTRGLFVBQUEsRUFBVyxNQUF2RztHQUFOLENBUGIsQ0FBQTtBQUFBLEVBUUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsTUFBbkIsQ0FSQSxDQUFBO0FBQUEsRUFTQSxNQUFNLENBQUMsT0FBUCxHQUFpQixJQVRqQixDQUFBO0FBQUEsRUFXQSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQWQsQ0FDQztBQUFBLElBQUEsS0FBQSxFQUFPO0FBQUEsTUFBQyxDQUFBLEVBQUUsT0FBSDtBQUFBLE1BQVksQ0FBQSxFQUFFLE9BQWQ7QUFBQSxNQUF1QixLQUFBLEVBQU0sQ0FBN0I7QUFBQSxNQUFnQyxNQUFBLEVBQU8sQ0FBdkM7S0FBUDtBQUFBLElBQ0EsSUFBQSxFQUFNO0FBQUEsTUFBQyxDQUFBLEVBQUUsVUFBSDtBQUFBLE1BQWUsQ0FBQSxFQUFFLFVBQWpCO0FBQUEsTUFBNkIsS0FBQSxFQUFNLGlCQUFBLEdBQWtCLENBQXJEO0FBQUEsTUFBd0QsTUFBQSxFQUFPLGlCQUFBLEdBQWtCLENBQWpGO0tBRE47R0FERCxDQVhBLENBQUE7QUFBQSxFQWNBLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWQsR0FBaUMsZ0JBZGpDLENBQUE7QUFBQSxFQWdCQSxNQUFNLENBQUMsRUFBUCxDQUFVLE1BQU0sQ0FBQyxlQUFqQixFQUFrQyxTQUFDLFFBQUQsRUFBVyxRQUFYLEdBQUE7QUFFakMsUUFBQSxVQUFBO0FBQUEsSUFBQSxVQUFBLEdBQWE7QUFBQSxNQUFDLENBQUEsRUFBRSxDQUFBLE9BQUg7QUFBQSxNQUFhLENBQUEsRUFBRSxDQUFBLE9BQWY7S0FBYixDQUFBO0FBQ0EsSUFBQSxJQUFHLFFBQUEsS0FBWSxNQUFmO0FBQTJCLE1BQUEsVUFBQSxHQUFhO0FBQUEsUUFBQyxDQUFBLEVBQUUsQ0FBQSxVQUFIO0FBQUEsUUFBZ0IsQ0FBQSxFQUFFLENBQUEsVUFBbEI7T0FBYixDQUEzQjtLQURBO1dBRUEsTUFBTSxDQUFDLE9BQVAsQ0FDQztBQUFBLE1BQUEsVUFBQSxFQUFZLFVBQVo7QUFBQSxNQUNBLEtBQUEsRUFBTyxnQkFBZ0IsQ0FBQyxLQUR4QjtBQUFBLE1BRUEsSUFBQSxFQUFNLGdCQUFnQixDQUFDLElBRnZCO0FBQUEsTUFHQSxNQUFBLEVBQVEsZ0JBQWdCLENBQUMsTUFIekI7S0FERCxFQUppQztFQUFBLENBQWxDLENBaEJBLENBQUE7QUFBQSxFQTBCQSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWQsQ0FBNEIsT0FBNUIsQ0ExQkEsQ0FBQTtBQTJCQSxTQUFPLE1BQVAsQ0E1QmdCO0FBQUEsQ0FMakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFkZCB0aGUgZm9sb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby5cbiMgbW9kdWxlID0gcmVxdWlyZSBcIm1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBtb2R1bGUubXlGdW5jKCkgb3IgbW9kdWxlLm15VmFyXG5cbmRlZmF1bHRDdXJ2ZSA9IFwiY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDEsIDEpXCJcbmRlZmF1bHRUaW1lID0gMC4yXG5kZWZhdWx0UmVwZWF0ID0gMFxuZGVmYXVsdEFuaW1hdGlvbk9wdGlvbnMgPSB7Y3VydmU6ZGVmYXVsdEN1cnZlLCB0aW1lOmRlZmF1bHRUaW1lLCByZXBlYXQ6ZGVmYXVsdFJlcGVhdH1cblxuZXhwb3J0cy5yaXBwbGUgPSAobGF5ZXJBLCBsYXllckIsIG9yaWdpblgsIG9yaWdpblksIGFuaW1hdGlvbk9wdGlvbnMgPSBkZWZhdWx0QW5pbWF0aW9uT3B0aW9ucyktPlxuXHRhbmltYXRpb25PcHRpb25zLmN1cnZlID89IGRlZmF1bHRDdXJ2ZVxuXHRhbmltYXRpb25PcHRpb25zLnRpbWUgPz0gZGVmYXVsdFRpbWVcblx0YW5pbWF0aW9uT3B0aW9ucy5yZXBlYXQgPz0gZGVmYXVsdFJlcGVhdFxuXG5cdGNpcmNsZUJvdW5kaW5nUmFkID0gTWF0aC5zcXJ0KE1hdGgucG93KGxheWVyQS53aWR0aCwgMikgKyAoTWF0aC5wb3cgbGF5ZXJBLmhlaWdodCwgMikpLzJcblx0Y2lyY2xlRW5kWCA9IGxheWVyQS53aWR0aC8yLWNpcmNsZUJvdW5kaW5nUmFkXG5cdGNpcmNsZUVuZFkgPSBsYXllckEuaGVpZ2h0LzItY2lyY2xlQm91bmRpbmdSYWRcblx0Y2lyY2xlID0gbmV3IExheWVyIHg6b3JpZ2luWCwgeTpvcmlnaW5ZLCB3aWR0aDowLCBoZWlnaHQ6MCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOlwiNTAlXCIsIHN1cGVyTGF5ZXI6bGF5ZXJBXG5cdGNpcmNsZS5hZGRTdWJMYXllciBsYXllckJcblx0bGF5ZXJCLmZvcmNlMmQgPSB0cnVlXG5cblx0Y2lyY2xlLnN0YXRlcy5hZGRcblx0XHRlbXB0eToge3g6b3JpZ2luWCwgeTpvcmlnaW5ZLCB3aWR0aDowLCBoZWlnaHQ6MH1cblx0XHRmaWxsOiB7eDpjaXJjbGVFbmRYLCB5OmNpcmNsZUVuZFksIHdpZHRoOmNpcmNsZUJvdW5kaW5nUmFkKjIsIGhlaWdodDpjaXJjbGVCb3VuZGluZ1JhZCoyfVxuXHRjaXJjbGUuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSBhbmltYXRpb25PcHRpb25zXG5cblx0Y2lyY2xlLm9uIEV2ZW50cy5TdGF0ZVdpbGxTd2l0Y2gsIChvbGRTdGF0ZSwgbmV3U3RhdGUpLT5cblx0XHQjIGxheWVyQi5zdGF0ZXMuc3dpdGNoIG5ld1N0YXRlXG5cdFx0cHJvcGVydGllcyA9IHt4Oi1vcmlnaW5YLCB5Oi1vcmlnaW5ZfVxuXHRcdGlmIG5ld1N0YXRlIGlzIFwiZmlsbFwiIHRoZW4gcHJvcGVydGllcyA9IHt4Oi1jaXJjbGVFbmRYLCB5Oi1jaXJjbGVFbmRZfVxuXHRcdGxheWVyQi5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzXG5cdFx0XHRjdXJ2ZTogYW5pbWF0aW9uT3B0aW9ucy5jdXJ2ZVxuXHRcdFx0dGltZTogYW5pbWF0aW9uT3B0aW9ucy50aW1lXG5cdFx0XHRyZXBlYXQ6IGFuaW1hdGlvbk9wdGlvbnMucmVwZWF0XG5cblx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZW1wdHlcIlxuXHRyZXR1cm4gY2lyY2xlXG4iXX0=
