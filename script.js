document.addEventListener('DOMContentLoaded', function () {
    let currentNewsIndex = 0;
    const newsItems = document.querySelectorAll('.news-item');
    const totalNewsItems = newsItems.length;

    setInterval(() => {
        newsItems[currentNewsIndex].style.display = 'none';
        currentNewsIndex = (currentNewsIndex + 1) % totalNewsItems;
        newsItems[currentNewsIndex].style.display = 'inline-flex';
    }, 15000); // Change news item every 5 seconds
});
