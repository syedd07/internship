function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

function verifyCertificate(certificateNumber) {
    copyToClipboard(certificateNumber);
    window.open('https://internshala.com/verify_certificate', '_blank');
}
