// ========================================
// Video Player - Advanced Controls
// ========================================

// DOM Elements
const videoPlayer = document.getElementById('videoPlayer');
const videoPlayerWrapper = document.getElementById('videoPlayerWrapper');
const videoControls = document.getElementById('videoControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const playOverlay = document.getElementById('playOverlay');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const progressHandle = document.getElementById('progressHandle');
const timeTooltip = document.getElementById('timeTooltip');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const skipBackBtn = document.getElementById('skipBackBtn');
const skipForwardBtn = document.getElementById('skipForwardBtn');
const speedBtn = document.getElementById('speedBtn');
const speedMenu = document.getElementById('speedMenu');
const speedOptions = document.querySelectorAll('.speed-option');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const theaterBtn = document.getElementById('theaterBtn');
const miniPlayerBtn = document.getElementById('miniPlayerBtn');

// State
let isPlaying = false;
let isMuted = false;
let currentVolume = 1;
let currentSpeed = 1;
let isTheaterMode = false;
let controlsTimeout;

// ========================================
// Initialization
// ========================================
if (videoPlayer) {
    initializeVideoPlayer();
}

function initializeVideoPlayer() {
    attachVideoEventListeners();
    setupControlsAutoHide();

    // Set initial volume
    videoPlayer.volume = currentVolume;
    volumeSlider.value = currentVolume * 100;
}

// ========================================
// Event Listeners
// ========================================
function attachVideoEventListeners() {
    // Play/Pause
    playPauseBtn.addEventListener('click', togglePlayPause);
    videoPlayer.addEventListener('click', togglePlayPause);
    playOverlay.addEventListener('click', togglePlayPause);

    // Progress bar
    progressBar.addEventListener('click', seek);
    progressBar.addEventListener('mousemove', showTimeTooltip);
    progressBar.addEventListener('mouseleave', hideTimeTooltip);

    // Volume
    muteBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('input', changeVolume);

    // Skip
    skipBackBtn.addEventListener('click', () => skip(-10));
    skipForwardBtn.addEventListener('click', () => skip(10));

    // Speed
    speedBtn.addEventListener('click', toggleSpeedMenu);
    speedOptions.forEach(option => {
        option.addEventListener('click', () => changeSpeed(parseFloat(option.dataset.speed)));
    });

    // Fullscreen
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Theater mode
    theaterBtn.addEventListener('click', toggleTheaterMode);

    // Mini player
    miniPlayerBtn.addEventListener('click', enableMiniPlayer);

    // Video events
    videoPlayer.addEventListener('timeupdate', updateProgress);
    videoPlayer.addEventListener('loadedmetadata', updateDuration);
    videoPlayer.addEventListener('ended', onVideoEnded);
    videoPlayer.addEventListener('play', onPlay);
    videoPlayer.addEventListener('pause', onPause);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Double click for fullscreen
    videoPlayer.addEventListener('dblclick', toggleFullscreen);
}

// ========================================
// Controls Auto-hide
// ========================================
function setupControlsAutoHide() {
    videoPlayerWrapper.addEventListener('mousemove', () => {
        videoControls.classList.add('show');
        clearTimeout(controlsTimeout);

        if (isPlaying) {
            controlsTimeout = setTimeout(() => {
                videoControls.classList.remove('show');
            }, 3000);
        }
    });

    videoPlayerWrapper.addEventListener('mouseleave', () => {
        if (isPlaying) {
            videoControls.classList.remove('show');
        }
    });
}

// ========================================
// Play/Pause Functions
// ========================================
function togglePlayPause() {
    if (videoPlayer.paused) {
        play();
    } else {
        pause();
    }
}

function play() {
    videoPlayer.play();
}

function pause() {
    videoPlayer.pause();
}

function onPlay() {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playPauseBtn.setAttribute('aria-label', 'Pause');
    showPlayOverlayIcon('fa-pause');
}

function onPause() {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    playPauseBtn.setAttribute('aria-label', 'Play');
    videoControls.classList.add('show');
    showPlayOverlayIcon('fa-play');
}

function showPlayOverlayIcon(iconClass) {
    playOverlay.innerHTML = `<i class="fas ${iconClass}"></i>`;
    playOverlay.classList.add('show');
    setTimeout(() => {
        playOverlay.classList.remove('show');
    }, 500);
}

// ========================================
// Progress Bar Functions
// ========================================
function updateProgress() {
    const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressFilled.style.width = `${percent}%`;
    progressHandle.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(videoPlayer.currentTime);
}

function updateDuration() {
    durationEl.textContent = formatTime(videoPlayer.duration);
}

function seek(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoPlayer.currentTime = percent * videoPlayer.duration;
}

function showTimeTooltip(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * videoPlayer.duration;

    timeTooltip.textContent = formatTime(time);
    timeTooltip.style.left = `${e.clientX - rect.left}px`;
}

function hideTimeTooltip() {
    // Tooltip hides via CSS
}

// ========================================
// Volume Functions
// ========================================
function toggleMute() {
    if (isMuted) {
        unmute();
    } else {
        mute();
    }
}

function mute() {
    isMuted = true;
    videoPlayer.volume = 0;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeSlider.value = 0;
}

function unmute() {
    isMuted = false;
    videoPlayer.volume = currentVolume;
    updateVolumeIcon(currentVolume);
    volumeSlider.value = currentVolume * 100;
}

function changeVolume(e) {
    const volume = e.target.value / 100;
    videoPlayer.volume = volume;
    currentVolume = volume;

    if (volume === 0) {
        isMuted = true;
    } else {
        isMuted = false;
    }

    updateVolumeIcon(volume);
}

function updateVolumeIcon(volume) {
    if (volume === 0) {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else if (volume < 0.5) {
        muteBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

// ========================================
// Skip Functions
// ========================================
function skip(seconds) {
    videoPlayer.currentTime = Math.max(0, Math.min(videoPlayer.duration, videoPlayer.currentTime + seconds));
}

// ========================================
// Speed Functions
// ========================================
function toggleSpeedMenu() {
    speedMenu.classList.toggle('show');
}

function changeSpeed(speed) {
    currentSpeed = speed;
    videoPlayer.playbackRate = speed;

    speedOptions.forEach(option => {
        option.classList.toggle('active', parseFloat(option.dataset.speed) === speed);
    });

    const speedText = speed === 1 ? '1x' : `${speed}x`;
    speedBtn.querySelector('.speed-text').textContent = speedText;
    speedMenu.classList.remove('show');
}

// Close speed menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.speed-control')) {
        speedMenu.classList.remove('show');
    }
});

// ========================================
// Fullscreen Functions
// ========================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

function enterFullscreen() {
    if (videoPlayerWrapper.requestFullscreen) {
        videoPlayerWrapper.requestFullscreen();
    } else if (videoPlayerWrapper.webkitRequestFullscreen) {
        videoPlayerWrapper.webkitRequestFullscreen();
    } else if (videoPlayerWrapper.msRequestFullscreen) {
        videoPlayerWrapper.msRequestFullscreen();
    }
    fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
}

// Listen for fullscreen changes
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

// ========================================
// Theater Mode
// ========================================
function toggleTheaterMode() {
    isTheaterMode = !isTheaterMode;

    if (isTheaterMode) {
        videoPlayerWrapper.style.maxWidth = '100%';
        videoPlayerWrapper.style.aspectRatio = '21 / 9';
        theaterBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        videoPlayerWrapper.style.maxWidth = '';
        videoPlayerWrapper.style.aspectRatio = '16 / 9';
        theaterBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}

// ========================================
// Mini Player
// ========================================
function enableMiniPlayer() {
    const miniPlayer = document.getElementById('miniPlayer');
    const miniPlayerVideo = document.getElementById('miniPlayerVideo');

    if (!miniPlayer || !miniPlayerVideo) return;

    // Clone video source to mini player
    miniPlayerVideo.src = videoPlayer.src;
    miniPlayerVideo.currentTime = videoPlayer.currentTime;

    // Show mini player
    miniPlayer.style.display = 'block';

    // Pause main video
    videoPlayer.pause();

    // Play mini player video
    miniPlayerVideo.play();

    // Setup mini player controls
    setupMiniPlayerControls(miniPlayerVideo);
}

function setupMiniPlayerControls(miniPlayerVideo) {
    const miniPlayPauseBtn = document.getElementById('miniPlayPauseBtn');
    const miniCloseBtn = document.getElementById('miniCloseBtn');
    const miniPlayer = document.getElementById('miniPlayer');

    if (miniPlayPauseBtn) {
        miniPlayPauseBtn.addEventListener('click', () => {
            if (miniPlayerVideo.paused) {
                miniPlayerVideo.play();
                miniPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                miniPlayerVideo.pause();
                miniPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }

    if (miniCloseBtn) {
        miniCloseBtn.addEventListener('click', () => {
            miniPlayer.style.display = 'none';
            videoPlayer.currentTime = miniPlayerVideo.currentTime;
            videoPlayer.play();
        });
    }
}

// ========================================
// Keyboard Shortcuts
// ========================================
function handleKeyboardShortcuts(e) {
    // Ignore if typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'arrowleft':
            e.preventDefault();
            skip(-5);
            break;
        case 'arrowright':
            e.preventDefault();
            skip(5);
            break;
        case 'j':
            e.preventDefault();
            skip(-10);
            break;
        case 'l':
            e.preventDefault();
            skip(10);
            break;
        case 'arrowup':
            e.preventDefault();
            changeVolumeByKey(0.05);
            break;
        case 'arrowdown':
            e.preventDefault();
            changeVolumeByKey(-0.05);
            break;
        case 'm':
            e.preventDefault();
            toggleMute();
            break;
        case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 't':
            e.preventDefault();
            toggleTheaterMode();
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            e.preventDefault();
            const percent = parseInt(e.key) / 10;
            videoPlayer.currentTime = videoPlayer.duration * percent;
            break;
    }
}

function changeVolumeByKey(delta) {
    const newVolume = Math.max(0, Math.min(1, videoPlayer.volume + delta));
    videoPlayer.volume = newVolume;
    currentVolume = newVolume;
    volumeSlider.value = newVolume * 100;
    updateVolumeIcon(newVolume);

    if (newVolume > 0) {
        isMuted = false;
    }
}

// ========================================
// Video End Handler
// ========================================
function onVideoEnded() {
    // Show replay button
    playPauseBtn.innerHTML = '<i class="fas fa-redo"></i>';

    // Auto-play next video (if available)
    // This would be implemented with actual video queue
}

// ========================================
// Utility Functions
// ========================================
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// ========================================
// Video Page Specific Features
// ========================================

// Like/Dislike buttons
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const saveBtn = document.getElementById('saveBtn');
const shareBtn = document.getElementById('shareBtn');
const downloadBtn = document.getElementById('downloadBtn');
const subscribeBtn = document.getElementById('subscribeBtn');

if (likeBtn) {
    likeBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        dislikeBtn.classList.remove('active');
        const icon = this.querySelector('i');
        icon.className = this.classList.contains('active') ? 'fas fa-thumbs-up' : 'far fa-thumbs-up';

        if (window.VidStream) {
            window.VidStream.showToast('Added to Liked Videos', 'success');
        }
    });
}

if (dislikeBtn) {
    dislikeBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        likeBtn.classList.remove('active');
        const icon = this.querySelector('i');
        icon.className = this.classList.contains('active') ? 'fas fa-thumbs-down' : 'far fa-thumbs-down';
    });
}



if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        // Copy current URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            if (window.VidStream) {
                window.VidStream.showToast('Link copied to clipboard!', 'success');
            }
        });
    });
}

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        if (window.VidStream) {
            window.VidStream.showToast('Download feature coming soon!', 'info');
        }
    });
}

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function () {
        this.classList.toggle('subscribed');
        this.textContent = this.classList.contains('subscribed') ? 'Subscribed' : 'Subscribe';

        if (window.VidStream) {
            window.VidStream.showToast(this.classList.contains('subscribed') ? 'Subscribed!' : 'Unsubscribed', 'success');
        }
    });
}

// Show More Description
const showMoreBtn = document.getElementById('showMoreBtn');
const descriptionText = document.querySelector('.description-text');

if (showMoreBtn && descriptionText) {
    showMoreBtn.addEventListener('click', function () {
        descriptionText.classList.toggle('expanded');
        this.textContent = descriptionText.classList.contains('expanded') ? 'Show less' : 'Show more';
    });
}

// Comments
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');

// Sample comments
const sampleComments = [
    {
        author: 'John Doe',
        date: '2 days ago',
        text: 'This is an amazing video! The quality is incredible and the content is very informative. Keep up the great work!',
        likes: 245
    },
    {
        author: 'Jane Smith',
        date: '1 week ago',
        text: 'Thanks for sharing this. Very helpful tutorial!',
        likes: 89
    },
    {
        author: 'Tech Enthusiast',
        date: '3 days ago',
        text: 'I\'ve been looking for something like this. Exactly what I needed!',
        likes: 156
    }
];

function renderComments() {
    if (!commentsList) return;

    commentsList.innerHTML = sampleComments.map(comment => `
        <div class="comment-item">
            <div class="user-avatar small">${comment.author[0]}</div>
            <div class="comment-content">
                <div>
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions">
                    <button class="comment-action">
                        <i class="far fa-thumbs-up"></i>
                        ${comment.likes}
                    </button>
                    <button class="comment-action">
                        <i class="far fa-thumbs-down"></i>
                    </button>
                    <button class="comment-action">Reply</button>
                </div>
            </div>
        </div>
    `).join('');
}

if (commentsList) {
    renderComments();
}

// Related Videos
const relatedVideosList = document.getElementById('relatedVideosList');

const relatedVideos = [
    {
        title: 'Advanced JavaScript Concepts You Should Know',
        channel: 'Code Academy',
        views: '890K views',
        date: '1 week ago',
        duration: '18:45',
        thumbnail: 'https://picsum.photos/seed/related1/320/180'
    },
    {
        title: 'CSS Grid vs Flexbox - Complete Guide',
        channel: 'Web Dev Simplified',
        views: '1.2M views',
        date: '3 days ago',
        duration: '22:30',
        thumbnail: 'https://picsum.photos/seed/related2/320/180'
    },
    {
        title: 'React Hooks Explained in 10 Minutes',
        channel: 'Tech Academy',
        views: '650K views',
        date: '5 days ago',
        duration: '10:15',
        thumbnail: 'https://picsum.photos/seed/related3/320/180'
    }
];

function renderRelatedVideos() {
    if (!relatedVideosList) return;

    relatedVideosList.innerHTML = relatedVideos.map(video => `
        <div class="related-video-card">
            <div class="related-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="related-info">
                <h4 class="related-title">${video.title}</h4>
                <p class="related-channel">${video.channel}</p>
                <p class="related-stats">${video.views} • ${video.date}</p>
            </div>
        </div>
    `).join('');
}

if (relatedVideosList) {
    renderRelatedVideos();
}
