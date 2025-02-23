document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const moreInfo = section.querySelector('.more-info');

        section.addEventListener('click', function () {
            if (moreInfo) {
                moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});