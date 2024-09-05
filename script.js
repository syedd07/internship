document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.verify-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateNumber = this.dataset.certificateNumber;
            verifyCertificate(certificateNumber);
        });
    });

    function verifyCertificate(certificateNumber) {
        navigator.clipboard.writeText(certificateNumber).then(() => {
            alert('Certificate number copied to clipboard. You will be redirected to Internshala for verification.');
            window.open(`https://internshala.com/verify_certificate?certificate_number=${certificateNumber}`, '_blank');
        }, () => {
            alert('Failed to copy the certificate number.');
        });
    }
});
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
        alert('Certificate number copied: ' + text);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}
