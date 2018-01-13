App.onLaunch = function(options) {
var singleVideo = new MediaItem('video', 'http://localhost:9001/webpage.mp4');
    var videoList = new Playlist();
    videoList.push(singleVideo)
    var myPlayer = new Player();
    myPlayer.playlist = videoList;
    myPlayer.play();
}

App.onExit = function() {
    console.log('App finished');
}
