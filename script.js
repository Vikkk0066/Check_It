let wrappper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.register');
let registrationLink = document.querySelector('.login');
let logbtnPop = document.querySelector('.signupbtn');
let closeIcon = document.querySelector('.close-icon');

let passWord = true;

loginLink.addEventListener('click',()=> {
    wrappper.classList.add('active');
});


registrationLink.addEventListener('click',()=> {
    wrappper.classList.remove('active');
});

logbtnPop.addEventListener('click',()=> {
    wrappper.classList.add('active-popup');
});

closeIcon.addEventListener('click',()=> {
    wrappper.classList.remove('active-popup');
});

function eyeBlink() {
    if(passWord){
        document.getElementById("eye-con").setAttribute("type","password");
        passWord=true;
    }
    else{
        document.getElementById("eye-con").setAttribute("type","text");
        passWord=false;
    }
}
