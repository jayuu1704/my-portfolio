
const certificateCards = document.querySelectorAll(".certificate-card");
const certificateModal = document.getElementById("certificateModal");
const modalCertificateImage = document.getElementById("modalCertificateImage");
const modalTitle = document.getElementById("modalTitle");
const closeCertificate = document.getElementById("closeCertificate");

certificateCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const imagePath = card.dataset.image;
        const certificateTitle = card.dataset.title;

        modalTitle.textContent = certificateTitle;
        modalCertificateImage.alt = certificateTitle;
        modalCertificateImage.src = imagePath;

        certificateModal.showModal();
    });
});

closeCertificate.addEventListener("click", function () {
    certificateModal.close();
});

certificateModal.addEventListener("click", function (event) {
    if (event.target === certificateModal) {
        certificateModal.close();
    }
});

certificateModal.addEventListener("close", function () {
    modalCertificateImage.src = "";
});
