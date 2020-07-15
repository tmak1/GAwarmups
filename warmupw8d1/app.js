var servicesTab = document.querySelector('#services-tab');
var mainCard = document.querySelector('.card');
var coding = document.querySelector('#coding');
var codingSub = document.querySelector('#coding-sub');


coding.addEventListener('click', e =>{
    e.preventDefault();
    if (codingSub.style.display === '') {
        codingSub.style.display = 'block';
    } else if (codingSub.style.display === 'block') {
        codingSub.style.display = '';
    } 
});

servicesTab.addEventListener('click', e =>{
    e.preventDefault(); 
    if (mainCard.style.display === '') {
        mainCard.style.display = 'block';
    } else if (mainCard.style.display === 'block') {
        mainCard.style.display = '';
    }
    
});





