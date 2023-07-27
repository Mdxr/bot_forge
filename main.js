const models = document.querySelectorAll('.model');
const parameters = document.querySelectorAll('.parameter');
const triggers = document.querySelectorAll('.price-trigger');
const discountedPrice = document.getElementById('discounted-price');
const totalPrice = document.getElementById('total-price');
const proceed = document.getElementById('proceed');
const form = document.getElementById('form');
const modal = document.querySelector('.modal')
const modalHead = document.getElementById('modal-head'),
      modalInfo = document.getElementById('modal-information'),
      modalLabel = document.getElementById('modal-label');

form.addEventListener('submit',(e) => {
    if (!form.checkValidity()) {
        e.preventDefault()
        console.log('invalid');
        modalLabel.innerText = 'Dismissed';
        modalHead.innerText = 'Invalid Information';
        modalInfo.innerText = 'Please Fill up the required Fields';
    }   else{
        modalLabel.innerText = 'Success';
        modalHead.innerText = 'Payment  info sent to your Email';
        modalInfo.innerText = ' Note: BotForge Just a landing page for show case pusposes and does not provide any services';
    }
    form.classList.add('was-validated')
})


let modPrice = 50;
let paraPrice = 10;

totalPrice.innerText = modPrice + paraPrice + '$';
discountedPrice.innerText = modPrice + paraPrice + 30 + '$';
models.forEach(model => {
    model.addEventListener('click',() => {
        modPrice = 0;
        let price = parseInt(model.dataset.price);
        modPrice += price;
    })
})
parameters.forEach(parameter => {
    parameter.addEventListener('click',(e) => {
        paraPrice = 0;
        let price = parseInt(parameter.dataset.price);
        paraPrice += price;
    })
})

triggers.forEach(trigger => {
    trigger.addEventListener('click',() => {
        totalPrice.innerText = paraPrice + modPrice + '$';
        discountedPrice.innerText = paraPrice + modPrice + 30 + '$';
    })
})