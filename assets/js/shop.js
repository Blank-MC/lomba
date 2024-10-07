function openModal(image, title, price, description) {
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function checkout() {
    alert("Your order has been added to the cart.");
}

function confirmCancel() {
    if (confirm("Are you sure you want to cancel the order?")) {
        closeModal();
    }
}

function addToCart(event, title, price) {
    event.stopPropagation();
    alert(`Added ${title} to cart for ${price}.`);
}
