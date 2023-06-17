const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc');
const termsCheckBox= document.querySelector('#terms');
const veggieSelector = document.querySelector('#veggie');

form.addEventListener('submit',function(e){
    alert("submited the form");
    console.log('cc',creditCard.value);
    console.log('terms',termsCheckBox.checked);
    console.log('veggieSlector',veggieSelector.value);
    e.preventDefault();
});