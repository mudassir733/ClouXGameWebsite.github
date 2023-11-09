// Login form area
let btn = document.querySelector('.left');
let login = document.querySelector('.login-form');
let close = document.querySelector('.close');
let black = document.querySelector('.black-back');
let flag = 1;
btn.addEventListener('click', function(){
    setTimeout(() => {
        black.style.top = '0'
    }, 600);
    setTimeout(() => {
        login.style.top = '0'
    }, 1000);
    if(flag === 1){
        close.addEventListener('click', function(){
                close.style.top = '-40%'
            
            setTimeout(() => {
                login.style.top = '-100%'
            }, 600);
            
            setTimeout(() => {
                black.style.top = '-100%'
            }, 1000);
        })
    }
});


// Sign up area
let sign = document.querySelector('.signUp-form');
let right = document.querySelector('.right');
let clos1 = document.querySelector('.close1');
let black1 = document.querySelector('.black-back1');
let clos = 1
right.addEventListener('click', function(){
    setTimeout(() => {
        sign.style.top = '0'
    }, 1000);
    setTimeout(() => {
        black1.style.top = '0'
    }, 600);
    
    
    if(clos === 1){
        clos1.addEventListener('click', function(){
                clos1.style.top = '-40%'
            
            setTimeout(() => {
                sign.style.top = '-100%'
            }, 600);

            setTimeout(() => {
                black1.style.top = '-100%'
            }, 1000);
           
        })
    }
    
});
let srchbar = document.querySelector('.search-bar');
let search = document.querySelector('#search');
let closebtn = document.querySelector('.close-btn');
let blackbar = document.querySelector('.search-black-bar');
let colorfl = document.querySelector('.search-colorful-bar');

let bt = 1
search.addEventListener('click', function(){
    setTimeout(() => {
        srchbar.style.top = '0'
    }, 1200);
    setTimeout(() => {
        blackbar.style.top = '0'
    }, 800);
  setTimeout(() => {
    colorfl.style.top = '0'
  }, 400);
    

   
    
    if(bt === 1){
        closebtn.addEventListener('click', function(){
            setTimeout(() => {
                srchbar.style.top = '-100%'
            }, 400);

            setTimeout(() => {
                blackbar.style.top = '-100%'
            }, 800);

            setTimeout(() => {
                colorfl.style.top = '-100%'
              }, 1200);
            bt = 1
            
        })
    }
})


  




// Game Gallery Image Section Area
let list = document.querySelectorAll('.list');
let GameBox = document.querySelectorAll('.game-box');



for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(){
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
            
        }

        this.classList.add('active');

        let defaultfilter = this.getAttribute('data-filter');

        for (let k = 0; k < GameBox.length; k++) {
            GameBox[k].classList.remove('active');
            GameBox[k].classList.add('hide');

            if(GameBox[k].getAttribute('data-item') == defaultfilter || defaultfilter
            == 'all')
            GameBox[k].classList.remove('hide');
            GameBox[k].classList.add('active');
        }


    })
    
};
// This is gallery image for responsive Design
let galleryTitle = document.querySelector('.gallery-title');
let galleryMenu = document.querySelector('.gallery-manu');

galleryTitle.addEventListener('click', function(){
    if (true) {
        galleryMenu.classList.toggle('gallery-toggle');
    }

   
    
});



// For Responsive Bars
const resBlack = document.querySelector(".res-black");
const toggleBars = document.querySelector(".toggle-bars");
const toggleBtn = document.querySelector(".toggle-btn");
const menuBarBtn = document.querySelector(".menu-bar");
const primaryNav = document.querySelector(".primary-nav");
function ShowHideBar() {
    menuBarBtn.addEventListener("click", function(){
        if(toggleBars.style.transform = "translateX(-350px)"){
            setTimeout(() => {
                primaryNav.style.transform = "translateY(-100%)";
            }, 1000);
             
            setTimeout(() => {
                toggleBars.style.transform = "translateX(0)";
            }, 1000);
            

            if (resBlack.style.transform = "translateX(-100%)") {
                setTimeout(() => {
                    resBlack.style.transform = "translateX(0)";
                }, 500);
            }
        }
    
    })
};
ShowHideBar();

toggleBtn.addEventListener("click", function(){
    setTimeout(() => {
        toggleBars.style.transform = "translateX(-350px)";
    }, 500);
    setTimeout(() => {
        resBlack.style.transform = "translateX(-100%)";
    }, 1000);
    
    setTimeout(() => {
        primaryNav.style.transform = "translateY(0)";
    }, 1000);
    
});


