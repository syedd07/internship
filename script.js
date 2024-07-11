function verifyCertificate(certificateNumber) {
    navigator.clipboard.writeText(certificateNumber).then(() => {
        alert('Certificate number copied to clipboard. You will be redirected to Internshala for verification.');
        window.open('https://internshala.com/verify_certificate', '_blank');
    }, () => {
        alert('Failed to copy the certificate number.');
    });
}
