// Require objects.
let express = require('express');
let app     = express();
let aws     = require('aws-sdk');

// Edit this with YOUR email address.
let email   = "paterlini.luca@gmail.com";
    
// Load your AWS credentials and try to instantiate the object.
aws.config.loadFromPath(__dirname + '/config.json');

// Instantiate SES.
let ses = new aws.SES();

// Verify email addresses.
app.get('/verify', function (req, res) {
    let params = {
        EmailAddress: email
    };
    
    ses.verifyEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
});

// Listing the verified email addresses.
app.get('/list', function (req, res) {
    ses.listVerifiedEmailAddresses(function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
});

// Deleting verified email addresses.
app.get('/delete', function (req, res) {
    let params = {
        EmailAddress: email
    };

    ses.deleteVerifiedEmailAddress(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        } 
    });
});

// Sending RAW email including an attachment.
app.get('/send', function (req, res) {
    let ses_mail = "From: 'AWS Tutorial Series' <" + email + ">\n";
    ses_mail = ses_mail + "To: " + email + "\n";
    ses_mail = ses_mail + "Subject: AWS SES Attachment Example\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    ses_mail = ses_mail + "This is the body of the email.\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/plain;\n";
    ses_mail = ses_mail + "Content-Disposition: attachment; filename=\"attachment.txt\"\n\n";
    ses_mail = ses_mail + "AWS Tutorial Series - Really cool file attachment!" + "\n\n";
    ses_mail = ses_mail + "--NextPart--";
    
    let params = {
        RawMessage: { Data: new Buffer(ses_mail) },
        Destinations: [ email ],
        Source: "'AWS Tutorial Series' <" + email + ">'"
    };
    
    ses.sendRawEmail(params, function(err, data) {
        if(err) {
            res.send(err);
        } 
        else {
            res.send(data);
        }           
    });
});

// Start server.
let server = app.listen(8000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('AWS SES example app listening at http://%s:%s', host, port);
});
