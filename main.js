var preloader = document.getElementById("preloader");

const container = document.querySelector('.container');
var slide = document.querySelectorAll('#slide');
const repeat = false;
const noArrows = false;
const noBullets = false;
var slideTotal = slide.length - 1;
var slideCurrent = 4;

var modeToggle = document.getElementById("modeToggle");
var modeToggleLight = document.getElementById("modeToggleLight");
var modeToggleDark = document.getElementById("modeToggleDark");
var sunLight = document.getElementById("sunLight");
var sunDark = document.getElementById("sunDark");
var moonLight = document.getElementById("moonLight");
var moonDark = document.getElementById("moonDark");
var circle = document.getElementById("circle");

var bg1 = document.getElementsByClassName("bg1");
var bg2 = document.getElementsByClassName("bg2");
var bg3 = document.getElementsByClassName("bg3");
var bg4 = document.getElementsByClassName("bg4");
var bg5 = document.getElementsByClassName("bg5");
var bg6 = document.getElementsByClassName("bg6");
var bg7 = document.getElementsByClassName("bg7");
var bg8 = document.getElementsByClassName("bg8");
var bg9 = document.getElementsByClassName("bg9");
var bg10 = document.getElementsByClassName("bg10");
var bg11 = document.getElementsByClassName("bg11");
var bg12 = document.getElementsByClassName("bg12");
var item = document.getElementsByClassName("item");
var head1 = document.getElementsByClassName("head1");
var head2 = document.getElementsByClassName("head2");
var head3 = document.getElementsByClassName("head3");
var head4 = document.getElementsByClassName("head4");
var head5 = document.getElementsByClassName("head5");
var foot1 = document.getElementsByClassName("foot1");
var foot2 = document.getElementsByClassName("foot2");
var mainBodies = document.querySelectorAll('#mainBody');
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var bs = document.getElementsByTagName("b");
var buttons = document.querySelectorAll(".skills button");
var profile = document.getElementsByClassName("profile");

modeToggleLight.style.display = "none";
modeToggleDark.style.display = "block";
moonLight.style.display = "none";
moonDark.style.display = "block";
sunLight.style.display = "none";
sunDark.style.display = "block";
circle.style.display = "block";

window.addEventListener("load",function(){
    preloader.style.display="none";

    modeToggle.addEventListener('click', () => {
        if (modeToggleLight.style.display == "none"){
            modeToggleLight.style.display = "block";
            modeToggleDark.style.display = "none";
            moonLight.style.display = "block";
            moonDark.style.display = "none";
            sunLight.style.display = "block";
            sunDark.style.display = "none";
    
            circle.style.animation = "circleLight 1s";
            circle.style.animationFillMode = "forwards";
            document.body.style.color = "#2a2a2a";
            document.body.style.backgroundImage = 'url("pictures/background_light.webp")';
            bg1[0].src='pictures/bg1_light.svg';
            bg2[0].src='pictures/bg2_light.svg';
            bg3[0].src='pictures/bg3_light.svg';
            bg4[0].src='pictures/bg4_light.svg';
            bg5[0].src='pictures/bg5_light.svg';
            bg6[0].src='pictures/bg6_light.svg';
            bg7[0].src='pictures/bg7_light.svg';
            bg8[0].src='pictures/bg4_light.svg';
            bg9[0].src='pictures/bg9_light.svg';
            bg10[0].src='pictures/bg10_light.svg';
            bg12[0].src='pictures/bg12_light.svg';
            item[0].src='pictures/item_light.svg';
            head1[0].src='pictures/head_light.svg';
            head2[0].src='pictures/head_light.svg';
            head3[0].src='pictures/head_light.svg';
            head4[0].src='pictures/head_light.svg';
            head5[0].src='pictures/head_light.svg';
            foot1[0].src='pictures/foot1_light.svg';
            foot2[0].src='pictures/foot2_light.svg';
            mainBodies.forEach(mainBody => {
                mainBody.style.backgroundColor = "var(--RedaL)";
            });
            Array.from(h1s).forEach(h1 => {
                h1.style.color = "rgb(192, 108, 93)";
            });
            Array.from(bs).forEach(b => {
                b.style.color = "rgb(192, 108, 93)";
            });
            Array.from(h2s).forEach(h2 => {
                h2.style.color = "rgb(95, 122, 173)";
            });
            Array.from(buttons).forEach(button => {
                button.style.backgroundColor = "rgb(162, 162, 162)";
                button.style.color = "#2a2a2a";
            });
        }
        else{
            modeToggleLight.style.display = "none";
            modeToggleDark.style.display = "block";
            moonLight.style.display = "none";
            moonDark.style.display = "block";
            sunLight.style.display = "none";
            sunDark.style.display = "block";
    
            circle.style.animation = "circleDark 1s";            
            document.body.style.color = "rgb(204, 204, 204)";
            document.body.style.backgroundImage = 'url("pictures/background.svg")';
            bg1[0].src='pictures/bg1.svg';
            bg2[0].src='pictures/bg2.svg';
            bg3[0].src='pictures/bg3.svg';
            bg4[0].src='pictures/bg4.svg';
            bg5[0].src='pictures/bg5.svg';
            bg6[0].src='pictures/bg6.svg';
            bg7[0].src='pictures/bg7.svg';
            bg8[0].src='pictures/bg4.svg';
            bg9[0].src='pictures/bg9.svg';
            bg10[0].src='pictures/bg10.svg';
            bg12[0].src='pictures/bg12.svg';
            item[0].src='pictures/item.svg';
            head1[0].src='pictures/head.svg';
            head2[0].src='pictures/head.svg';
            head3[0].src='pictures/head.svg';
            head4[0].src='pictures/head.svg';
            head5[0].src='pictures/head.svg';
            foot1[0].src='pictures/foot1.svg';
            foot2[0].src='pictures/foot2.svg';
            mainBodies.forEach(mainBody => {
                mainBody.style.backgroundColor = "var(--Reda)";
            });
            Array.from(h1s).forEach(h1 => {
                h1.style.color = "rgb(255, 201, 192)";
            });
            Array.from(bs).forEach(b => {
                b.style.color = "rgb(255, 201, 192)";
            });
            Array.from(h2s).forEach(h2 => {
                h2.style.color = "rgb(171, 200, 255)";
            });
            Array.from(buttons).forEach(button => {
                button.style.backgroundColor = "rgb(82, 82, 82)";
                button.style.color = "rgb(204, 204, 204)";
            });
        }
    });












    function initArrows() {
        if (noArrows) {
            return;
        }
        const control_left = document.createElement('div')
        const iLeft = document.createElement('i');
        iLeft.classList.add('fa-solid')
        iLeft.classList.add('fa-circle-chevron-left')
        iLeft.classList.add('control_i')
        control_left.classList.add('control_left')
        control_left.appendChild(iLeft)
        control_left.addEventListener('click', () => {
            slideLeft();
        })
        const control_right = document.createElement('div')
        const iRight = document.createElement('i');
        iRight.classList.add('fa-solid')
        iRight.classList.add('fa-circle-chevron-right')
        iRight.classList.add('control_i')
        control_right.classList.add('control_right')
        control_right.appendChild(iRight)
        control_right.addEventListener('click', () => {
            slideRight();
        })
        container.appendChild(control_right);
        container.appendChild(control_left);
    }

    function slideInitial() {
        initArrows();
        setTimeout(function () {
            slideRight();
        }, 500);
    }

    function updateClasses(slide, addClass, removeClasses) {
        slide.querySelector('img').classList.remove(...removeClasses);
        slide.querySelector('img').classList.add(addClass);  
        slide.style.display = 'block';             
    }


    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }
        
        // Determine preactiveSlide
        if (slideCurrent > 0) {
            var preactiveSlide = slide[slideCurrent - 1];
        } else {
            var preactiveSlide = slide[slideTotal];
        }
        
        // Determine activeSlide
        var activeSlide = slide[slideCurrent];
        
        // Determine proactiveSlide
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide[slideCurrent + 1];
        } else {
            var proactiveSlide = slide[0];
        }
        
        // Determine prepreactiveSlide
        if (preactiveSlide === slide[0]) {
            var prepreactiveSlide = slide[slideTotal];
        } else if (preactiveSlide === slide[slideTotal]) {
            var prepreactiveSlide = slide[slideTotal - 1];
        } else {
            var prepreactiveSlide = slide[slideCurrent - 2];
        }
        
        // Determine proproactiveSlide
        if (proactiveSlide === slide[slideTotal]) {
            var proproactiveSlide = slide[0];
        } else if (proactiveSlide === slide[0]) {
            var proproactiveSlide = slide[1];
        } else {
            var proproactiveSlide = slide[slideCurrent + 2];
        }

        slide.forEach((elem) => {
            var thisSlide = elem;
            slide.forEach((el) => {
                var thisel=el;
                if (thisSlide === el){
                    thisel.style.display='none';
                }
            });
            if (thisSlide.querySelector('img').classList.contains('preactive')) {
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('active');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.add('proactive');
            }
            if (thisSlide.querySelector('img').classList.contains('preactive')) {
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('active');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.add('preactive');
            }
        });
        updateClasses(prepreactiveSlide, 'prepreactive', ['preactive', 'active', 'proactive', 'proproactive']);
        updateClasses(preactiveSlide, 'preactive', ['prepreactive', 'active', 'proactive', 'proproactive']);
        updateClasses(activeSlide, 'active', ['prepreactive', 'preactive', 'proactive', 'proproactive']);
        updateClasses(proactiveSlide, 'proactive', ['prepreactive', 'preactive', 'active', 'proproactive']);
        updateClasses(proproactiveSlide, 'proproactive', ['prepreactive', 'preactive', 'active', 'proactive']);
    }



    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }
        
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide[slideCurrent + 1];
        } else {
            var proactiveSlide = slide[0];
        }
        
        var activeSlide = slide[slideCurrent];
        
        if (slideCurrent > 0) {
            var preactiveSlide = slide[slideCurrent - 1];
        } else {
            var preactiveSlide = slide[slideTotal];
        }
        
        // Determine prepreactiveSlide
        if (slideCurrent === 0) {
            var prepreactiveSlide = slide[slideTotal - 1];
        } else if (slideCurrent === 1) {
            var prepreactiveSlide = slide[slideTotal];
        } else {
            var prepreactiveSlide = slide[slideCurrent - 2];
        }
        
        // Determine proproactiveSlide
        if (slideCurrent === slideTotal) {
            var proproactiveSlide = slide[1];
        } else if (slideCurrent === slideTotal - 1) {
            var proproactiveSlide = slide[0];
        } else {
            var proproactiveSlide = slide[slideCurrent + 2];
        }
        

        slide.forEach((elem) => {
            var thisSlide = elem;

            slide.forEach((el) => {
                var thisel=el;
                if (thisSlide === el){
                    thisel.style.display='none';
                }
            });
            if (thisSlide.querySelector('img').classList.contains('preactive')) {
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('active');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.add('proactive');
            }
            if (thisSlide.querySelector('img').classList.contains('preactive')) {
                thisSlide.querySelector('img').classList.remove('preactive');
                thisSlide.querySelector('img').classList.remove('active');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.remove('proactive');
                thisSlide.querySelector('img').classList.add('preactive');
            }
        });

        updateClasses(prepreactiveSlide, 'prepreactive', ['preactive', 'active', 'proactive', 'proproactive']);
        updateClasses(preactiveSlide, 'preactive', ['prepreactive', 'active', 'proactive', 'proproactive']);
        updateClasses(activeSlide, 'active', ['prepreactive', 'preactive', 'proactive', 'proproactive']);
        updateClasses(proactiveSlide, 'proactive', ['prepreactive', 'preactive', 'active', 'proproactive']);
        updateClasses(proproactiveSlide, 'proproactive', ['prepreactive', 'preactive', 'active', 'proactive']);
    }


    slideInitial();

    

});
