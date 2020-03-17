document.querySelector('.input-box__input').addEventListener('change', (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 100) {
        let res = value.toString() + " " + (100 - value).toString();
        document.querySelector('#segment').setAttribute('stroke-dasharray', res);
    }
})

function on(checkbox) {
    checkbox.querySelector('rect').style.fill = '#7ed221';
    checkbox.querySelector('circle').style.fill = '#fff';
    checkbox.querySelector('circle').style.transform = 'translateX(16px)';
}

function off(checkbox) {
    checkbox.querySelector('rect').style.fill = '#494949';
    checkbox.querySelector('circle').style.fill = '#d6d6d6';
    checkbox.querySelector('circle').style.transform = 'translateX(0)';
}

let diagram = document.querySelector('.progress__diagram')

let hideCheckbox = document.querySelector('#hide-checkbox')
let isVisible = true

hideCheckbox.addEventListener('click', () => {
    if (isVisible) {
        isVisible = false;
        diagram.style.visibility = 'hidden';
        on(hideCheckbox)
    } else {
        isVisible = true;
        diagram.style.visibility = 'visible';
        off(hideCheckbox)
    }
})

let animationCheckbox = document.querySelector('#animation-checkbox')
let isRotating = false;

animationCheckbox.addEventListener('click', () => {
    if (!isRotating) {
        isRotating = true;
        diagram.classList.add('progress__diagram_rotate')
        on(animationCheckbox)
    } else {
        isRotating = false;
        diagram.classList.remove('progress__diagram_rotate')
        off(animationCheckbox)
    }
})