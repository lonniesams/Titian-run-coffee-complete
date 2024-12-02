document.getElementById('apply').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const firstName = document.getElementById('first-name').value;
    const income = parseFloat(document.getElementById('income').value);
    let formErrors = '';

    // Validate email match
    if (email !== confirmEmail) {
        formErrors += '<p>Email addresses do not match.</p>';
    }

    // Validate first name
    if (firstName.trim() === '') {
        formErrors += '<p>First name is required.</p>';
    }

    // Validate all required fields are filled
    const requiredFields = ['email', 'confirm-email', 'first-name', 'last-name', 'city', 'state', 'zip', 'income', 'ssn'];
    requiredFields.forEach(function(field) {
        if (document.getElementById(field).value.trim() === '') {
            formErrors += `<p>${field.replace('-', ' ')} is required.</p>`;
        }
    });

    // Display error messages or proceed
    const formErrorsElement = document.getElementById('form-errors');
    if (formErrors !== '') {
        formErrorsElement.innerHTML = formErrors;
    } else {
        formErrorsElement.innerHTML = ''; // Clear previous errors
        if (income > 20000) {
            alert("Congratulations, You are qualified for a credit line. A credit card will be sent to you in the mail.");
        } else {
            alert("We're sorry, you do not qualify for a credit line at this time.");
        }
    }
});