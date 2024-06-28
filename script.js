//Image transition 
document.addEventListener('DOMContentLoaded', function () {
    const imageBoxes = document.querySelectorAll('.image-box');
    let currentIndex = 0;

    function showNextImage() {
        imageBoxes[currentIndex].style.opacity = '0'; 
        currentIndex = (currentIndex + 1) % imageBoxes.length; 
        imageBoxes[currentIndex].style.display = 'flex'; 
        setTimeout(() => {
            imageBoxes[currentIndex].style.opacity = '1'; 
        }, 10); 
    }

    setInterval(showNextImage, 2000);
});
//scroll Up button 
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

//Button View More 
function viewPdf() {
    window.location.href = 'view-pdf.html'; 
}