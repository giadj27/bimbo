document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    showMoreBtn.addEventListener('click', () => {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            showMoreBtn.textContent = 'Mostrar Menos Información';
        } else {
            moreInfo.style.display = 'none';
            showMoreBtn.textContent = 'Mostrar Más Información';
        }
    });
});
