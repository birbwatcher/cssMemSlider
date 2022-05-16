
let control1 = document.getElementById(1);
let control2 = document.getElementById(2);
let control3 = document.getElementById(3);
let control4 = document.getElementById(4);
let bullet1 = document.getElementsByClassName('bullet')[0];
let bullet2 = document.getElementsByClassName('bullet')[1];
let bullet3 = document.getElementsByClassName('bullet')[2];
let bullet4 = document.getElementsByClassName('bullet')[3];

let counter = 1;
checkCounter(counter);


function checkCounter(counter) {
    if (counter === 1) {
        clearStatus(bullet2);
        clearStatus(bullet3);
        clearStatus(bullet4);
        document.getElementsByClassName('slide')[0].innerHTML = '<img src="images/1.jpg" alt="Hola"></img>';
        document.getElementsByClassName('description')[0].innerHTML = '<p>I dont want to be a front-end developer</p>';
        addAnimation();
    }
    if (counter === 2) {
        clearStatus(bullet1);
        clearStatus(bullet3);
        clearStatus(bullet4);
        document.getElementsByClassName('slide')[0].innerHTML = '<img src="images/2.jpg" alt="Hola"></img>';
        document.getElementsByClassName('description')[0].innerHTML = '<p>We are here</p>';
        addAnimation();
    }
    if (counter === 3) {
        clearStatus(bullet1);
        clearStatus(bullet2);
        clearStatus(bullet4);
        document.getElementsByClassName('slide')[0].innerHTML = '<img src="images/3.jpg" alt="Hola"></img>';
        document.getElementsByClassName('description')[0].innerHTML = '<p>Dreaming about my own project</p>';
        addAnimation();
    }
    if (counter === 4) {
        clearStatus(bullet1);
        clearStatus(bullet2);
        clearStatus(bullet3);
        document.getElementsByClassName('slide')[0].innerHTML = '<img src="images/4.jpg" alt="Hola"></img>'
        document.getElementsByClassName('description')[0].innerHTML = '<p>Other programmers, and you :)</p>';
        addAnimation();
    }
}

function clearStatus(x) {
    if (x.classList.contains('bullet-active')) {
        x.classList.remove('bullet-active');
        x.classList.add('bullet-rest');
    }
}

function toggle (controlName, bulletName, counterNum ) {
        controlName.onmouseover = function () {
        if (bulletName.classList.contains('bullet-active')){
            bulletName.classList.add('bullet-active-hover')
        } else {
            bulletName.classList.add('bullet-hover')
        }
    }

    controlName.onclick = function () {
        bulletName.classList.add('bullet-active-hover')
        bulletName.classList.remove('bullet-rest')
        bulletName.classList.remove('bullet-hover')
        checkCounter(counterNum);
}

    controlName.onmouseleave = function () {
        if (bulletName.classList.contains('bullet-active-hover')) {
            bulletName.classList.remove('bullet-active-hover');
            bulletName.classList.add('bullet-active');
        }
        bulletName.classList.remove('bullet-hover')
    }
}

function addAnimation() {
    document.getElementsByClassName('description')[0].classList.add('smooth-animation');
    document.getElementsByClassName('slide')[0].classList.add('smooth-animation');
    setTimeout(function(){document.getElementsByClassName('description')[0].classList.remove('smooth-animation');
}, 500);
    setTimeout(function(){document.getElementsByClassName('slide')[0].classList.remove('smooth-animation');
}, 500);
}

toggle(control1, bullet1, 1);
toggle(control2, bullet2, 2);
toggle(control3, bullet3, 3);
toggle(control4, bullet4, 4);



// control2.onmouseover = function () {
//     if (bullet2.classList.contains('bullet-active')){
//         bullet2.classList.add('bullet-active-hover')
//     } else {
//         bullet2.classList.add('bullet-hover')
//     }
// }

// control2.onclick = function () {
//     bullet2.classList.add('bullet-active-hover')
//     bullet2.classList.remove('bullet-rest')
//     bullet2.classList.remove('bullet-hover')
//     checkCounter(2);
// }

// control2.onmouseleave = function () {
//     if (bullet2.classList.contains('bullet-active-hover')) {
//         bullet2.classList.remove('bullet-active-hover');
//         bullet2.classList.add('bullet-active');
//     }
//     bullet2.classList.remove('bullet-hover')
// }


// control4.onmouseover = function () {
//     if (bullet4.classList.contains('bullet-active')){
//         bullet4.classList.add('bullet-active-hover')
//     } else {
//         bullet4.classList.add('bullet-hover')
//     }
// }

// control4.onclick = function () {
//     bullet4.classList.add('bullet-active-hover')
//     bullet4.classList.remove('bullet-rest')
//     bullet4.classList.remove('bullet-hover')
//     checkCounter(4);
// }

// control4.onmouseleave = function () {
//     if (bullet4.classList.contains('bullet-active-hover')) {
//         bullet4.classList.remove('bullet-active-hover');
//         bullet4.classList.add('bullet-active');
//     }
//     bullet4.classList.remove('bullet-hover')
// }


// control3.onmouseover = function () {
//     if (bullet3.classList.contains('bullet-active')){
//         bullet3.classList.add('bullet-active-hover')
//     } else {
//         bullet3.classList.add('bullet-hover')
//     }
// }

// control3.onclick = function () {
//     bullet3.classList.add('bullet-active-hover')
//     bullet3.classList.remove('bullet-rest')
//     bullet3.classList.remove('bullet-hover')
//     checkCounter(3);
// }

// control3.onmouseleave = function () {
//     if (bullet3.classList.contains('bullet-active-hover')) {
//         bullet3.classList.remove('bullet-active-hover');
//         bullet3.classList.add('bullet-active');
//     }
//     bullet3.classList.remove('bullet-hover')
// }


// control1.onmouseover = function () {
//     if (bullet1.classList.contains('bullet-active')){
//         bullet1.classList.add('bullet-active-hover')
//     } else {
//         bullet1.classList.add('bullet-hover')
//     }
// }

// control1.onclick = function () {
//     bullet1.classList.add('bullet-active-hover')
//     bullet1.classList.remove('bullet-rest')
//     bullet1.classList.remove('bullet-hover')
//     checkCounter(1);
// }

// control1.onmouseleave = function () {
//     if (bullet1.classList.contains('bullet-active-hover')) {
//         bullet1.classList.remove('bullet-active-hover');
//         bullet1.classList.add('bullet-active');
//     }
//     bullet1.classList.remove('bullet-hover')
// }