function filterCategory(category) {
    const shopCards = document.querySelectorAll('.shop-card');
    shopCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.classList.contains(category) ? card.style.display = 'block' : card.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.shop-card');

    cards.forEach(card => {
        const discountBadge = card.querySelector('.discount-badge');
        const originalPriceElement = card.querySelector('.original-price');
        const priceElement = card.querySelector('.price');

        if (discountBadge) {
            const discountPercentage = parseInt(discountBadge.textContent.replace('%', ''));
            const originalPrice = parseFloat(originalPriceElement.textContent.replace('Rp ', '').replace(',', ''));

            const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
            priceElement.textContent = `Rp ${discountedPrice.toFixed(3).replace('.', '.')}`;
        }
    });
});

function saveProductDetails(element) {
    const productCard = element.closest('.shop-card');
    
    const productImage = productCard.querySelector('img').src;
    const productName = productCard.querySelector('h2').textContent;
    const productPrice = productCard.querySelector('.price').textContent || productCard.querySelector('.original-price').textContent;
    const productDescription = productCard.querySelector('.description').textContent;
    const reviewCount = productCard.querySelector('.review-count').textContent.replace(/[()]/g, '');

    const ratingStars = productCard.querySelectorAll('.rating i.ri-star-fill');
    const rating = ratingStars.length;

    localStorage.setItem('productImage', productImage);
    localStorage.setItem('productName', productName);
    localStorage.setItem('productPrice', productPrice);
    localStorage.setItem('productDescription', productDescription);
    localStorage.setItem('productRating', rating);
    localStorage.setItem('reviewCount', reviewCount);
}
