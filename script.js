// স্বয়ংক্রিয়ভাবে হেড ট্যাগে আইকন ও ম্যানিফেস্ট যুক্ত করার কোড
(function() {
    var head = document.head;

    // manifest.json লিংক করা
    var manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = 'manifest.json';
    head.appendChild(manifestLink);

    // লোগো আইকন লিংক করা
    var iconLink1 = document.createElement('link');
    iconLink1.rel = 'icon';
    iconLink1.type = 'image/png';
    iconLink1.href = 'logo.png';
    head.appendChild(iconLink1);

    var iconLink2 = document.createElement('link');
    iconLink2.rel = 'apple-touch-icon';
    iconLink2.href = 'logo.png';
    head.appendChild(iconLink2);

    // থিম কালার ও অ্যাপ ক্যাপাবিলিটি মেটা ট্যাগ যুক্ত করা
    var metas = [
        { name: 'theme-color', content: '#f4c430' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ];

    metas.forEach(function(item) {
        var meta = document.createElement('meta');
        meta.name = item.name;
        meta.content = item.content;
        head.appendChild(meta);
