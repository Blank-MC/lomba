function nextStep(step) {
    if (step === 2) {
        // Collect data and show on review page
        document.getElementById("review-first-name").innerText = document.getElementById("first-name").value;
        document.getElementById("review-last-name").innerText = document.getElementById("last-name").value;
        document.getElementById("review-email").innerText = document.getElementById("E-Mail").value;
        document.getElementById("review-address").innerText = document.getElementById("address").value;
        
        document.getElementById("review-country").innerText = document.getElementById("country").value;
        document.getElementById("review-province").innerText = document.getElementById("state").value;
        document.getElementById("review-city").innerText = document.getElementById("city").value;
        document.getElementById("review-postal").innerText = document.getElementById("postal-code").value;
        document.getElementById("review-phone").innerText = document.getElementById("phone").value;
        document.getElementById("review-credit-card").innerText = "**** **** **** " + document.getElementById("credit-card").value.slice(-4);
    }
    // Navigate between steps
    document.querySelectorAll('.step').forEach((el) => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
}

function prevStep(step) {
    // Navigate to previous step
    document.querySelectorAll('.step').forEach((el) => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
}

function cancelCheckout() {
    if (confirm("Are you sure you want to cancel the checkout?")) {
        // Reload or navigate to another page as desired
        window.location.href = '/';
    }
}
document.querySelector('.accordion').addEventListener('click', function () {
    this.classList.toggle('active');
    let content = document.querySelector('.accordion-content');
    
    // Toggle the "show" class
    if (content.classList.contains('show')) {
        content.style.maxHeight = null;
        content.classList.remove('show');
    } else {
        content.classList.add('show');
        content.style.maxHeight = content.scrollHeight + 'px'; // Set max-height to the content's height
    }
});