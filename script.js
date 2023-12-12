$(document).ready(function () {
    let currentNewsIndex = 0;
    const newsItems = $('.news-item');
    const totalNewsItems = newsItems.length;
    let isHovering = false;

    // Initially hide all news items except the first one
    newsItems.hide().eq(0).show();

    newsItems.mouseenter(function() {
        isHovering = true;
    }).mouseleave(function() {
        isHovering = false;
    });

    setInterval(function() {
        if (!isHovering) {
            newsItems.eq(currentNewsIndex).fadeOut(function() {
                currentNewsIndex = (currentNewsIndex + 1) % totalNewsItems;
                newsItems.eq(currentNewsIndex).fadeIn();
            });
        }
    }, 5000); // Change news item every 5 seconds
});
