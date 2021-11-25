const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const bulletList = document.getElementsByClassName('bullet')
const bulletListAr = Array.from(bulletList)
const bullets = $('.bullets')
const imageList = $('.image__list')

let currentIndex = 0
bulletList[currentIndex].classList.add('selected');

const changeImageAnimate = (index) => {
    destroyImage(index)
    const imageItem = document.getElementsByClassName(`image__item${index}`)
    imageList.insertAdjacentHTML("beforeend", `<div class='image__item${index}'></div>`)
    const w = imageItem[0].offsetWidth
    for (let i = 1; i < 5; i++) {
        imageList.insertAdjacentHTML("beforeend", `<div class='image__item${index}'></div>`)
        imageItem[i].style.backgroundPosition = `-${w * i}px 0`
        imageItem[i].style.left = `${(w - 1) * i}px`
        imageItem[i].style.animationDelay = `${i * 0.1}s`
    }
    Array.from(imageItem).forEach(el => el.style.zIndex = '2')
}

const destroyImage = (index) => {
    const ImageItem = document.getElementsByClassName(`image__item${index}`)
    ImageItem.length && Array.from(ImageItem).forEach(el => el.remove())
}

const hiddenImage = (index) => {
    const imageItem = document.getElementsByClassName(`image__item${index}`)
    Array.from(imageItem).forEach(el => {
        el.style.zIndex = '1'
    })
}
changeImageAnimate(currentIndex)

const inactivityTime = function() {
    var time;
    window.onload = resetTimer;
    // Change selected when click
    bullets.onclick = (event) => {
        resetTimer
        if (bulletListAr.find(bullet => bullet === event.target)) {
            bulletList[currentIndex].classList.remove('selected')
            event.target.classList.add('selected');
            const bulletSeleted = $('.bullet.selected')
            if (bulletListAr.indexOf(bulletSeleted) !== currentIndex) {
                hiddenImage(currentIndex)
                const nextIndex = bulletListAr.indexOf(bulletSeleted)
                currentIndex = nextIndex
                changeImageAnimate(currentIndex)
            }
        }
    }

    function logout() {
        bulletList[currentIndex].classList.remove('selected')
        hiddenImage(currentIndex)
        currentIndex++;
        if (currentIndex >= bulletList.length) { currentIndex = 0 }
        bulletList[currentIndex].classList.add('selected')
        changeImageAnimate(currentIndex)
    }

    function resetTimer() {
        clearInterval(time)
        time = setInterval(logout, 5000)
    }
};
inactivityTime()

// Hover icon of product
const boxInnerItems = document.getElementsByClassName('box-inner__item')

function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

