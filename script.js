var audio = new Audio('sound.mp3');
audio.loop = true;
audio.autoplay = true;

function countdownToChristmas() {
    const targetTime = new Date();
    targetTime.setHours(24, 0, 0, 0); // Set the countdown time (e.g., 17:58:00)

    const countdownContainer = document.querySelector('.countdown-container');
    const countdownElement = document.getElementById('countdown');

    let timer = setInterval(() => {
        const now = new Date();
        const difference = targetTime - now;

        if (difference <= 0) {
            clearInterval(timer);
            countdownContainer.remove();
            playVideo();
            return;
        }

        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        countdownElement.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function playVideo() {
    const video = document.createElement('video');
    video.id = 'myVideo';
    video.width = 600;
    video.src = 'video.mp4'; // Replace with the path to your video
    video.type = 'video/mp4';

    video.autoplay = true;
    video.loop = true;

    const container = document.getElementById('video-container');
    container.appendChild(video);
    
    video.play();

    stopMusic();
}

function playMusic() {
    // Wait for a user interaction (click anywhere on the page)
    document.body.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Autoplay failed: ', error);
        });
    });
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}
