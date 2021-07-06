const btn=document.querySelector('#btn');
const img=document.getElementById('img');

btn.addEventListener('click', () =>{
   console.log('YES'); 
  // img.classList.add('show');
  img.classList.toggle('show')
})