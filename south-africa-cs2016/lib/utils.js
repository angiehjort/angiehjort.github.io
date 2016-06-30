
  function handleKeyPress(event) {
    if (event.keyCode == 32) {
      var playing = viz.model.state.time.playing;
      viz.setModel({state: {time: {playing: !playing}}});
    }
  }
