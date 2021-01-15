const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.element
}

MediaPlayer.prototype.videoState = function () {
  (this.media.paused) ? this.media.play() : this.media.pause()
};

const player = new MediaPlayer({element: video});

button.onclick = () => player.videoState();
