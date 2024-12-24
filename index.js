

// Gắn sự kiện cho tất cả các video
const videos = document.querySelectorAll('#full video');

videos.forEach(video => {
    // Khi trỏ chuột vào video
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    // Khi rời chuột khỏi video
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Quay lại đầu video
    });
    // Tự động lặp lại video khi kết thúc
    video.addEventListener('ended', () => {
        video.play();
    });
});


//Ghim thanh tabar
// Lấy phần tử navigation
const stickyNav = document.querySelector('.sticky-nav');

// Lắng nghe sự kiện cuộn
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        stickyNav.classList.add('scrolled');
    } else {
        stickyNav.classList.remove('scrolled');
    }
});

