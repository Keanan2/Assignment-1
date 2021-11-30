const ReadMoreButton = document.querySelector('.read-more-button');
const text = document.querySelector('.text');

ReadMoreButton.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})