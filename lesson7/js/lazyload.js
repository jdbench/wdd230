document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages;
  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
  };

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll("[data-src]");
    let imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let image = entry.target;
          image.src = image.dataset.src;
          imageObserver.unobserve(image);
        }
      });
    }, imgOptions);

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    let lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll("[data-src]");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})