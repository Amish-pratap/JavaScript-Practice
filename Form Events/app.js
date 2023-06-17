const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc');
const termsCheckBox= document.querySelector('#terms');
const veggieSelector = document.querySelector('#veggie');

const formData={};

creditCard.addEventListener('input',e=>{
    
    console.log('cc changed',e);
    formData['cc']=e.target.value;
});
veggieSelector.addEventListener('input',e=>{
    
    console.log('veggie changed',e);
    formData['veggie']=e.target.value;
});
termsCheckBox.addEventListener('input',e=>{
    
    console.log('terms changed',e);
    formData['terms']=e.target.checked;
});