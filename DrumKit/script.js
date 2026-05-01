// Play the matching sound and trigger the animation when a key is pressed
window.addEventListener('keydown', function(e) {
    const key = e.key.toLowerCase();
    const sound = document.querySelector(`.sound[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    // Ignore keys that don't have a matching sound
    if (!audio || !sound) return;

    // Rewind so the sound can be replayed even if it's still playing
    audio.currentTime = 0;
    audio.play();

    // Add the CSS class that scales the box up
    sound.classList.add('change');
});

// Remove the animation class once the transform transition ends
function removeTransition(e) {
    // Only react to the transform property to avoid duplicate triggers
    if (e.propertyName !== 'transform') return;
    this.classList.remove('change');
}

// Attach the transitionend listener to every .sound box
const sounds = document.querySelectorAll('.sound');
sounds.forEach(sound => sound.addEventListener('transitionend', removeTransition));