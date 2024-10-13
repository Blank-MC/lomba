const productImage = localStorage.getItem('productImage');
const productName = localStorage.getItem('productName');
const productPrice = localStorage.getItem('productPrice');
const productDescription = localStorage.getItem('productDescription');
const productRating = localStorage.getItem('productRating');
const reviewCount = localStorage.getItem('reviewCount') || '0';

document.getElementById('product-image').src = productImage;
document.getElementById('product-name').textContent = productName;
document.getElementById('product-price').textContent = `${productPrice}`;
document.getElementById('product-description').textContent = productDescription;
document.querySelector('.reviews').textContent = `${reviewCount} reviews`;

const ratingContainer = document.querySelector('.rating');
ratingContainer.innerHTML = '';

for (let i = 0; i < 5; i++) {
    const star = document.createElement('i');
    if (i < productRating) {
        star.classList.add('ri-star-fill');
    } else {
        star.classList.add('ri-star-line');
    }
    ratingContainer.appendChild(star);
}