function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 10; i++) {  // Reduced the number of confetti per interval
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 5 + 5}s`; // Slower fall duration
        confetti.textContent = Math.random() > 0.5 ? '❤️' : '🎉';
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends to prevent overflow
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const audio = document.getElementById('invitationSong');

    // Open the envelope and flip the letter
    const flap = envelope.querySelector('.envelope-flap');
    flap.style.transform = 'rotateX(-180deg)';
    
    setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transform = 'rotateX(0)';
    }, 1000);

    // Play the song
    audio.play();

    // Start the confetti after the envelope is opened
    setTimeout(() => {
        setInterval(createConfetti, 2000);  // Slower rate, generate confetti every 2 seconds
    }, 1500);  // Delay to start confetti after the envelope opens
}
