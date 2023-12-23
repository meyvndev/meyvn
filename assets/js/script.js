// Load the YouTube IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // Auto-play the video.
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // Check if the video has ended and replay from the beginning.
  if (event.data === YT.PlayerState.ENDED) {
    player.seekTo(0);
    player.playVideo();
  }
}