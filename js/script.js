document.addEventListener('DOMContentLoaded', function() {
    var colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
    var headerElements = document.getElementsByClassName('icon');

    for (var i = 0; i < headerElements.length; i++) {
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        headerElements[i].style.backgroundColor = random_color;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var emojis = ['👋🏻', '🔥','🍕','⚽️','🎈','💡','🚀'];
    var headerElements = document.getElementsByClassName('icon');

    for (var i = 0; i < headerElements.length; i++) {
        var random_emoji = emojis[Math.floor(Math.random() * emojis.length)];
        headerElements[i].innerHTML = random_emoji;
    }
});

//from internet -.-