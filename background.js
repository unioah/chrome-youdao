chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        id: 'main',
        bounds: {'width': 320, 'height': 480}
    });
});
