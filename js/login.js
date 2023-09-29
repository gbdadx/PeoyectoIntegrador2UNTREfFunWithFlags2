/*
 *
 * login-register modal
 * 
 */
const aboutBtn=document.querySelector('.about');


aboutBtn.addEventListener('click',()=>{
    modal.classList.add('active');
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
});


