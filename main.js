var preloader = document.getElementById("preloader");

const container = document.querySelector('.container');
var slide = document.querySelectorAll('#slide');
const repeat = false;
const noArrows = false;
const noBullets = false;
var slideTotal = slide.length - 1;
var slideCurrent = 4;

window.addEventListener("load",function(){
    preloader.style.display="none";


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
