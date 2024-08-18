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
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    if (isElementInViewport(div1)) {
        div1.classList.add('animate-left');
    }
    if (isElementInViewport(div2)) {
        div2.classList.add('animate-right');
    }
}

window.addEventListener('scroll', handleScroll);
