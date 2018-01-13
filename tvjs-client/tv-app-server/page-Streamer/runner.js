var page = require('webpage').create();
// page.viewportSize = { width: 1024, height: 768 };

page.open('http://localhost:9001/page-Streamer/stream.html', function () {
  setInterval(function() {
    page.render('/dev/stdout', { format: "png"});
  }, 25);
});

// var page = require('webpage').create();
// page.open('http://github.com/', function() {
//   page.render('github.png');
//   phantom.exit();
// });

// var webPage = require('webpage');
// var page = webPage.create();

// page.viewportSize = { width: 1920, height: 1080 };
// page.open("http://www.google.com", function start(status) {
//   page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
//   phantom.exit();
// });
