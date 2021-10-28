const images = document.querySelectorAll("[data-src]");

function preloadImg(img){
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    CustomElementRegistry.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImg(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});