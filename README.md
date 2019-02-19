holoplay-gamepad
--------------------
A JavaScript library for listening to button press events from a [Looking Glass display](https://lookingglassfactory.com).

![The Looking Glass](https://i.ytimg.com/vi/htFotQi_-jY/maxresdefault.jpg)

# Usage

### Setting up your event listener
```javascript
var gamepad = new HoloPlayGamePad();
gamepad.on(eventName, callback);
```

### Setting up the game loop
```javascript
//Game loop
function WatchForInput(){
    gamepad.tick();
    // Setup a callback for the next animation tick.
    requestAnimationFrame(WatchForInput);
}
WatchForInput()
```

## Events
### Listening to all buttons
To listen to all the buttons, the callback is passed the `name` of the button
  * `buttonDown` - Triggered once when the button is pressed.
  * `buttonPressed` - Triggered each time `tick()` is called and the user is pressing the button.
  * `buttonUp` - Trigger one when the user lifts their finger off the button.
  
### Listening to individual buttons
Each button also has their own callback event.
#### SQUARE
* `squareDown`
* `squarePressed`
* `squareUp`
#### LEFT
* `leftDown`
* `leftPressed`
* `leftUp`
#### RIGHT
* `rightDown`
* `rightPressed`
* `rightUp`
#### CIRCLE
* `circleDown`
* `circlePressed`
* `circleUp`

## Example

```html
<html>
  <head>
    <!-- Bring in the GamePad.js dependencies, use `grunt install` -->
    <script src="dependencies/GamePad/WebModule.js"></script>
    <script>WebModule.publish = true;</script>
    <script src="dependencies/GamePad/GamePadDevice.js"></script>
    <script src="dependencies/GamePad/GamePad.js"></script>
    <script src="dependencies/GamePad/GamePadPlayer.js"></script>

    <!-- Bring in the holoplay-gamepad classes -->    
    <script src="lib/EventEmitter.js"></script>
    <script src="lib/HoloPlayGamePad.js"></script>
    
    <script>
    var gamepad = new HoloPlayGamePad();
    gamepad.on('buttonDown', function(name) {
      document.getElementById("holoButton").innerText = name;
    });
    gamepad.on('buttonUp', function(name) {
      document.getElementById("holoButton").innerText = '';
    });
    
    //Game loop
    function WatchForInput(){
      gamepad.tick();
      // Setup a callback for the next animation tick.
      requestAnimationFrame(WatchForInput);
    }
    WatchForInput()
    </script>
  </head>
  <body>
    Pressing:<span id="holoButton"></span>
  </body>
</html>
```

Try the example yourself:
```bash
git clone https://github.com/jaxzin/holoplay-gamepad.git
yarn install
grunt install
start/open index.html
```