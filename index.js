const form = document.querySelector('#myForm');
const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const phone = form.elements['phone'].value;
    const gender = form.elements['gender'].value;
    const password = form.elements['password'].value;

    if (!name || !email || !phone || !gender || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    // Submit the form if all validations pass
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    form.submit();
});

function validateEmail(email) {
    // Regular expression to match email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
}
