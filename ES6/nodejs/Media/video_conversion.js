let base64 = require('file-base64');
base64.encode('input.mp4', function(err, base64String) {
    base64.decode(base64String, 'output.mp4', function(err, output) {
        console.log('success');
    });
});

