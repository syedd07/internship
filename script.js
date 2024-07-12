}
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
            // Success message
            alert('Certificate number copied to clipboard. You will be redirected for verification.');
            // Open verification URL in new tab
            window.open(`https://internshala.com/verify_certificate?certificate_number=${certificateNumber}`, '_blank');
        }).catch(err => {
            // Error handling for clipboard access
            console.error('Failed to copy certificate number:', err);
            alert('Failed to copy the certificate number. Please try again.');
        });
    }
});
