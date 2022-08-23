const toggleBtn = document.querySelector('.checkbtn');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () =>{
    links.classList.toggle('show-links');
})