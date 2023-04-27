// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // select a horn from drop down menu - correct image should display and the audio file should be set
  // get the image element and selects it based on its src attribute

  let selectHorn = document.getElementById("horn-select");
  let selectImage = document.querySelector('img[src="assets/images/no-image.png"]');
  let selectAudio = document.querySelector('audio[class="hidden"]'); // select audio element and its class

  selectHorn.addEventListener('change', changeHorn);

  function changeHorn(event) {
    if (event.target.value == "air-horn"){
      selectImage.src = "assets/images/air-horn.svg";
      selectAudio.src = "assets/audio/air-horn.mp3";
    } else if (event.target.value == "car-horn") {
      selectImage.src = "assets/images/car-horn.svg";
      selectAudio.src = "assets/audio/car-horn.mp3";
    } else if (event.target.value == "party-horn") {
      selectImage.src = "assets/images/party-horn.svg";
      selectAudio.src = "assets/audio/party-horn.mp3";
    } else { // display nothing
      selectImage.src = "assets/images/no-image.png"
    }
  }


  // changes the volume icon and audio level based on slider
  let volumeControl = document.getElementById('volume-controls');
  let volumeIcon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');

  volumeControl.addEventListener('input', changeVolumeFeatures);

  function changeVolumeFeatures(event) {
    // event.target.value is the value of the slider
    if (event.target.value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (event.target.value >= 1 &&  event.target.value < 33) {
      // display 1st volume level
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (event.target.value >= 33 && event.target.value < 67) {
      // display 2nd volume level
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else if (event.target.value >= 67) {
      // display 3rd volume level
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    } 
    selectAudio.volume = event.target.value / 100;
  }


  // on button click, play the sound and if party-horn, throw confetti
  let buttonClick = document.querySelector('button');
  buttonClick.addEventListener('click', playSound);

  function playSound(event) {
    selectAudio.play();

    if (selectHorn.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      // fun confettis :D
      jsConfetti.addConfetti({
      emojis: ['🌸', '🎉', '🙈', '✨', '🌼', '🌺', '🌷','🦄'],
      confettiRadius: 100,
      confettiNumber: 1000,
      });
    }
  }
}