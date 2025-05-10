const scrollGalleries = document.querySelectorAll(".scrollGallery")

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addScrollAnimation();
}

function addScrollAnimation() {
    for (const scrollGallery of scrollGalleries) {
        scrollGallery.setAttribute("data-animated", true);

        let scrollImages = scrollGallery.querySelector(".scrollImages")
        let images = Array.from(scrollImages.children);

        for (const image of images) {
            let clonedImage = image.cloneNode(true);

            // cloned content is hidden from accessibility API
            clonedImage.setAttribute("aria-hidden", true);
            scrollImages.appendChild(clonedImage);
        }
    }
}