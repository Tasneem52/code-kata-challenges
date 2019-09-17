
// Set focus on the first text field
$("#cc-num").focus();

// Setting variables for -----
const $creditCard = $('#credit-card');
const cardNumberRegex = /^[0-9]{13,16}$/

// Function to return the correct regex value
const isCardNumberValid = (cardNumber) => {
  return cardNumberRegex.test(cardNumber);
}

// validate the field for credit card
const validateCreditCard = () => {
  $('#cc-num').css('border','none');
  $('.invalid-card-message').remove();

  const cardNum = $('#cc-num').val();
  if (!isCardNumberValid(cardNum)) {
    const errorMessage = 'Please enter 13-16 digit card number'
    $('#cc-num').after(`<span class='invalid-card-message'>${errorMessage}<span>`)
    $('.invalid-card-message').css('color','red');
    $('#cc-num').css('border','2px solid red');
    return false;
  }
  return true;
}

// When user hits the registor button then the required error messages are added or removed based on the input validation
$('form').on('submit', (event) => {
  if(!validateCreditCard()) {
    event.preventDefault();
    alert ('Form not submitted')
  } else {
    alert('Form submitted')
  }
});

// Real time validation for each field, to give error messages while the user inputs value in the field
$('#cc-num').on('keydown', (event) => { validateCreditCard(); });
