const slider = document.querySelector('.swiper-container');
let mySwiper;

function laptopSwiper() {
    const snowflake = document.querySelector('.snowflake');
    if (window.innerWidth >= 1440 && slider.dataset.laptop == "false") {
        mySwiper = new Swiper(".swiper-container", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
        });

        mySwiper.on('slideChange', () => {
            if (mySwiper.activeIndex == 0) {
                snowflake.style.top = '41vh';
            } else if (mySwiper.activeIndex == 1) {
                snowflake.style.top = '83vh';
            } else if (mySwiper.activeIndex == 2) {
                snowflake.style.top = '-100vh';
            }
        })

        slider.dataset.laptop = "true";
    }

    if (window.innerWidth < 1440) {
        slider.dataset.laptop = "false";

        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
}

function toggleChange () {
    const toggle = document.querySelector('.popup__toggle-button');
    const popup = document.querySelector('.popup');
    
    toggle.addEventListener('click', function () {
        if (popup.classList.contains('popup--closed')) {
            popup.classList.remove('popup--closed');
            popup.classList.add('popup--open');
        } else {
            popup.classList.add('popup--closed');
            popup.classList.remove('popup--open');
        }
    });
}

function giftsSelection () {
    const giftList = document.querySelectorAll ('.gifts__item');
    const zoomedList = document.querySelectorAll ('.present__item');

    for (let i = 0; i < giftList.length; i++) {
        giftList[i].addEventListener ('click', () => {
            giftList.forEach(gift => {
                gift.classList.remove('gifts__item--active');
            });
            giftList[i].classList.add('gifts__item--active');
            for (let j = 0; j < zoomedList.length; j++) {
                if (j == i) {
                    if (zoomedList[j].classList.contains('visually-hidden')) {
                        zoomedList[j].classList.remove('visually-hidden');
                    }
                } else {
                    if (!zoomedList[j].classList.contains('visually-hidden')) {
                        zoomedList[j].classList.add('visually-hidden');
                    }
                }
            }
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function snowCreator () {
    const snowContainer = document.querySelector ('.body__snow-container');
    snowContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('snow');
        const size = (getRandomInt(5)) * 0.2;
        newDiv.style.width = `${size}vw`;
        newDiv.style.height = `${size}vw`;
        newDiv.style.left = `0`;
        if (window.innerWidth < 1440) {
            newDiv.style.left = `${getRandomInt(450)}px`;
        } else {
            newDiv.style.left = `${getRandomInt(100)}vw`;
        }
        newDiv.style.animation = `snowfall ${(getRandomInt(10)) + 5}s linear infinite`
        newDiv.style.animationDelay = `-${getRandomInt(10)}s`
        snowContainer.appendChild(newDiv);
    }
}

laptopSwiper();
toggleChange();
giftsSelection();
snowCreator();
window.addEventListener('resize', () => {
    laptopSwiper();
    snowCreator();
});