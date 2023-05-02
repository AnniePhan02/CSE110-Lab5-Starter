// explore.js
window.addEventListener('DOMContentLoaded', init);
function init() {

  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const emoji = document.querySelector('img[alt="Smiling face"]');

  // populate the voices list
  const synth = window.speechSynthesis;
  function populateVoices() {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('value', i);
      voiceSelect.appendChild(option);
    }
  }

  // load in the voices
  populateVoices();

  // change the voice select to whatever you choose when you change it
  voiceSelect.addEventListener('change', () => {
    const selectedIndex = voiceSelect.value;
    const voices = synth.getVoices();
    const selectedVoice = voices[selectedIndex];
    textToSpeak.voice = selectedVoice;
  });

  // speak the text and open the emoji mouth when you click on the button
  const textToSpeak = new SpeechSynthesisUtterance();
  speakButton.addEventListener('click', () => {
    textToSpeak.text = textInput.value;
    const selectedIndex = voiceSelect.value;
    const voices = synth.getVoices();
    const selectedVoice = voices[selectedIndex];
    textToSpeak.voice = selectedVoice;
    synth.speak(textToSpeak);
    emoji.src = 'assets/images/smiling-open.png';
  });

  // when the text ends, change the emoji face back to closed
  textToSpeak.addEventListener('end', () => {
    emoji.src = 'assets/images/smiling.png';
  });
}
