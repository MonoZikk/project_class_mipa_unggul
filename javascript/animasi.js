function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    for (var i = 1; i <= 24; i++) {
        var div = document.getElementById('div' + i);
        
        if (div) { // Memastikan elemen ada
            if (i % 2 === 0) { // Jika ID genap
                if (isElementInViewport(div)) {
                    div.classList.add('animate-left');
                }
            } else { // Jika ID ganjil
                if (isElementInViewport(div)) {
                    div.classList.add('animate-right');
                }
            }
        }
    }
}

window.addEventListener('scroll', handleScroll);
