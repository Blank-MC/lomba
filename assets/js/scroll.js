document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.querySelector('.features');
    let autoScrollInterval; 

    const scrollNext = () => {
        const scrollAmount = featuresContainer.clientWidth; 
        const maxScrollLeft = featuresContainer.scrollWidth - featuresContainer.clientWidth; 

        if (featuresContainer.scrollLeft >= maxScrollLeft - 1) {
            featuresContainer.scrollTo({
                left: 0, 
                behavior: 'smooth' 
            });
        } else {
            featuresContainer.scrollBy({
                left: scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

 
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(scrollNext, 4000); 
    };

    startAutoScroll();
});
