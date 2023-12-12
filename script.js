$(document).ready(function () {
    let currentNewsIndex = 0;
    const newsItems = $('.news-item');
    const totalNewsItems = newsItems.length;

    // Initially hide all news items except the first one
    newsItems.hide().eq(0).show();

    setInterval(function() {
        newsItems.eq(currentNewsIndex).fadeOut(function() {
            currentNewsIndex = (currentNewsIndex + 1) % totalNewsItems;
            newsItems.eq(currentNewsIndex).fadeIn();
        });
    }, 5000); // Change news item every 5 seconds
});
