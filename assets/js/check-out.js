document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function formatCurrency(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log('Loaded cart items:', cartItems);

function displayCartItems() {
    const orderItemsContainer = document.querySelector('.item');
    console.log('Cart items:', cartItems);

    orderItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        let totalPrice = 0;

        cartItems.forEach(item => {
            const orderItemDiv = document.createElement('div');
            orderItemDiv.classList.add('summary-item', 'card');
            orderItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="summary-info">
                    <h4>${item.name}</h4> 
                    <p>${formatCurrency(item.price)}</p>
                </div>
            `;
            orderItemsContainer.appendChild(orderItemDiv);
            totalPrice += item.price;
        });

        const totalPriceDiv = document.createElement('h4');
        totalPriceDiv.textContent = 'Total: ' + formatCurrency(totalPrice);
        orderItemsContainer.appendChild(totalPriceDiv);
    }
}

let currentStep = 1;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');

    if (step === 2) {
        updateReviewInfo();
    }
}

function nextStep(step) {
    if (currentStep < step) {
        currentStep = step;
        showStep(currentStep);
    }
}

function prevStep(step) {
    if (currentStep > step) {
        currentStep = step;
        showStep(currentStep);
    }
}

function updateReviewInfo() {
    document.getElementById('review-first-name').textContent = document.getElementById('first-name').value || '-';
    document.getElementById('review-last-name').textContent = document.getElementById('last-name').value || '-';
    document.getElementById('review-email').textContent = document.getElementById('E-Mail').value || '-';
    document.getElementById('review-phone').textContent = document.getElementById('phone').value || '-';
    document.getElementById('review-country').textContent = document.getElementById('country').value || '-';
    document.getElementById('review-province').textContent = document.getElementById('state').value || '-';
    document.getElementById('review-city').textContent = document.getElementById('city').value || '-';
    document.getElementById('review-postal').textContent = document.getElementById('postal-code').value || '-';
    document.getElementById('review-address').textContent = document.getElementById('address').value || '-';
    document.getElementById('review-credit-card').textContent = document.getElementById('credit-card').value || '-';
}

window.addEventListener('load', () => {
    displayCartItems();
    showStep(currentStep);
});

function resetCartAndReturn() {
    localStorage.clear();
    cartItems = [];
    totalPrice = 0;
    window.location.href = 'shop.html';
}
